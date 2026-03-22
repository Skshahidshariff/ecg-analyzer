#!/usr/bin/env python
"""Test all diagnosis categories with clean format"""

import requests
import time

categories = {
    'Normal': 'datasets/Normal/Normal(1).jpg',
    'Myocardial_Infarction': 'datasets/Myocardial_Infarction/MI(1).jpg',
    'Abnormal_Heartbeat': 'datasets/Abnormal_Heartbeat/HB(1).jpg',
    'MI_history': 'datasets/MI_history/PMI(1).jpg'
}

for cat, path in categories.items():
    time.sleep(2)
    with open(path, 'rb') as f:
        r = requests.post('http://127.0.0.1:8006/predict', files={'file': f}, timeout=30)
        if r.status_code == 200:
            data = r.json()
            print('\n' + '='*70)
            print(f'{cat.upper()} - {data["confidence"]}')
            print('='*70)
            summary = data['summary']
            # Show first part of summary
            lines = summary.split('\n')[:20]
            for line in lines:
                print(line)
            if len(summary.split('\n')) > 20:
                print('...')
        else:
            print(f'Error: {r.status_code}')
