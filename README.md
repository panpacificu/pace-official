# PACE Website Starter — Single Folder Version

Professional Advancement Continuing Education website starter for GitHub Pages.

This version is simplified for easier GitHub uploading.

All files are placed in one folder only. No subfolders are needed.

## Files Included

```text
index.html
about.html
admission.html
contact.html
styles.css
config.js
script.js
hero-placeholder.svg
Code.gs
README.md
```

## Main Website Files

Upload these files directly to your GitHub repository:

```text
index.html
about.html
admission.html
contact.html
styles.css
config.js
script.js
hero-placeholder.svg
README.md
```

## Optional File

```text
Code.gs
```

This is only for future Google Apps Script contact form integration. You do not need to upload it to GitHub unless you want to keep it as reference.

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

## How to Edit Website Content

Open:

```text
config.js
```

You can edit:

- Website version
- Last update
- Hero headline
- Hero subtitle
- Courses Offered
- News items

## How to Replace the Hero Image

Replace:

```text
hero-placeholder.svg
```

Then update this line in `styles.css` only if your new image has a different file name:

```css
url("hero-placeholder.svg")
```

Example:

```css
url("pace-hero.jpg")
```

## How to Add a New Page Later

1. Duplicate `about.html`.
2. Rename it, for example:

```text
programs.html
```

3. Add this link to the navigation menu in all HTML files:

```html
<a href="programs.html">Programs</a>
```

## Footer

The footer is controlled through:

```text
config.js
```

Current footer includes:

- PACE
- pace@panpacificu.edu.ph
- Version
- Last Update
