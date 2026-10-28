# Benvek Website Redesign

A static, five-page-plus website redesign concept for Benvek Smart Solutions Pvt Ltd. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Contents
`index.html`, `solutions.html`, `solution-detail.html` (Fresh Air Ventilation), `applications.html`, `about.html`, `contact.html`, `404.html`, `assets/` (css, js, images), `docs/` (sitemap, wireframe, visual direction, content needed).

## Run locally
```
cd ~/Projects/benvek-redesign
python3 -m http.server 8000
```
Open http://localhost:8000 in Chrome. Stop with Ctrl+C.

## Test
Click every menu item and button on each page; shrink the window below 820px and check the Menu button; open http://localhost:8000/missing.html (the 404 page only shows on Vercel); on the contact page, submit the form and confirm your email app opens. Check the Console (F12) for errors.

## Git
```
git status
git add .
git commit -m "Complete Benvek redesign"
git push -u origin main
```
(Use your branch name if it is not `main`: check with `git branch`.)

## Vercel
Sign in at vercel.com with GitHub, Add New → Project, import `Habwikuzo/benvek-redesign`, keep Framework "Other" with no build command, and Deploy. Each later push to the main branch redeploys automatically; other branches get preview URLs.

## To be confirmed
Everything marked "To be confirmed by Benvek" (see `docs/content-and-assets-needed.md`). No real photos or documents are included.

## Known limitations
- The contact form uses `mailto:`, so it needs an email app on the visitor's device.
- Six solution categories have no detail page yet.
- No social-sharing image (needs an absolute URL after deployment).
- Layouts were not checked in a browser by the author of this package; follow the test steps above.
