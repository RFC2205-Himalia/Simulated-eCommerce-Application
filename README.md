# Front_End_Capstone
RFC2205 Front End Capstone Project team Himalia


## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Setup](#setup)
4. [Git Workflow](#workflow)

## Usage

> usage instructions

## Requirements

-some
-requirements

## Setup

From the root directory of Repo

```sh
npm install
npm run client-dev
```

## Git Workflow

1. Pull most recent version of master
```sh
git checkout master
git pull
```
2. Create Feature Branch (branchName = ticket# - featureDesc)
```sh
git checkout -b '0001-MyNewFeatureDesc'
```
3. Build out feature & commit changes
4. Push local branch to github
```sh
git push -u origin [0001-MyNewFeatureDesc]
```
5. Create pull request
  - On github.com
      - pull requests => new pull request  
      ```sh
      base repo: RFC2205-Himalia/Front_End_Capstone base: master <- head repo: RFC2205-Himalia/ compare: 0001-MyNewFeatureDesc
      ```
  - Send message in slack with link to PR request
6. Wait for merge approval from teammate
7. Merge branch into master
