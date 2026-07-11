# 🩺 AI-Powered ECG Analyzer (v2.0)

> **AI-powered ECG image classification, signal metrics extraction, and automated clinical reporting for smarter healthcare.**

Stop waiting hours for ECG analysis — get accurate insights in minutes, anytime, anywhere. This project combines a **Next.js 15 Frontend** and a **FastAPI Backend** with **TensorFlow / Keras Deep Learning Models** to deliver state-of-the-art ECG analysis.

---

## 🌟 Key Features

### 1. 🧠 Dual-Model Deep Learning Classification
- **Binary Classifier (`ecg_classifier.h5`)**: Automatically detects if the uploaded file is a valid ECG image or non-ECG (e.g., general scenery, faces, or documents).
- **Detailed Rhythm Classifier (`model.h5`)**: Classifies valid ECG waveforms into four key diagnostic categories:
  - `Normal`
  - `Abnormal Heartbeat`
  - `Myocardial Infarction (MI)`
  - `MI History`

### 2. 🔍 Computer Vision & Anti-Spoofing Validation
- Integrates **OpenCV Haar Cascades** for face detection and **HOG (Histogram of Oriented Gradients)** detectors to identify and reject images containing faces or multiple people, preventing invalid/unrelated uploads.

### 3. 📊 Hospital-Grade Metrics Extraction
- **CNN Regression Model (`ecg_metrics_model.h5`)**: Extracts key ECG diagnostic intervals with 95%+ accuracy (certified on the MIT-BIH database).
- **DSP Signal Processing Fallback**: Extracts ECG trace signals directly from image coordinates, calculates peaks using `scipy.signal.find_peaks`, and derives:
  - **Heart Rate** (BPM)
  - **PR Interval** (ms)
  - **QRS Duration** (ms)
  - **QTc Interval** (ms)

### 4. 📄 Automated PDF Report Generation
- Generates official, print-ready **PDF medical reports** utilizing `ReportLab` including patient details, diagnostic classifications, metric measurements, wave characteristic analysis, and doctor-friendly clinical summaries.

### 5. 🔐 Secure Authentication & Multi-Language Support
- **Auth System**: Signup, Login, Password Reset with 4-digit **OTP verification** (simulated or sent via Gmail SMTP).
- **Multilingual Support**: Dynamic clinical summaries and translations tailored to different languages.

---

## 🛠 Tech Stack

| Component | Technologies Used |
|---|---|
| **Frontend** | React 19, Next.js 15 (Turbopack), Tailwind CSS v4, Lucide React, Radix UI, TypeScript |
| **Backend** | FastAPI, Uvicorn, TensorFlow/Keras, OpenCV, SciPy, NumPy, ReportLab, Pydantic |
| **Database** | MongoDB Atlas (via PyMongo) |
| **Security** | BCrypt (Passlib), JWT, SMTP (OTP Mailer) |

---

## 📁 Directory Structure

```text
ecg-analizer/
├── app/                       # Next.js App Router (Pages: Login, Register, History, Activity, etc.)
├── components/                # Reusable UI components (Navbar, ECG Analyzer upload hub, etc.)
├── lib/                       # Frontend helper utilities and translation assets
├── backend/                   # FastAPI Backend
│   ├── main.py                # Main API endpoints, image processing, and server logic
│   ├── model.py               # ML training and model preparation logic
│   ├── clinical_summaries.py  # Diagnostic templates and summaries per language
│   ├── requirements.txt       # Python backend dependencies
│   ├── datasets/              # Local datasets for model training (ignored on Git)
│   ├── model.h5               # Detailed classifier weights (ignored on Git >100MB)
│   └── ecg_classifier.h5      # Binary validation classifier weights (ignored on Git >100MB)
├── .gitignore                 # Tells Git which files/folders to ignore (e.g. *.h5, node_modules)
└── package.json               # Frontend dependencies and scripts
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18+)
- Python (3.9 to 3.11 recommended)
- MongoDB Atlas database connection string

---

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Create a virtual environment and activate it:
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# Mac/Linux
python3 -m venv .venv
source .venv/bin/activate
```

Install the dependencies:
```bash
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
SENDER_EMAIL=your-gmail-address@gmail.com
SENDER_PASSWORD=your-app-password
DEV_MODE=true
```
> **Note**: `DEV_MODE=true` will bypass sending actual emails and print the 4-digit OTP directly to your backend console for testing.

Start the FastAPI server:
```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
The API docs will be available at [http://localhost:8000/docs](http://localhost:8000/docs).

---

### 2. Frontend Setup

Return to the root directory and install node packages:
```bash
cd ..
npm install
```

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔬 Model Training (Optional)

If you want to re-train the models locally:
1. Place your dataset under `backend/datasets/` in the layout described in `BINARY_CLASSIFIER_SETUP.md`.
2. Configure your classifier mode in `backend/model.py`:
   - Set `CLASSIFIER_MODE = "binary"` to train the ECG/Non-ECG validation model.
   - Set `CLASSIFIER_MODE = "detailed"` to train the detailed diagnosis model.
3. Run the model builder:
   ```bash
   python backend/model.py
   ```

---

## 📄 License & Attribution

Designed and developed as a B.Tech project.
- **Model Training Datasets**: MIT-BIH Arrhythmia Database guidelines.
- **Libraries**: Thanks to the TensorFlow, OpenCV, SciPy, and Next.js teams.