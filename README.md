# Revere Homes website

A one-page website for **Revere Homes** (Langley, BC): custom homes, coach houses and renovations. The goal of the page is to get people to book a free 1-hour consultation.

It's built with [Astro](https://astro.build), which turns the files in `src/` into a plain, fast HTML page. There's no database and no server to look after.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads by itself when you save a file. Press `Ctrl + C` in the terminal to stop it.

To check that the site builds the same way Vercel will build it:

```bash
npm run build
```

## Where to change things

| What you want to change | File |
| --- | --- |
| Phone, email, address, text, photo links, form chips, journal posts | `src/data/site.js` |
| Colours and fonts (one line each) | `src/styles/global.css` (the `:root` block at the top) |
| Page layout and section markup | `src/pages/index.astro` |
| Favicon (browser tab icon) | `public/favicon.svg` |

Most everyday edits only need `src/data/site.js`.

## Put it online with Vercel

1. Go to [vercel.com](https://vercel.com) and choose **Add New → Project**.
2. Import this GitHub repository.
3. Vercel detects **Astro** by itself. Leave the default settings and click **Deploy**.
4. Every time you push to `main`, Vercel rebuilds the site automatically.

## Hook up the contact form

Right now the form shows a thank-you message but **doesn't send anything**. To make it send emails:

1. Create a free account at [formspree.io](https://formspree.io) and make a new form.
2. Copy the form URL it gives you (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `formEndpoint` in `src/data/site.js`:
   ```js
   formEndpoint: 'https://formspree.io/f/abcdwxyz',
   ```
4. Save, commit and push. Send yourself a test message.

## Open items before launch

- **Photos are placeholders.** The hero, specialties and services photos are free Unsplash images loaded from images.unsplash.com. Replace them with the client's own project photos: put the files in `public/images/` and change the links in `src/data/site.js` to `/images/your-photo.jpg`.
- **Logo and journal images are hot-linked** from reverehomes.ca. Download them into `public/images/` and update the links so the site doesn't depend on the old site.
- **Contact form** needs a Formspree URL (see above).
- Check that `site.url` in `src/data/site.js` and `site` in `astro.config.mjs` match the final domain.

## Undo a change

Every change is saved as a git commit, so nothing is lost.

- See the history: `git log --oneline`
- Undo a specific commit (creates a new "undo" commit, safe for shared branches):
  ```bash
  git revert <commit-id>
  ```
- Throw away edits you haven't committed yet in one file:
  ```bash
  git checkout -- path/to/file
  ```
