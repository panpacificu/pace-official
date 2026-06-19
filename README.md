# PACE Website Starter

Professional Advancement Continuing Education website starter for GitHub Pages.

## Version

Current Version: `1.0.0`  
Last Update: `June 19, 2026 02:49 AM`

## Project Structure

```text
pace-website-starter-v1/
├── index.html
├── about.html
├── admission.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── script.js
├── assets/
│   └── images/
│       └── hero-placeholder.svg
└── apps-script/
    └── Code.gs
```

## Pages Included

- Home
- About
- Admission
- Contact Us

The About and Admission pages are intentionally prepared as blank/placeholder pages for now.

## Homepage Sections

- Hero Image / Screen
- Courses Offered
- News
- Footer with:
  - PACE
  - pace@panpacificu.edu.ph
  - Version
  - Last Update

## How to Edit Basic Content

Open:

```text
js/config.js
```

You can edit:

- Website version
- Last update
- Hero text
- Courses Offered cards
- News cards

Example:

```js
version: "1.0.1",
lastUpdate: "June 19, 2026 11:30 AM",
```

## How to Add a New Menu Tab Later

1. Create a new HTML file, for example:

```text
programs.html
```

2. Copy the structure from `about.html`.

3. Add the new menu link in all HTML files:

```html
<a href="programs.html">Programs</a>
```

4. Update the page title and content.

## How to Replace the Hero Image

Replace this file:

```text
assets/images/hero-placeholder.svg
```

Or update the hero background path in:

```text
css/styles.css
```

Search for:

```css
url("../assets/images/hero-placeholder.svg")
```

Replace it with your preferred image path.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to repository Settings.
4. Go to Pages.
5. Under Branch, select `main`.
6. Select `/root`.
7. Save.
8. Wait for GitHub Pages to generate the live website link.

## Apps Script Notes

The included `apps-script/Code.gs` is only a scaffold for future inquiry/contact form integration.

It is not active yet.

Recommended future setup:

- Google Sheet for inquiry submissions
- Apps Script Web App
- Website form connected through JavaScript
- Optional email notification to `pace@panpacificu.edu.ph`

## Suggested Next Version Roadmap

### v1.0.1
- Add actual PACE hero image.
- Add official course titles.
- Add real news items.

### v1.1.0
- Add Contact Us inquiry form.
- Connect form to Google Sheet through Apps Script.
- Add contact confirmation message.

### v1.2.0
- Add Admin-style news/course editing through config or sheet backend.
- Add downloadable admission forms.
- Add FAQ section.
