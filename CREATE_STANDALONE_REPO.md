# Move Terumo Europe Demo Into Its Own Repository

Follow these steps in your **terminal** (outside Cursor) to create a standalone repo and push it to GitHub.

---

## 1. Create a new folder and copy the demo

```bash
# Create folder (e.g. on Desktop or next to aurivian-demos)
mkdir -p ~/Desktop/terumo-europe-demo
cd ~/Desktop/terumo-europe-demo

# Copy contents from aurivian-demos (exclude node_modules and build)
rsync -av --exclude=node_modules --exclude=build \
  /Users/ZAH/Desktop/cursor_projects/aurivian-demos/terumo-europe-demo/ .
```

If you don't have `rsync`:

```bash
mkdir -p ~/Desktop/terumo-europe-demo
cp -R /Users/ZAH/Desktop/cursor_projects/aurivian-demos/terumo-europe-demo/* ~/Desktop/terumo-europe-demo/
cp /Users/ZAH/Desktop/cursor_projects/aurivian-demos/terumo-europe-demo/.gitignore ~/Desktop/terumo-europe-demo/
# Remove node_modules/build if they were copied
rm -rf ~/Desktop/terumo-europe-demo/node_modules ~/Desktop/terumo-europe-demo/build
```

---

## 2. Initialize git and make the first commit

```bash
cd ~/Desktop/terumo-europe-demo
git init
git add .
git commit -m "Initial commit: Terumo Europe Congress & KOL Intelligence demo"
```

---

## 3. Create a new repository on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** `terumo-europe-demo` (or `aurivian-terumo-europe-demo`)
3. **Visibility:** Public or Private
4. **Do not** add a README, .gitignore, or license (you already have them)
5. Click **Create repository**

---

## 4. Push to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username or org, e.g. `z-aurivian`):

```bash
cd ~/Desktop/terumo-europe-demo
git remote add origin https://github.com/YOUR_USERNAME/terumo-europe-demo.git
git branch -M main
git push -u origin main
```

If you use SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/terumo-europe-demo.git
git branch -M main
git push -u origin main
```

---

## 5. Deploy on Vercel

1. Go to **https://vercel.com** → **Add New…** → **Project**
2. **Import** the new repo `terumo-europe-demo`
3. **Root Directory** can stay as `.` (the repo root is already the demo)
4. Click **Deploy**

---

## 6. (Optional) Remove from the main repo

After the standalone repo is pushed and working, you can remove `terumo-europe-demo` from the aurivian-demos (aurivian-vertex-demo) repo:

```bash
cd /Users/ZAH/Desktop/cursor_projects/aurivian-demos
git rm -r terumo-europe-demo
git commit -m "Move terumo-europe-demo to its own repository"
git push origin main
```

If you prefer to keep a copy in the main repo, skip this step.
