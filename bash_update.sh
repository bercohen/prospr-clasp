#!/bin/bash

# Make the script executable
chmod +x "$0"

# Full path to the CLASP folder
clasp_folder="$(cd "$(dirname "$0")" && pwd)"

# List of script IDs
script_ids=("1D8vvsZHGrf9qxjA5bKYuLc-FPx7U6X3uUu5G3OE9RVVTvRZdQTi93VXr" "1nwc70EcfcCJa71xF-I_KgQqXSDB3gYGb2tQtjwPiJU4e2HzndV4naYbG")

# Set the path to the service account key file
service_account_key_path="/Users/bercohen/Downloads/prospr-testing-368b09987084.json"

# Set CLASP_CREDENTIALS variable
export CLASP_CREDENTIALS=$service_account_key_path

# Library version (default to "1" if not provided)
library_version=${1:-1}

# Update each project
for script_id in "${script_ids[@]}"; do
  # Create a temporary directory
  temp_dir=$(mktemp -d)

  # Clone the project with the existing configuration into the temporary directory
  clasp clone "$script_id" --rootDir "$temp_dir"

  # Copy the master appsscript.json to the temporary directory
  cp "$clasp_folder/appsscript.json" "$temp_dir/"

  # Navigate to the temporary directory
  cd "$temp_dir" || exit 1

  # Pull the latest code without creating a new configuration
  clasp pull

  # Run the Node.js script to update appsscript.json with the provided library version
  node "$clasp_folder/update_appsscript.js" "$temp_dir" "$library_version"

  # Push the changes
  clasp push -f

  # Clean up the temporary directory
  cd "$clasp_folder" || exit 1
  rm -r "$temp_dir"
done
