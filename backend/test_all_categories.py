#!/usr/bin/env python
"""Test all diagnosis categories"""

import requests
import json
from pathlib import Path

categories = {
    "Normal": "datasets/Normal/Normal(1).jpg",
    "Myocardial_Infarction": "datasets/Myocardial_Infarction/MI(1).jpg",
    "Abnormal_Heartbeat": "datasets/Abnormal_Heartbeat/HB(1).jpg",
    "MI_history": "datasets/MI_history/PMI(1).jpg"
}

for category, image_path in categories.items():
    path = Path(image_path)
    if not path.exists():
        print(f"⚠ {category}: Image not found at {image_path}")
        continue
    
    print(f"\n{'='*70}")
    print(f"Testing: {category}")
    print(f"{'='*70}")
    
    with open(path, "rb") as f:
        files = {"file": f}
        try:
            response = requests.post(
                "http://localhost:8001/predict",
                files=files,
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                diagnosis = result.get('rhythm', 'N/A')
                confidence = result.get('confidence', 'N/A')
                summary = result.get('summary', '')
                
                print(f"✓ Diagnosis: {diagnosis}")
                print(f"  Confidence: {confidence}")
                
                if summary:
                    # Show just the header and first few lines
                    lines = summary.split('\n')[:15]
                    print("\n  Summary Preview:")
                    for line in lines:
                        if line.strip():
                            print(f"    {line}")
                    print("    ...")
                    
            else:
                print(f"✗ Status {response.status_code}: {response.text}")
                
        except Exception as e:
            print(f"✗ Error: {e}")
