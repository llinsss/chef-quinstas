# Chef Quinstas — Private Aviation Dining

A production-ready Next.js portfolio with a built-in Sanity content studio and Resend contact delivery. The site ships with complete sample content and an original hero image, so it looks finished before the CMS is connected.

## Local setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`
3. Run: `npm run dev`
4. Visit `http://localhost:3000`; content editing lives at `/admin`.

## Content studio

Create a project at Sanity.io, add `http://localhost:3000` and the production domain to its CORS origins (credentials enabled), then set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`. Restart the app and open `/admin`. Sanity handles authentication and roles; do not share write tokens with the browser.

Schemas include site settings, chef profile, services, testimonials, and portfolio media. Portfolio entries support images, video URLs, accessible alt text, category, homepage featuring, and numeric ordering. Editors can draft and preview before publishing.

The initial frontend content is in `src/lib/content.ts` as a resilient fallback. For a live CMS, query the equivalent Sanity document types using `next-sanity`; the schema is already structured for that migration.

## Contact email

Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Verify a sending domain with Resend and replace the temporary `inquiries@resend.dev` sender in `src/app/api/contact/route.ts`. Without a key, submissions safely run in demo mode and are logged server-side.

## Deployment

Import the repository into Vercel, add the environment variables, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the production URL. In Sanity, add that URL as a CORS origin. The image domains and metadata are already configured.

## Useful commands

- `npm run dev` — local development
- `npm run build` — production validation
- `npm start` — run the production build
- `npm run lint` — lint the codebase

## Before launch

Replace sample images and biography, verify the Resend sending domain, add the production Sanity CORS origin, review contact information, and run an accessibility/performance audit against the deployed URL.
