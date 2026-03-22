from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
client = MongoClient("mongodb+srv://praneeth:praneeth@cluster0.iidqy09.mongodb.net/ems?retryWrites=true&w=majority")
db = client["ecg"]

users = list(db.users.find({}, {"email": 1, "role": 1}))
print("Users in database:")
for user in users:
    print(f"  Email: {user.get('email')}, Role: {user.get('role')}")

print(f"Total users: {len(users)}")
admin_count = db.users.count_documents({"email": {"$ne": "ecgadmin@gmail.com"}})
print(f"Users excluding admin: {admin_count}")

# Check if admin exists
admin = db.users.find_one({"email": "ecgadmin@gmail.com"})
if admin:
    print(f"Admin user found: {admin}")
else:
    print("Admin user not found - creating it...")
    db.users.insert_one({
        "username": "ecgadmin",
        "email": "ecgadmin@gmail.com",
        "password": "admin@123",
        "role": "admin"
    })
    print("Admin user created!")