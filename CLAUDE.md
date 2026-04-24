# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 2 documentation site for ZenWeb (模块化 Node.js TypeScript Web SAAS 框架). The site is deployed at https://zenweb.node.ltd and provides documentation in Chinese (zh-Hans).

ZenWeb is a modular web framework built on Koa, designed for large-scale SAAS projects. All documentation is authored in Markdown with MDX support.

## Commands

```bash
# Install dependencies
npm install

# Start local development server (hot reload)
npm start

# Build static site for production
npm run build

# Serve built site locally
npm run serve

# Clear cache and generated files
npm run clear

# Type checking
npm run typecheck

# Deploy to Vercel
npm run deploy
```

## Architecture

### Directory Structure

- `docs/` - Main documentation content organized by categories:
  - `docs/1.intro.md` - Framework introduction
  - `docs/2.getting-started/` - Environment setup, initialization, controllers, inputs, outputs, inject, logging, database, ORM, modules
  - `docs/3.modules/` - Individual module documentation (@zenweb/core, inject, controller, router, result, body, helper, mysql, tenant, template, form, grid, ratelimit, cache, msgpack, etc.)
  - `docs/4.guides/` - Debug usage, Git workflow, Docker deployment
- `blog/` - Release announcements and changelog posts
- `src/` - React components, CSS styles, and pages
- `static/` - Static assets (images)

### Configuration

- [docusaurus.config.js](docusaurus.config.js) - Main site configuration including:
  - Site metadata and i18n settings (zh-Hans locale)
  - Algolia search integration
  - Theme customization (dark mode default)
  - Navigation structure
- [sidebars.js](sidebars.js) - Auto-generated sidebar from docs folder structure
- [tsconfig.json](tsconfig.json) - TypeScript configuration

### Key Docusaurus Features Used

- `docusaurus-remark-plugin-tab-blocks` - Enables tabbed code blocks in documentation
- Classic preset with docs and blog plugins
- Custom CSS in [src/css/custom.css](src/css/custom.css)

## Content Conventions

- Documentation files use numbered prefixes for ordering (e.g., `1.intro.md`, `2.init.md`)
- Category metadata stored in `_category_.json` files within each subdirectory
- Code examples use tab blocks with `tab={"label":"..."}` for TypeScript/JavaScript variants
- Cross-references use relative paths like `../modules/core` or `getting-started/controller`

## Node.js Requirements

Node.js >= 16.14 required as specified in package.json engines.