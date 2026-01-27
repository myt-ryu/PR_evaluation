
import pandas as pd
import os

file_path = '/Users/nw_myt/Desktop/Project/PR_evaluation/【広報_公開用】パブリシティスコア (2).xlsx'

if not os.path.exists(file_path):
    print(f"Error: File not found at {file_path}")
    exit(1)

try:
    # Read all sheets
    xls = pd.ExcelFile(file_path)
    print(f"Sheet names: {xls.sheet_names}")
    
    for sheet_name in xls.sheet_names:
        print(f"\n--- Sheet: {sheet_name} ---")
        df = pd.read_excel(xls, sheet_name=sheet_name, nrows=5)
        print("Columns:")
        print(df.columns.tolist())
        print("First 5 rows:")
        print(df.head())
        print("-" * 20)

except Exception as e:
    print(f"An error occurred: {e}")
