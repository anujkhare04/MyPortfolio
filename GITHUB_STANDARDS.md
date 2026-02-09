# GitHub Standards for Placement Quality

To pass a recruiter's 30-second audit, your GitHub must follow these strict rules.

## 1. Repository Naming
- **Use:** `quiz-kar-mern`, `doubt-solver-portal`, `music-streaming-app`
- **Avoid:** `Project1`, `MyFinalProject`, `backend-code`

## 2. Professional README (The "Front Door")
Every repo must have a `README.md` with:
- **Title & 1-line Description:** What is it?
- **Problem Statement:** Why did you build it? (Recruiters love "Product Thinking").
- **Tech Stack:** Bullet points of tech used.
- **Key Features:** What can a user do?
- **Setup Instructions:** `npm install`, `npm start`. If I can't run it, it doesn't exist.
- **Screenshots:** At least 2-3 clear images.

## 3. The Commit History (The "Proof of Work")
- **Red Flag:** One giant commit with "initial commit" and 10,000 lines of code. It looks like you copied it.
- **Good Practice:** 10-20 commits showing progress.
  - `feat: setup express server and mongodb connection`
  - `feat: implement jwt login logic`
  - `fix: resolve state update issue on quiz submission`

## 4. Repository Cleanup
- **.gitignore:** MUST include `node_modules` and `.env`.
- **License:** Use MIT license.
- **Description & Tags:** Add tags like `mern`, `react`, `javascript`, `full-stack`.

## 5. Recruiter Red Flags
- Committing API keys or DB passwords.
- Broken links in the README.
- Having 50 "forked" repositories and zero original projects.
- "Last updated 9 months ago." (Shows you stopped learning).
