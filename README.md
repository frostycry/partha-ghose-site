# Partha Ghose: personal website

Static site (HTML/CSS/JS). No build step.

## Deploy: GitHub + Vercel
1. Create an empty repo on github.com (e.g. `partha-ghose-site`).
2. In this folder:
   ```
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<you>/partha-ghose-site.git
   git push -u origin main
   ```
3. On vercel.com: Add New, Project, Import the repo. Framework Preset: **Other**. Leave build command and output directory empty. Deploy.
4. Every later `git push` redeploys automatically.

## Content to add
- `assets/portrait.jpg`, `assets/lecture.jpg`, `assets/cv.pdf`
- Publications in `publications.json`
- Replace the "to be added" placeholders in the HTML pages
