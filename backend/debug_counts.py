from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
client = MongoClient("mongodb+srv://praneeth:praneeth@cluster0.iidqy09.mongodb.net/ems?retryWrites=true&w=majority")
db = client["ecg"]

# Get all users excluding admin
users = list(db.users.find({"email": {"$ne": "ecgadmin@gmail.com"}}, {"email": 1, "username": 1}))
print("All users (excluding admin):")
for user in users:
    print(f"  {user.get('email')}")

print(f"Total users: {len(users)}")

# Get analysis counts
pipeline = [
    {"$match": {"user_email": {"$ne": "ecgadmin@gmail.com"}}},
    {"$group": {"_id": "$user_email", "analysisCount": {"$sum": 1}}},
    {"$sort": {"analysisCount": -1}}
]
analysis_counts = list(db.predictions.aggregate(pipeline))

print("\nUsers with analyses:")
for item in analysis_counts:
    print(f"  {item['_id']}: {item['analysisCount']}")

print(f"Users with analyses: {len(analysis_counts)}")

# Find users without analyses
user_emails = {user["email"] for user in users}
analysis_emails = {item["_id"] for item in analysis_counts}
users_without_analyses = user_emails - analysis_emails

print(f"\nUsers without analyses: {list(users_without_analyses)}")