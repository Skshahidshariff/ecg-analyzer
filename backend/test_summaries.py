#!/usr/bin/env python
"""Test script to verify beautiful clinical summaries"""

import requests
import json
from pathlib import Path

# Test with a sample ECG image
test_image_path = Path("datasets/Normal/Normal(1).jpg")

if not test_image_path.exists():
    # Find any sample image
    datasets = Path("datasets")
    if datasets.exists():
        for category in datasets.iterdir():
            if category.is_dir():
                for img in category.glob("*.jpg"):
                    test_image_path = img
                    break
            if test_image_path.exists():
                break

if test_image_path.exists():
    print(f"Testing with: {test_image_path}")
    
    with open(test_image_path, "rb") as f:
        files = {"file": f}
        try:
            response = requests.post(
                "http://localhost:8001/predict",
                files=files,
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                print("\n✓ Server responded successfully!")
                print(f"\nDiagnosis: {result.get('rhythm', 'N/A')}")
                print(f"Confidence: {result.get('confidence', 'N/A')}")
                
                # Print the beautiful summary
                summary = result.get('summary', '')
                if summary:
                    print("\n" + "="*70)
                    print("CLINICAL SUMMARY:")
                    print("="*70)
                    print(summary)
                    print("="*70)
                else:
                    print("\nNo summary returned")
                    
                # Print clinical assessment
                clinical = result.get('clinicalAssessment', {})
                if clinical:
                    print("\n" + "="*70)
                    print("CLINICAL ASSESSMENT:")
                    print("="*70)
                    print(json.dumps(clinical, indent=2))
                    print("="*70)
                    
            else:
                print(f"✗ Server returned status {response.status_code}")
                print(f"Response: {response.text}")
                
        except requests.exceptions.ConnectionError:
            print("✗ Could not connect to server on port 8001")
        except Exception as e:
            print(f"✗ Error: {e}")
else:
    print("✗ No sample ECG images found in datasets")
    print("\nTo test the server, upload an ECG image through the web interface at:")
    print("http://localhost:8001/docs")
