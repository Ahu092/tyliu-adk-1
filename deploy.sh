#!/bin/bash

# Stride Marketplace - Cloud Run Deployment Script
# This script automates the deployment process to GCP Cloud Run

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SERVICE_NAME="stride-marketplace"
REGION="${REGION:-us-central1}"
MEMORY="${MEMORY:-512Mi}"
CPU="${CPU:-1}"
MIN_INSTANCES="${MIN_INSTANCES:-0}"
MAX_INSTANCES="${MAX_INSTANCES:-10}"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Stride Marketplace - Cloud Run Deploy${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed${NC}"
    echo "Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Get current project
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)

if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}Error: No GCP project is set${NC}"
    echo "Run: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo -e "${YELLOW}Project:${NC} $PROJECT_ID"
echo -e "${YELLOW}Service:${NC} $SERVICE_NAME"
echo -e "${YELLOW}Region:${NC} $REGION"
echo ""

# Ask for confirmation
read -p "Deploy to Cloud Run? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled"
    exit 0
fi

echo ""
echo -e "${YELLOW}Step 1: Enabling required APIs...${NC}"
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
echo -e "${GREEN}✓ APIs enabled${NC}"
echo ""

echo -e "${YELLOW}Step 2: Building and deploying...${NC}"
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --memory $MEMORY \
  --cpu $CPU \
  --min-instances $MIN_INSTANCES \
  --max-instances $MAX_INSTANCES \
  --port 8080 \
  --quiet

echo ""
echo -e "${GREEN}✓ Deployment complete!${NC}"
echo ""

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)')

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Successful!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Service URL:${NC} $SERVICE_URL"
echo ""
echo -e "View logs: ${YELLOW}gcloud run services logs read $SERVICE_NAME --region $REGION${NC}"
echo -e "View console: ${YELLOW}https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME${NC}"
echo ""
