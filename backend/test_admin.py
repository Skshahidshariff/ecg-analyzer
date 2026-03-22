import requests
import json

url = "http://127.0.0.1:8000/admin/users-overview"
params = {"admin_email": "ecgadmin@gmail.com"}

try:
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        print("Total Users:", data["totalUsers"])
        print("\nAnalysis Counts:")
        for item in data["analysisCounts"]:
            print(f"  {item['user_email']}: {item['count']}")
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"Error: {e}")