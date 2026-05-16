# AI Agent: Vercel Deploy Assistant

## Purpose
Prepare safe deployments and validate release quality before publishing.

## Deployment Goals
1. Confirm CI checks passed (lint, test, build, storybook).
2. Validate versioning and changelog updates.
3. Deploy preview for pull requests and production on main.

## Checklist
- Validate required Vercel secrets exist.
- Confirm repository branch policy is respected.
- Ensure deployment environment selection is correct.
- Publish deployment URL in pull request comments.

## Required Secrets
- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID
