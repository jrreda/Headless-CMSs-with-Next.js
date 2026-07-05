# Headless CMS with Next.js & Contentful

A marketing site built with the **Stellar** template, powered by [Next.js 16](https://nextjs.org) and [Contentful](https://www.contentful.com) as a headless CMS. Static template sections coexist with CMS-driven content for hero, navigation, client logos, and customer stories.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Contentful** — content delivery via the Content Delivery API
- **@contentful/rich-text-react-renderer** — Rich Text rendering
- **Contentlayer / MDX** — local changelog entries under `content/update/`

## Features

- Marketing homepage with hero, features, testimonials, pricing, and CTAs
- About, pricing, integrations, customers, and changelog pages
- Auth pages (sign in, sign up, reset password)
- **Contentful-powered sections:**
  - **Hero** — badge, title, subtitle, and CTA buttons
  - **Header navigation** — dynamic nav links from a `navigation` entry
  - **Clients marquee** — logos from Contentful assets tagged `clients`
  - **Customer posts** — dynamic routes at `/customers/[slug]` with Rich Text body and customer sidebar
- **Static generation** — customer post pages use `generateStaticParams()` to pre-render at build time
- **Draft preview** — `/api/draft?secret=…` enables Next.js draft mode for preview workflows

## Getting started

### Prerequisites

- Node.js 20+
- A Contentful space with the content types listed below

### Environment variables

Create a `.env` file in the project root:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
```

| Variable | Description |
|----------|-------------|
| `CONTENTFUL_SPACE_ID` | Contentful space ID |
| `CONTENTFUL_ACCESS_TOKEN` | Content Delivery API access token |
| `CONTENTFUL_PREVIEW_ACCESS_TOKEN` | Preview API token (for draft content) |
| `CONTENTFUL_PREVIEW_SECRET` | Secret used to enable draft mode via `/api/draft` |

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

Ensure Contentful environment variables are available at build time so static customer pages can be pre-rendered.

## Contentful content model

| Content type | Used for |
|--------------|----------|
| `hero` | Homepage hero section (badge, title, subtitle, callToActions) |
| `ctaButtons` | Linked CTA button pairs (button1/2 text + URL) |
| `navigation` | Header nav (`name: "Header"`, `links` → `button` entries) |
| `button` | Nav link label + URL |
| `customerPost` | Customer story pages (`title`, `slug`, `body`, `customer`) |
| `customer` | Customer name + logo asset |

### Assets

- Tag client logos with **`clients`** in Contentful to include them in the homepage marquee.
- Customer logos are linked via the `customer` content type on each `customerPost`.

## Project structure

```
app/
  (auth)/          # Sign in, sign up, reset password
  (default)/       # Main marketing pages
    customers/
      [slug]/      # Dynamic customer post pages (Contentful)
  api/
    draft/         # Draft mode preview endpoint
components/
  hero.tsx         # Contentful hero
  clients.tsx      # Contentful client logos marquee
  rich-text.tsx    # Contentful Rich Text renderer
  ui/
    header.tsx     # Contentful navigation
content/update/    # Local MDX changelog entries
lib/
  contentful.ts    # Contentful client
public/images/     # Static template assets
```

## Preview mode

To enable draft preview locally or from Contentful:

```
GET /api/draft?secret=<CONTENTFUL_PREVIEW_SECRET>
```

This enables Next.js draft mode and redirects to the homepage. Extend the redirect or wire the preview API token in `lib/contentful.ts` when you need to preview unpublished entries.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (pre-renders customer post slugs) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host. Add all Contentful environment variables in your deployment settings before building.

Remote images from Contentful are allowed via `images.ctfassets.net` in `next.config.ts`.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentful JavaScript SDK](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/)
- [Contentful Rich Text](https://www.contentful.com/developers/docs/concepts/rich-text/)
