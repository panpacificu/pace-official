# PACE Website Starter — Single Folder Version

Professional Advancement Continuing Education website starter for GitHub Pages.

Current Version: `1.0.5`  
Last Update: `June 19, 2026 03:21 AM`

This version is simplified for easier GitHub uploading.

All files are placed in one folder only. No subfolders are needed.

## Files Included

```text
index.html
about.html
admission.html
contact.html
course-cit.html
course-eteeap.html
course-ler.html
course-plc.html
course-pgs.html
course-tvet-tesda.html
course-training-services.html
styles.css
config.js
script.js
hero-placeholder.svg
news-preview-1.svg
news-preview-2.svg
news-preview-3.svg
Code.gs
README.md
```

## v1.0.3 Updates

- Added portfolio-style news preview cards.
- Prepared News section for future Google Sheets + Apps Script integration.
- Added fallback preview news through `config.js`.
- Removed visible developer notes from homepage and inner pages.
- Kept the single-folder structure for easier GitHub upload.

## News Section Setup

For now, the News section uses preview news from:

```text
config.js
```

Look for:

```js
previewNews: []
```

## Future Google Sheet News Setup

When ready, create a Google Sheet and add this Apps Script file:

```text
Code.gs
```

The script will create or use a sheet named:

```text
PACE News
```

Required columns:

```text
status
order
date
category
title
excerpt
image
url
createdAt
```

Only rows with this status will appear on the website:

```text
published
```

## Connecting Google Sheet News to Website

After deploying Apps Script as a Web App, copy the Web App URL.

Then open:

```text
config.js
```

Change:

```js
newsSheetApi: {
  enabled: false,
  webAppUrl: ""
}
```

To:

```js
newsSheetApi: {
  enabled: true,
  webAppUrl: "YOUR_APPS_SCRIPT_WEB_APP_URL"
}
```

## GitHub Pages Link Format

For this repository:

```text
https://github.com/panpacificu/pace-official
```

The GitHub Pages link should be:

```text
https://panpacificu.github.io/pace-official/
```

## v1.0.4 Live News Connection

The website is now connected to the deployed PACE Apps Script Web App.

Configured in:

```text
config.js
```

Current setting:

```js
newsSheetApi: {
  enabled: true,
  webAppUrl: "https://script.google.com/macros/s/AKfycbyTzJBkagqjbbXPztC4TiQ5w6XMl-JIbtMNaTvLEeHdeLKWrv0ICCy92Qho0h-wvig/exec"
}
```

The website requests:

```text
?action=news
```

The website will display rows from the `PACE News` sheet when:

```text
status = published
```

If the Apps Script request fails or the sheet has no published rows, the website automatically displays the preview news stored in `config.js`.

### Google Sheet headers

Use this exact order:

```text
status | order | date | category | title | excerpt | image | url | createdAt
```


## v1.0.5 Header and Footer Update

- Added the official Panpacific University logo at the far left of the website header.
- Kept the PACE identity and full office name beside the university logo.
- Added the complete PACE office address to the footer.
- Added the following contact emails:
  - `pace@panpacificu.edu.ph`
  - `cit@panpacificu.edu.ph`
  - `pace.it@panpacificu.edu.ph`
- Retained the website version and last-update information.
- Added `panpacific-university-logo.png` as the optimized header logo.
