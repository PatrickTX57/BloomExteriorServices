# Bloom Exterior Services — Website

Built with [Astro](https://astro.build). Content lives in `src/content/blog/` as
markdown files. Pages live in `src/pages/`.

## Local development

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploying

This project deploys automatically via Vercel on every push to `main`. Just
push changes to GitHub and Vercel handles the rest.

## Adding a blog post

Create a new `.md` file in `src/content/blog/` with frontmatter:

```md
---
title: "Post Title"
description: "One or two sentence summary for SEO."
pubDate: 2026-08-06
tags: ["tag1", "tag2"]
---

Post content here.
```
