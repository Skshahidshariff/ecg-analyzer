# ECG Analyzer - Claude AI Integration Setup

## Overview
Your ECG Analyzer has been updated to use **Claude AI Vision** for ECG image analysis instead of a local model. This provides better accuracy, consistency, and no need to manage local model files.

## Setup Instructions

### 1. Get Claude API Key
1. Visit https://console.anthropic.com
2. Sign up or log in to your Anthropic account
3. Create an API key in the dashboard
4. Copy your API key

### 2. Configure Environment Variables
1. Open `backend/.env` file
2. Replace `your_api_key_here` with your actual Claude API key:
   ```
   CLAUDE_API_KEY=sk-ant-xxxxxxxxxxxxx
   ```

### 3. Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 4. Run the Backend
```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## How It Works

### ECG Analysis with Claude AI
The `/predict` endpoint now:

1. **Receives** an ECG image from the frontend
2. **Validates** the image (checks format, size, etc.)
3. **Encodes** the image to base64
4. **Sends** the image to Claude Vision API with a diagnostic prompt
5. **Receives** structured analysis with:
   - **Diagnosis**: Classification (Normal, Abnormal_Heartbeat, Myocardial_Infarction, MI_history)
   - **Confidence**: Prediction confidence (0-100%)
   - **Clinical Findings**: Detailed medical observations
   - **Clinical Summary**: Doctor-friendly assessment

### Features
- ✅ No local model file needed (~100MB saved)
- ✅ Enterprise-grade AI analysis
- ✅ Real-time updates with latest Claude model
- ✅ Structured JSON responses
- ✅ Automatic fallback handling
- ✅ Detailed error logging

## API Endpoint Changes

### `/predict` Endpoint (Updated)

**Request:**
```bash
POST /predict
Content-Type: multipart/form-data

file: <ECG_IMAGE>
user_email: user@example.com (optional)
username: john_doe (optional)
```

**Response:**
```json
{
  "rhythm": "Normal",
  "confidence": "87.5%",
  "summary": "═════════════════════════════════════...",
  "heartRate": "72 BPM",
  "intervals": {
    "pr": "160ms",
    "qrs": "90ms",
    "qtc": "410ms"
  },
  "metricsConfidence": 0.85,
  "metricsMethod": "signal_processing",
  "clinicalAssessment": "...",
  "youtubeResources": [...],
  "saved": true
}
```

## Troubleshooting

### Issue: "Claude API not configured"
**Solution**: Make sure your `.env` file has the correct `CLAUDE_API_KEY` set

### Issue: "API key invalid"
**Solution**: 
- Verify your key at https://console.anthropic.com
- Make sure there are no extra spaces in the `.env` file
- Restart the backend server

### Issue: Slower responses than before
**Solution**: 
- Claude API requests take ~1-3 seconds (normal for cloud AI)
- Consider implementing caching for common images
- Check your internet connection

## API Pricing
- Claude API uses token-based pricing
- Typical ECG analysis: ~1-2K tokens (~$0.0001-0.0002 per analysis)
- Monitor usage at: https://console.anthropic.com/account/usage

## Optional Improvements

### Add Caching (to reduce API costs)
```python
from functools import lru_cache

@lru_cache(maxsize=100)
def predict_ecg_with_cache(image_hash):
    # Cache results by image hash
```

### Use Different Claude Models
```python
# In predict_ecg_with_claude function, change model:
model="claude-3-opus-20250219"  # Most powerful, slower
# or
model="claude-3-5-sonnet-20241022"  # Balanced (current)
# or
model="claude-3-haiku-20250307"  # Fastest, cheaper
```

## Support
- Claude API Docs: https://docs.anthropic.com
- API Status: https://status.anthropic.com
- Rate Limits: 100,000 tokens/minute (free tier)

---

**Note**: Remove `.env` from `.gitignore` violation by adding to `.gitignore`:
```
.env
.env.local
*.h5
__pycache__/
```
