#!/usr/bin/env python
try:
    import main
    print("✓ Main imported successfully!")
except Exception as e:
    import traceback
    print("✗ Import failed:")
    traceback.print_exc()
