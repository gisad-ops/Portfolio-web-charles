# Charles Aivan Dasig — Portfolio Website

A responsive, bento-style developer portfolio using the existing visual direction: glassmorphism cards, warm orange accents, subtle motion, and persistent light/dark mode.

## Included sections

- Home / hero introduction with project and contact calls to action
- About and education
- Skills grouped into frontend, backend/database, and tools
- Project gallery with category filters and transparent project statuses
- Services for business websites, landing pages, small-business system planning, and website fixes
- Contact form with basic client/server validation
- Social links page (replace generic platform links with your actual profile URLs)
- Printable resume page with a Print / Save as PDF action
- Responsive layout, metadata, and accessible filter/status controls

## Tech stack

- Frontend: HTML, CSS, vanilla JavaScript
- Icons: Tabler Icons CDN
- Optional contact endpoint: Node.js + Express
- No database is required for the static portfolio.

## Run the static website

From the project root:

```bash
python -m http.server 8000 --directory frontend/public
```

Open `http://localhost:8000`.

## Run the Express server

Install dependencies once with `npm install`, then run `npm start`. Open `http://localhost:5000`.

The contact endpoint currently validates and logs messages to the server terminal. It does **not** send email or store messages in a database yet. Configure a real email provider or storage solution before using the contact form as a production inbox. If hosting the static frontend separately, configure the API base URL in `frontend/src/contact.js` to point to the deployed backend.

## Before publishing

1. Replace `YOUR_EMAIL_HERE` in the contact/social links with an email address you want to publish.
2. Replace generic GitHub, LinkedIn, and X links with your real profile URLs or remove accounts you do not use.
3. Review education dates and all resume details for accuracy.
4. Add real project screenshots, public demo URLs, and repository links only when available.
5. Confirm project statuses and service offerings reflect what you can currently deliver.
6. Test the website on desktop and mobile.
7. If the API is deployed publicly, add rate limiting, spam protection, and a configured notification/storage provider.

## Design

The existing bento layout, glassmorphism, orange accent color, typography, and dark/light theme are intentionally preserved. New pages reuse the current CSS variables and component styling.

## Certifications page

The dedicated page is at `frontend/public/pages/certificates.html` and uses `frontend/styles/Certificates.css`. The page intentionally does not show sample credentials, so it will not imply that certificates have been earned. When ready, add cards for your real certificates with the exact title, issuer, date, and a link to the certificate file or official verification page. Store public certificate files in a dedicated folder under `frontend/public/assets/certificates/` and link to them using a path relative to `pages/certificates.html` (for example, `../assets/certificates/your-certificate.pdf`). Check the document for private information before publishing it.
