import os
import sys
import logging
import numpy as np
import cv2
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from keras.utils import to_categorical

# --------------------------------------------------------------------------
# Configuration
# --------------------------------------------------------------------------

# Setup detailed logging to see what's happening
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - [%(levelname)s] - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger(__name__)

# Constants
IMG_WIDTH, IMG_HEIGHT = 240, 240
BATCH_SIZE = 32
EPOCHS = 25
DATA_PATH = "./datasets"
MODEL_SAVE_NAME = 'model.h5'
CLASSIFIER_MODE = "binary"  # Set to "binary" for ECG vs Non-ECG, "detailed" for multi-class ECG types
# For binary mode: use ECG/ and Non_ECG/ folders
# For detailed mode: use Normal/, Abnormal_Heartbeat/, Myocardial_Infarction/, MI_history/ folders

# --------------------------------------------------------------------------
# Helper Functions
# --------------------------------------------------------------------------

def load_image(path):
    """
    Loads and preprocesses a single image.
    Returns the processed image or None if loading fails.
    """
    try:
        # Read image using OpenCV
        img = cv2.imread(path)
        if img is None:
            # This happens if the file is corrupt or not an image
            logger.warning(f"Could not read image file: {path}")
            return None
            
        # Resize to target dimensions
        img = cv2.resize(img, (IMG_WIDTH, IMG_HEIGHT))
        
        # Convert BGR (OpenCV default) to RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        
        # Normalize pixel values to [0, 1]
        img = img / 255.0
        return img
    except Exception as e:
        logger.error(f"Error processing image {path}: {e}")
        return None

def main():
    logger.info("Starting ECG Analyzer Model Training Script...")
    logger.info(f"Mode: {CLASSIFIER_MODE.upper()}")
    
    # ----------------------------------------------------------------------
    # 1. Dataset Validation
    # ----------------------------------------------------------------------
    absolute_data_path = os.path.abspath(DATA_PATH)
    if not os.path.exists(absolute_data_path):
        logger.error(f"Dataset directory not found at: {absolute_data_path}")
        logger.error("Please ensure the 'datasets' folder exists and contains class subfolders.")
        return

    # Discover classes (subdirectories)
    try:
        # Filter for directories only, ignoring hidden files like .DS_Store
        classes = sorted([d for d in os.listdir(absolute_data_path) 
                         if os.path.isdir(os.path.join(absolute_data_path, d))])
    except Exception as e:
        logger.error(f"Failed to list datasets directory: {e}")
        return

    if not classes:
        logger.error("No class subdirectories found in datasets folder.")
        return

    logger.info(f"Found {len(classes)} classes: {classes}")
    
    # Validate folder structure for binary mode
    if CLASSIFIER_MODE == "binary":
        expected_classes = {"ECG", "Non_ECG"}
        actual_classes = set(classes)
        # Filter to only binary classes, ignore others
        binary_classes = [c for c in classes if c in expected_classes]
        if len(binary_classes) != 2:
            logger.error(f"Binary mode requires both 'ECG' and 'Non_ECG' folders")
            logger.error(f"Found: {actual_classes}")
            return
        classes = sorted(binary_classes)
        logger.info(f"Binary mode: Using only {classes}")
    
    # Create a map from class name to integer index
    label_map = {class_name: idx for idx, class_name in enumerate(classes)}
    logger.info(f"Label Mapping: {label_map}")
    
    images = []
    labels = []

    # ----------------------------------------------------------------------
    # 2. Data Loading
    # ----------------------------------------------------------------------
    logger.info("Beginning image loading process...")
    
    for folder in classes:
        folder_path = os.path.join(absolute_data_path, folder)
        file_list = os.listdir(folder_path)
        
        # Filter for common image extensions
        valid_extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff')
        image_files = [f for f in file_list if f.lower().endswith(valid_extensions)]
        
        logger.info(f"Processing class '{folder}' ({len(image_files)} images found)...")
        
        class_count = 0
        for i, file_name in enumerate(image_files):
            file_path = os.path.join(folder_path, file_name)
            img = load_image(file_path)
            
            if img is not None:
                images.append(img)
                labels.append(label_map[folder])
                class_count += 1
            
            # Print simple progress every 50 images to keep terminal alive
            if (i + 1) % 50 == 0:
                print(f"  Loaded {i + 1}/{len(image_files)}...", end='\r', flush=True)
        
        print("") # Clear the progress line
        logger.info(f"Successfully loaded {class_count} images for class '{folder}'")

    if not images:
        logger.error("No images were loaded successfully. Aborting training.")
        return

    # ----------------------------------------------------------------------
    # 3. Data Preparation
    # ----------------------------------------------------------------------
    logger.info("Converting lists to NumPy arrays...")
    X = np.array(images)
    y = np.array(labels)
    
    logger.info(f"Dataset Shape: Images {X.shape}, Labels {y.shape}")
    
    # One-hot encode the labels
    y = to_categorical(y, num_classes=len(classes))
    
    # Split into training and testing sets
    logger.info("Splitting data into Training (80%) and Test (20%) sets...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=19)
    logger.info(f"Training samples: {len(X_train)}, Test samples: {len(X_test)}")

    # ----------------------------------------------------------------------
    # 4. Model Building
    # ----------------------------------------------------------------------
    logger.info("Constructing CNN Model...")
    model = keras.Sequential([
        keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_WIDTH, IMG_HEIGHT, 3)),
        keras.layers.MaxPooling2D((2, 2)),
        keras.layers.Conv2D(64, (3, 3), activation='relu'),
        keras.layers.MaxPooling2D((2, 2)),
        keras.layers.Flatten(),
        keras.layers.Dense(128, activation='relu'),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(len(classes), activation='softmax')
    ])

    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])

    # Print model summary to logs
    model.summary(print_fn=logger.info)

    # ----------------------------------------------------------------------
    # 5. Training
    # ----------------------------------------------------------------------
    logger.info(f"Starting training for {EPOCHS} epochs with batch size {BATCH_SIZE}...")
    try:
        history = model.fit(
            X_train, y_train,
            validation_data=(X_test, y_test),
            epochs=EPOCHS,
            batch_size=BATCH_SIZE,
            verbose=1  # Shows progress bar in terminal
        )
    except KeyboardInterrupt:
        logger.warning("\nTraining interrupted by user!")
        return
    except Exception as e:
        logger.error(f"Error during training: {e}")
        return

    # ----------------------------------------------------------------------
    # 6. Evaluation & Saving
    # ----------------------------------------------------------------------
    logger.info("Evaluating model on test set...")
    test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
    logger.info(f"Final Test Accuracy: {test_acc:.2%}")

    # Determine which model name to use based on mode
    if CLASSIFIER_MODE == "binary":
        model_name = 'ecg_classifier.h5'
    else:
        model_name = MODEL_SAVE_NAME
    
    logger.info(f"Saving trained model to '{model_name}'...")
    model.save(model_name)
    logger.info("Execution finished successfully.")

if __name__ == "__main__":
    main()