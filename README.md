# PACE Website Starter — Single Folder Version

Professional Advancement Continuing Education website starter for GitHub Pages.

Current Version: `1.0.2`  
Last Update: `June 19, 2026 03:06 AM`

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
Code.gs
README.md
```

## Pages Included

Main pages:

- Home
- About
- Admission
- Contact Us

Course pages:

- Certificate in Teaching (CIT)
- Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP)
- Licensure Examination Review (LER)
- PACE Panpacific Language Center (PLC)
- Panpacific Graduate School (PGS)
- Technical-Vocational Education and Training (TVET-TESDA)
- Training & Services

## v1.0.2 Updates

- Added one page per course.
- Homepage course cards are now clickable.
- Section spacing was made more compact.
- Footer height was reduced.
- Version and Last Update are still controlled through `config.js`.

## How to Edit Course Cards

Open:

```text
config.js
```

Edit the `courses` array.

Each course card has:

```js
icon: "CIT",
title: "Certificate in Teaching",
description: "Course description here.",
meta: "View course details",
url: "course-cit.html"
```

## How to Upload to GitHub

1. Open your GitHub repository.
2. Click Add file.
3. Click Upload files.
4. Drag all the files from this folder.
5. Commit changes.
6. Go to Settings.
7. Open Pages.
8. Select branch: main.
9. Select folder: /root.
10. Save.

## GitHub Pages Link Format

For this repository:

```text
https://github.com/panpacificu/pace-official
```

The GitHub Pages link should be:

```text
https://panpacificu.github.io/pace-official/
```

## Optional File

```text
Code.gs
```

This is only for future Google Apps Script contact form integration.
