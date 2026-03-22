#!/usr/bin/env python
"""Test clean clinical summaries"""

import requests
from pathlib import Path

test_image = Path("datasets/Normal/Normal(1).jpg")

with open(test_image, "rb") as f:
    print("="*70)
    print("TESTING CLEAN SUMMARY FORMAT")
    print("="*70)
    
    response = requests.post(
        "http://localhost:8002/predict",
        files={"file": f},
        timeout=30
    )
    
    if response.status_code == 200:
        result = response.json()
        summary = result.get('summary', '')
        
        print(f"\n✓ Diagnosis: {result.get('rhythm')}")
        print(f"  Confidence: {result.get('confidence')}\n")
        print("SUMMARY OUTPUT:")
        print("─" * 70)
        print(summary)
        print("─" * 70)
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
