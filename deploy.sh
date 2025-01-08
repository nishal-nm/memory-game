#!/bin/bash

# Build the project
npm run build

cd build

# Initialize Git repository
git init

# Add files to staging
git add .

# Prompt for a custom commit message
read -p "Enter your commit message: " commit_message

# If no commit message is entered, use a default message
if [[ -z "$commit_message" ]]
then
  commit_message="Update deployment"
fi

# Commit changes with the provided message
git commit -m "$commit_message"

# Set branch to gh-pages
git branch -M gh-pages

# Prompt for the repository name
read -p "Enter the repository name: " repo_name

# Add remote repository
if [ -n "$repo_name" ]; then
  git remote add origin https://github.com/nishal-nm/$repo_name.git
  echo "Remote repository added: https://github.com/nishal-nm/$repo_name.git"
else
  echo "No remote repository added. Please check your inputs."
fi

# Push to GitHub
git push -u origin gh-pages --force

# Move back to the original directory
cd ..

echo "Deployment script completed."
