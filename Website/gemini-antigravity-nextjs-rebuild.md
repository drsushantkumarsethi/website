# Rebuild Dr. Sushant Sethi’s Website in Next.js

## Goal

Recreate the website at <https://dr-sushant-sethi.kv-gudu.chatgpt.site/> as a polished, responsive website using **Next.js and React**. Treat the referenced website as the source of truth for its visual design, page structure, wording, images, and interactions. The finished result should feel like a faithful rebuild, not a generic doctor template.

## Important access note

The reference currently shows a ChatGPT sign-in page (“Log in to access”) to visitors who are not signed in. Open it in a browser session that is authorized to view the original site before implementation. If it remains inaccessible, stop and request screenshots or exported page content. Do not reproduce the sign-in interstitial as the actual website, and do not invent professional credentials, medical specialties, services, testimonials, contact details, or other facts.

## First: inspect and document the reference

Before coding:

1. Review every page and section available from the reference, including its footer and any menus, buttons, forms, galleries, or other interactions.
2. Capture desktop and mobile layouts. Record colors, typography, spacing, image crops, borders, shadows, and responsive behavior.
3. Inventory the supplied assets and identify which image belongs in each part of the page. Preserve the original assets when available.
4. Transcribe visible content accurately. Keep spelling, punctuation, labels, and contact details faithful to the source.
5. Create a concise implementation checklist from those observations. Do not guess at content that cannot be verified.

## Implementation requirements

- Use the current stable Next.js App Router and React, with JavaScript (JSX), unless the project already has a TypeScript convention.
- Make the site responsive and accessible: semantic landmarks, a logical heading hierarchy, keyboard-operable navigation, visible focus states, useful image alt text, and labeled form controls.
- Reproduce all observed interactions and working navigation. Do not create dead buttons or placeholder links.
- Use `next/image` for local image assets where appropriate, and set page metadata and a favicon based on verified source material.
- Keep medical and professional claims exactly within what the reference establishes. Do not add medical advice or fabricated endorsements.
- Do not expose secrets, credentials, or private configuration in source code.

## Suggested project organization

Adapt this to the repository’s existing conventions, keeping page content, shared UI, and assets easy to find:

```text
app/
  layout.js
  page.js
  globals.css
components/
  SiteHeader.jsx
  SiteFooter.jsx
  ...components observed in the reference...
public/
  images/
  icons/
```

If the observed site has multiple routes, create matching route folders under `app/` and factor repeated elements into `components/`. Keep the main page composition readable; avoid placing the entire site in one oversized component.

## Visual fidelity

- Match the reference’s actual colors, typography, layout widths, spacing, image treatment, and section order.
- At desktop and mobile sizes, preserve the same hierarchy and content while adapting layout naturally to the viewport.
- Avoid adding sections, animations, stock imagery, decorative effects, or marketing copy that are not present in the reference.
- Use local assets from the supplied site/project whenever possible. If an asset is missing, ask for it or use a clearly identified neutral placeholder during development; do not silently substitute a different person or clinic image.

## Completion checklist

- [ ] All reference pages and sections are represented.
- [ ] Text, imagery, contact information, and links match the verified source.
- [ ] Navigation, buttons, and forms behave as observed.
- [ ] Desktop and narrow mobile layouts are checked.
- [ ] Components and files are organized for future edits.
- [ ] No unsupported credentials, claims, or contact details were introduced.
- [ ] Provide a short summary of the files created and any source assets or content still needed.
