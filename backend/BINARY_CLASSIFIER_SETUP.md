# Binary ECG Classifier Setup Guide

## Overview
The binary classifier adds a validation step to detect whether an uploaded image is an ECG image or a non-ECG image before running detailed analysis.

## Setup Instructions

### 1. Organize Your Datasets
Create the following folder structure in the `datasets/` directory:

```
datasets/
├── ECG/              (folder containing ECG images)
│   ├── image1.png
│   ├── image2.jpg
│   └── ...
└── Non_ECG/          (folder containing non-ECG images - other medical images, general images, etc.)
    ├── image1.png
    ├── image2.jpg
    └── ...
```

### 2. Train the Binary Classifier
Edit `model.py` and set:
```python
CLASSIFIER_MODE = "binary"  # Line 27
```

Then run:
```bash
python model.py
```

This will create `ecg_classifier.h5` in the backend folder.

### 3. Verify Classifier is Loaded
Start the FastAPI server and check the logs for:
```
✓ ECG classifier (binary) loaded successfully from ./ecg_classifier.h5
```

## How It Works

1. **User uploads an image** → `/predict` endpoint
2. **Image validation** → checks file format and integrity
3. **Binary classification** → ECG vs Non-ECG check
   - If Non-ECG: Returns error message
   - If ECG: Proceeds to detailed analysis
4. **Detailed ECG analysis** → predicts heart condition
5. **Returns results** with metrics and clinical summary

## Response Examples

### Valid ECG Image
```json
{
  "rhythm": "Normal",
  "confidence": "92.5%",
  "heartRate": "72 BPM",
  "intervals": {
    "pr": "160ms",
    "qrs": "90ms",
    "qtc": "410ms"
  },
  "summary": "..."
}
```

### Invalid (Non-ECG) Image
```json
{
  "detail": "Image does not appear to be an ECG image. Non-ECG confidence: 89.3%. Please upload a valid ECG image."
}
```

## Dataset Recommendations

- **ECG images**: 500-1000+ samples
- **Non-ECG images**: Various medical images (X-rays, CT scans, ultrasounds) + general photos
- **Image format**: PNG, JPG, JPEG, BMP, TIFF
- **Image size**: Minimum 240x240 pixels

## Switching Modes

To train the detailed ECG classifier instead (Abnormal_Heartbeat, MI_history, etc.):
```python
CLASSIFIER_MODE = "detailed"  # Line 27 in model.py
```

Folder structure for detailed mode:
```
datasets/
├── Normal/
├── Abnormal_Heartbeat/
├── Myocardial_Infarction/
└── MI_history/
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Classifier not loading | Ensure `CLASSIFIER_MODE = "binary"` and run `python model.py` |
| Low accuracy | Add more training data, especially diverse Non-ECG samples |
| False positives | Increase threshold or improve dataset quality |

