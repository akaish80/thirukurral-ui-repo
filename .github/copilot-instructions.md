# Copilot Instructions for This Repository

Use this repository as a design system first, app second.

## Constraints
- Keep components reusable and composable.
- Favor tokenized styles over hardcoded values.
- Every new component should include:
  - A TypeScript interface
  - Storybook stories
  - At least one unit test

## Agent Routing
- For pull request checks and quality gates, follow .github/agents/code-review.agent.md.
- For release and hosting changes, follow .github/agents/vercel-deploy.agent.md.
