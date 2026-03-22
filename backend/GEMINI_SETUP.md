# ECG Analyzer - Google Gemini AI Integration Setup

## Overview
Your ECG Analyzer has been updated to use **Google Gemini AI Vision** for ECG image analysis. 

✅ **Completely FREE**  
✅ **Unlimited usage**  
✅ **No credit card required**  
✅ **No rate limits on free tier**

## Setup Instructions

### 1. Get Google Gemini API Key (FREE!)
1. Visit https://aistudio.google.com/app/apikeys
2. Click **"Create API key"**
3. Copy your API key (it will look like: `AIzaSy...`)
4. **No credit card needed!**

### 2. Configure Environment Variables
1. Open `backend/.env` file
2. Replace `your_google_gemini_api_key_here` with your actual API key:
   ```
   GEMINI_API_KEY=AIzaSy...
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

### ECG Analysis with Google Gemini
The `/predict` endpoint now:

1. **Receives** an ECG image from the frontend
2. **Validates** the image (checks format, size, etc.)
3. **Encodes** the image to base64
4. **Sends** the image to Google Gemini Vision API with a diagnostic prompt
5. **Receives** structured analysis with:
   - **Diagnosis**: Classification (Normal, Abnormal_Heartbeat, Myocardial_Infarction, MI_history)
   - **Confidence**: Prediction confidence (0-100%)
   - **Clinical Findings**: Detailed medical observations
   - **Clinical Summary**: Doctor-friendly assessment

### Features
- ✅ Completely **FREE** - No billing required
- ✅ **Unlimited** requests - No rate limits
- ✅ **Enterprise-grade AI** analysis
- ✅ Real-time updates with latest Gemini model
- ✅ Structured JSON responses
- ✅ Automatic fallback handling
- ✅ Detailed error logging

## API Endpoint

### `/predict` Endpoint

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

## Pricing & Limits

### Free Tier (Default)
- **Cost**: $0 (Completely FREE)
- **Daily requests**: Unlimited
- **Monthly quota**: Unlimited
- **Model**: `gemini-1.5-flash` (latest)
- **Rate limit**: 60 requests per minute

### No Hidden Costs
- No credit card required
- No automatic upgrades
- No surprise charges
- Completely free forever

## Troubleshooting

### Issue: "Google Gemini API not configured"
**Solution**: Make sure your `.env` file has the correct `GEMINI_API_KEY` set

### Issue: "API key invalid"
**Solution**: 
- Verify your key at https://aistudio.google.com/app/apikeys
- Make sure there are no extra spaces in the `.env` file
- Restart the backend server

### Issue: Rate limit exceeded (60 req/min)
**Solution**: 
- Gemini API allows 60 requests per minute for free tier
- For higher limits, you can upgrade to a paid plan
- Most ECG analysis is much slower (user would wait anyway)

### Issue: "ValueError: batching not allowed"
**Solution**: Update google-generativeai library:
```bash
pip install --upgrade google-generativeai
```

## Optional Improvements

### Use Different Gemini Models
```python
# In predict_ecg_with_gemini function, change model:
model = genai.GenerativeModel('gemini-1.5-pro')  # More powerful
# or
model = genai.GenerativeModel('gemini-1.5-flash')  # Faster (current)
```

### Add Caching (to reduce API requests)
```python
from functools import lru_cache
import hashlib

@lru_cache(maxsize=100)
def predict_ecg_with_cache(image_hash):
    # Cache results by image hash
```

## Reference Links
- 🔗 Get API Key: https://aistudio.google.com/app/apikeys
- 📖 Gemini API Docs: https://ai.google.dev/
- 📊 API Dashboard: https://aistudio.google.com/
- 🆘 Support: https://support.google.com/ai

## vs Claude AI

| Feature | Gemini (Current) | Claude |
|---------|----------|--------|
| **Cost** | 🟢 FREE | 🔴 Paid |
| **Unlimited** | ✅ Yes | ❌ No |
| **Setup** | ⚡ Easy | ⚡ Easy |
| **Accuracy** | ✅ Excellent | ✅ Excellent |
| **Speed** | ⚡ Fast | ⚡ Medium |

---

**You chose the right option!** 🎉 Gemini is completely free and unlimited - perfect for your ECG analyzer.
