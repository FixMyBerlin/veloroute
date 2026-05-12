# About Veloroute

- [Website](https://veloroute.example.de)
- [CMS Keystatic at Netlify](https://cms-rsv-veloroute.netlify.app/keystatic)

# Project structure

## `/config`

Site specific data for styling and content (that is not managed by the CMS).

**Validation:** Those files are [validated using zod](shared/scripts/validateConfig.ts) to make sure all other RSV sites have the same config structure so the shared components can rely on them.

## `/shared`

See https://github.com/FixMyBerlin/rsv-shared

## `/src/content`

Content managed by Keystatic / the CMS. Different for each project of this kind.

## `/src/pages`

Astro Pages that take content from Keystatic and render it. Those pages should be the same for all sites of this kind.

# Notes

- RSS feeds are drafted but not implemented, yet. We should add them once we add a blog to the page.

# Bootstrap follow-ups

See [`shared/docs/NEW-PROJECT.md`](shared/docs/NEW-PROJECT.md) for the manual checklist (Keystatic GitHub App, Netlify, DNS, brand styles, favicons).
