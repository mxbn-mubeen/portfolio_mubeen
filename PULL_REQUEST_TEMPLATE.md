# Pull Request

## Title
Remove lovable-tagger and update social preview meta

## Description
This PR removes the lovable-tagger plugin from vite config, removes lovable-tagger from devDependencies, and adds Open Graph/Twitter meta tags and a social-share image placeholder. It stops Lovable markup from being injected and ensures social previews show the portfolio branding.

## Files changed:
- vite.config.ts (already committed)
- index.html (add OG/Twitter meta tags)
- package.json (remove lovable-tagger from devDependencies)