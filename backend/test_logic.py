from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
client = MongoClient("mongodb+srv://praneeth:praneeth@cluster0.iidqy09.mongodb.net/ems?retryWrites=true&w=majority")
db = client["ecg"]

# Simulate the admin endpoint logic
total_users = db.users.count_documents({"email": {"$ne": "ecgadmin@gmail.com"}})
print(f"Total users: {total_users}")

# Get all users excluding admin
all_users = list(db.users.find({"email": {"$ne": "ecgadmin@gmail.com"}}, {"email": 1}))
print("All users:")
for user in all_users:
    print(f"  {user['email']}")

# Get analysis counts
pipeline = [
    {"$match": {"user_email": {"$ne": "ecgadmin@gmail.com"}}},
    {"$group": {"_id": "$user_email", "analysisCount": {"$sum": 1}}}
]
analysis_results = list(db.predictions.aggregate(pipeline))

# Create a dict of analysis counts
analysis_dict = {item["_id"]: item["analysisCount"] for item in analysis_results}

# Build complete list including users with 0 analyses
analysis_counts = []
for user in all_users:
    user_email = user["email"]
    count = analysis_dict.get(user_email, 0)
    analysis_counts.append({"user_email": user_email, "count": count})

# Sort by analysis count descending
analysis_counts.sort(key=lambda x: x["count"], reverse=True)

print("\nAnalysis counts (including users with 0):")
for item in analysis_counts:
    print(f"  {item['user_email']}: {item['count']}")