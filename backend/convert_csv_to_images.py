#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Convert ECG CSV files to image format for training binary classifier.
Creates waveform visualizations as PNG images from ECG CSV data.
"""

import os
import csv
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
from pathlib import Path

# Use non-interactive backend to prevent display issues
matplotlib.use('Agg')

# Configuration
ECG_CSV_PATH = "./datasets/ECG"
OUTPUT_PATH = "./datasets/ECG"
VALID_EXTENSIONS = ('.csv',)
IMAGE_SIZE = (240, 240)  # Match model input size

def load_ecg_data(csv_file):
    """
    Load ECG data from CSV file.
    Expected format: index, MLII, V5, symbol
    Returns: numpy array of ECG values
    """
    try:
        data = []
        with open(csv_file, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                try:
                    # Read MLII column (main ECG lead)
                    value = float(row['MLII'])
                    data.append(value)
                except (ValueError, KeyError):
                    continue
        
        if len(data) == 0:
            return None
        
        return np.array(data)
    except Exception as e:
        print(f"Error reading {csv_file}: {e}")
        return None

def create_ecg_waveform_image(ecg_data, output_path):
    """
    Create an ECG waveform image from ECG data.
    Saves as PNG file with ECG-like appearance.
    """
    try:
        # Create figure with ECG background
        fig, ax = plt.subplots(figsize=(8, 6), dpi=30)
        
        # Plot the waveform
        ax.plot(ecg_data, color='red', linewidth=2)
        
        # ECG-style formatting
        ax.set_facecolor('white')
        ax.grid(True, alpha=0.3, color='gray', linestyle='-', linewidth=0.5)
        ax.set_xlabel('Sample', fontsize=8)
        ax.set_ylabel('Amplitude (mV)', fontsize=8)
        ax.set_title('ECG Waveform', fontsize=10)
        
        # Remove axis labels for cleaner image
        ax.set_xticks([])
        ax.set_yticks([])
        
        # Tight layout
        plt.tight_layout(pad=0)
        
        # Save as PNG
        plt.savefig(output_path, format='png', dpi=30, bbox_inches='tight')
        plt.close(fig)
        
        return True
    except Exception as e:
        print(f"Error creating image for {output_path}: {e}")
        return False

def convert_all_ecg_files():
    """
    Convert all ECG CSV files to PNG images.
    """
    if not os.path.exists(ECG_CSV_PATH):
        print(f"ECG folder not found: {ECG_CSV_PATH}")
        return 0
    
    csv_files = [f for f in os.listdir(ECG_CSV_PATH) 
                 if f.endswith(VALID_EXTENSIONS) and f.endswith('_ekg.csv')]
    
    if not csv_files:
        print(f"No ECG CSV files found in {ECG_CSV_PATH}")
        return 0
    
    print(f"Found {len(csv_files)} ECG CSV files")
    print("Converting to images...")
    
    successful = 0
    failed = 0
    
    for i, csv_file in enumerate(csv_files, 1):
        csv_path = os.path.join(ECG_CSV_PATH, csv_file)
        
        # Create output filename
        base_name = csv_file.replace('_ekg.csv', '')
        output_filename = f"{base_name}.png"
        output_path = os.path.join(OUTPUT_PATH, output_filename)
        
        # Skip if already converted
        if os.path.exists(output_path):
            print(f"[{i}/{len(csv_files)}] ✓ Already exists: {output_filename}")
            successful += 1
            continue
        
        # Load ECG data
        ecg_data = load_ecg_data(csv_path)
        if ecg_data is None:
            print(f"[{i}/{len(csv_files)}] ✗ Failed to load: {csv_file}")
            failed += 1
            continue
        
        # Create and save image
        if create_ecg_waveform_image(ecg_data, output_path):
            print(f"[{i}/{len(csv_files)}] ✓ Created: {output_filename}")
            successful += 1
        else:
            print(f"[{i}/{len(csv_files)}] ✗ Failed to create image: {csv_file}")
            failed += 1
    
    print(f"\n{'='*60}")
    print(f"Conversion Complete!")
    print(f"  Successful: {successful}")
    print(f"  Failed: {failed}")
    print(f"  Total: {successful + failed}")
    print(f"{'='*60}")
    
    return successful

if __name__ == "__main__":
    print("ECG CSV to Image Converter")
    print("="*60)
    convert_all_ecg_files()
    print("\nNow you can train the binary classifier with:")
    print("  1. Set CLASSIFIER_MODE = 'binary' in model.py")
    print("  2. Run: python model.py")
