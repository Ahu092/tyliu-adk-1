# Deploying Stride to GCP Cloud Run

This guide walks you through deploying the Stride horse leasing marketplace to Google Cloud Platform's Cloud Run service.

## Prerequisites

1. **Google Cloud Account**: You need a GCP account with billing enabled
2. **gcloud CLI**: Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
3. **Docker**: Install [Docker](https://docs.docker.com/get-docker/) for local testing (optional)

## Initial Setup

### 1. Install and Configure gcloud CLI

```bash
# Install gcloud CLI (if not already installed)
# Follow instructions at: https://cloud.google.com/sdk/docs/install

# Initialize gcloud
gcloud init

# Login to your Google account
gcloud auth login
```

### 2. Create or Select a GCP Project

```bash
# Create a new project
gcloud projects create stride-marketplace --name="Stride Marketplace"

# Set the project as default
gcloud config set project stride-marketplace

# Or use an existing project
gcloud config set project YOUR_PROJECT_ID
```

### 3. Enable Required APIs

```bash
# Enable Cloud Run API
gcloud services enable run.googleapis.com

# Enable Container Registry API
gcloud services enable containerregistry.googleapis.com

# Enable Cloud Build API (for automated deployments)
gcloud services enable cloudbuild.googleapis.com
```

### 4. Set Your Region

```bash
# Set default region (choose one close to your users)
gcloud config set run/region us-central1

# Available regions:
# us-central1, us-east1, us-west1, europe-west1, asia-east1, etc.
```

## Deployment Methods

### Method 1: Direct Deployment (Recommended for First Deploy)

This method builds and deploys in one command:

```bash
# Deploy directly from source
gcloud run deploy stride-marketplace \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --port 8080

# Follow the prompts and wait for deployment to complete
```

### Method 2: Build Docker Image Locally, Then Deploy

This method gives you more control:

```bash
# 1. Build the Docker image locally
docker build -t gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest .

# 2. Test locally (optional)
docker run -p 8080:8080 gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest

# 3. Configure Docker to push to GCR
gcloud auth configure-docker

# 4. Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest

# 5. Deploy to Cloud Run
gcloud run deploy stride-marketplace \
  --image gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --port 8080
```

### Method 3: Automated CI/CD with Cloud Build

Set up continuous deployment from your Git repository:

```bash
# 1. Connect your repository to Cloud Build
# Go to: https://console.cloud.google.com/cloud-build/triggers

# 2. Create a trigger that uses cloudbuild.yaml
gcloud builds submit --config cloudbuild.yaml

# 3. For automatic deployments on push, set up a trigger in the console
# that runs cloudbuild.yaml on every commit to your main branch
```

## Configuration Options

### Environment Variables

If you need to add environment variables:

```bash
gcloud run deploy stride-marketplace \
  --image gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest \
  --set-env-vars "NODE_ENV=production,API_KEY=your-key" \
  --platform managed \
  --region us-central1
```

Or use a `.env.yaml` file:

```yaml
# .env.yaml
NODE_ENV: production
API_KEY: your-api-key
```

```bash
gcloud run deploy stride-marketplace \
  --image gcr.io/YOUR_PROJECT_ID/stride-marketplace:latest \
  --env-vars-file .env.yaml
```

### Custom Domain

To use a custom domain (e.g., stride.example.com):

```bash
# 1. Deploy your service first

# 2. Add domain mapping
gcloud run domain-mappings create \
  --service stride-marketplace \
  --domain stride.example.com \
  --region us-central1

# 3. Follow the DNS configuration instructions provided
```

### Memory and CPU Settings

Adjust based on your needs:

```bash
# Minimum configuration (development)
--memory 512Mi --cpu 1

# Recommended for production
--memory 1Gi --cpu 2

# High traffic configuration
--memory 2Gi --cpu 4
```

### Scaling Configuration

```bash
# Auto-scale between 0 and 10 instances
--min-instances 0 --max-instances 10

# Always keep 1 instance warm (reduces cold starts)
--min-instances 1 --max-instances 10

# Handle high traffic
--min-instances 2 --max-instances 100
```

## Monitoring and Logs

### View Logs

```bash
# View recent logs
gcloud run services logs read stride-marketplace --region us-central1

# Stream logs in real-time
gcloud run services logs tail stride-marketplace --region us-central1

# Or use the Cloud Console
# https://console.cloud.google.com/run
```

### Monitor Performance

Visit the Cloud Run console to see:
- Request count and latency
- Memory and CPU usage
- Error rates
- Instance count

URL: `https://console.cloud.google.com/run/detail/us-central1/stride-marketplace/metrics`

## Updating Your Deployment

### Update from Source

```bash
# Make your code changes, then:
gcloud run deploy stride-marketplace --source .
```

### Update from New Docker Image

```bash
# Build and push new image
docker build -t gcr.io/YOUR_PROJECT_ID/stride-marketplace:v2 .
docker push gcr.io/YOUR_PROJECT_ID/stride-marketplace:v2

# Deploy new version
gcloud run deploy stride-marketplace \
  --image gcr.io/YOUR_PROJECT_ID/stride-marketplace:v2
```

### Rollback to Previous Version

```bash
# List revisions
gcloud run revisions list --service stride-marketplace

# Rollback to a specific revision
gcloud run services update-traffic stride-marketplace \
  --to-revisions REVISION_NAME=100
```

## Cost Optimization

Cloud Run pricing is based on:
- Request count
- CPU and memory usage
- Network egress

### Tips to Reduce Costs:

1. **Use minimum resources needed**:
   ```bash
   --memory 512Mi --cpu 1
   ```

2. **Set appropriate max instances**:
   ```bash
   --max-instances 10  # Prevent runaway costs
   ```

3. **Use min-instances 0 for dev/staging**:
   ```bash
   --min-instances 0  # Scale to zero when idle
   ```

4. **Monitor usage**:
   ```bash
   # Check your billing
   gcloud beta billing accounts list
   ```

## Troubleshooting

### Build Fails

```bash
# Check build logs
gcloud builds log [BUILD_ID]

# Common issues:
# - Missing dependencies: Check package.json
# - Memory issues: Use larger machine type in cloudbuild.yaml
```

### Deployment Fails

```bash
# Check service logs
gcloud run services logs read stride-marketplace --limit 100

# Common issues:
# - Port mismatch: Ensure app listens on $PORT (8080)
# - Permission issues: Check IAM roles
```

### Application Errors

```bash
# View recent errors
gcloud run services logs read stride-marketplace --limit 50

# Check service status
gcloud run services describe stride-marketplace
```

## Security Best Practices

1. **Use Cloud IAM for authentication**:
   ```bash
   # Remove --allow-unauthenticated for internal services
   gcloud run services update stride-marketplace --no-allow-unauthenticated
   ```

2. **Use Secret Manager for sensitive data**:
   ```bash
   # Create a secret
   echo -n "your-api-key" | gcloud secrets create api-key --data-file=-

   # Mount in Cloud Run
   gcloud run deploy stride-marketplace \
     --set-secrets "API_KEY=api-key:latest"
   ```

3. **Enable Cloud Armor** for DDoS protection

4. **Set up Cloud Logging** for audit trails

## Next Steps

After deployment:

1. Test your deployment at the provided URL
2. Set up a custom domain
3. Configure SSL certificates (automatic with Cloud Run)
4. Set up monitoring and alerting
5. Configure backup and disaster recovery
6. Set up staging and production environments

## Support

- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud Run Pricing](https://cloud.google.com/run/pricing)
- [GCP Support](https://cloud.google.com/support)

## Estimated Costs

For a low-traffic prototype:
- **Requests**: First 2 million requests/month are free
- **CPU**: $0.00002400 per vCPU-second
- **Memory**: $0.00000250 per GiB-second
- **Estimated monthly cost**: $5-20 for moderate traffic

For production:
- Scale up resources as needed
- Use committed use discounts for predictable workloads
- Monitor and optimize based on usage patterns
