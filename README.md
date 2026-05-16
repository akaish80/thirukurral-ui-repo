# Thirukural UI Library

Reusable React + TypeScript component library for the Thirukural application, with Storybook, CI quality checks, and Vercel deployment workflows.

## What You Get

- Token-driven design system foundation
- Reusable components for Thirukural screens:
	- `Button`, `Card`
	- `PageHeader`, `Tabs`
	- `FeatureTile`, `StatTile`
	- `LoadingSpinner`
- Storybook for component documentation
- Vitest + Testing Library for unit tests
- GitHub Actions CI pipeline
- Vercel preview + production deployments
- AI agent playbooks for review and deployment

## Project Structure

- `src/components`: reusable UI components
- `src/tokens`: design token exports
- `src/styles`: global and token CSS variables
- `.storybook`: Storybook config
- `.github/workflows`: CI/CD automation
- `.github/agents`: AI agent prompt files

## Local Development

```bash
npm install
npm run dev
```

## Storybook

```bash
npm run storybook
```

## Build Library

```bash
npm run build
```

The production package is generated in `dist`:
- `dist/index.es.js`
- `dist/index.cjs.js`
- `dist/index.d.ts`
- `dist/style.css`

## Test

```bash
npm run test
```

## Lint

```bash
npm run lint
```

## GitHub Setup

1. Initialize git and push:

```bash
git init
git add .
git commit -m "chore: scaffold design system"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Add repository secrets for Vercel:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

3. Ensure your default branch is `main`.

## Use In Thirukural App

1. Configure GitHub Packages auth in the Thirukural app root `.npmrc`:

```ini
@akaish80:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Install the library in Thirukural app:

```bash
npm install @akaish80/Thirukural-ui
```

3. Use components in Thirukural app:

```tsx
import '@akaish80/Thirukural-ui/styles.css';
import { PageHeader, FeatureTile, Tabs, StatTile, LoadingSpinner } from '@akaish80/Thirukural-ui';
```

4. Keep React version in Thirukural app compatible with this library (`18.x` or `19.x`).

## Publish Package

- Publishing is automated by `.github/workflows/publish-package.yml`.
- Trigger by creating a GitHub release or running the workflow manually.
- Required permission: repository packages write access.

## AI Agents

- Code review agent: `.github/agents/code-review.agent.md`
- Deploy agent: `.github/agents/vercel-deploy.agent.md`
- Copilot repo instructions: `.github/copilot-instructions.md`

Use these files as prompts in Copilot Chat or any coding agent to standardize team workflows.

## Deploy Flow

- Pull requests to `main`: preview deployment
- Push to `main`: production deployment

This repository disables automatic Vercel Git deployments (`vercel.json`) so GitHub Actions controls releases.
