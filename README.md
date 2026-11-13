# Athiravan Scale Website

The company website for **Athiravan Scale**, an ISO 9001-certified weighing scale manufacturer in Madurai, Tamil Nadu (brands: **Atway** and **Athira**).

The site shows our products, in-house fabrication, our apps (with links to their Play Store pages) and our showrooms in Madurai, Tuticorin and Tirunelveli. It is bilingual (English and Tamil) and runs in the browser on phones and desktops.

> This is a **website**, not a mobile app. Testing "on mobile" means opening the site in a phone browser.

## Tech stack

| Part                  | Tool                                        |
| --------------------- | ------------------------------------------- |
| Frontend              | React 19 + TypeScript, built with Vite      |
| Linting               | Oxlint                                      |
| Backend (being added) | Firebase: Firestore, Auth, Storage, Hosting |

## Before you start

Install these once:

1. **Node.js 22 LTS** (or 20.19 and newer) from [nodejs.org](https://nodejs.org). Check with `node -v`.
2. **Git** from [git-scm.com](https://git-scm.com). Check with `git -v`.
3. **VS Code** (recommended) from [code.visualstudio.com](https://code.visualstudio.com).

## Run it on your laptop

```bash
# 1. Get the code
git clone https://github.com/Ilavazhahan/athiravan-Website.git
cd athiravan-Website

# 2. Install packages (first time, and whenever package.json changes)
npm install

# 3. Create your environment file
cp .env.example .env        # Windows (Command Prompt): copy .env.example .env

# 4. Start the dev server
npm run dev
```

Open the link it prints (usually **http://localhost:5173**). The page reloads by itself when you save a file.

To open it on your phone, run `npm run dev -- --host`, then on a phone connected to the same Wi-Fi, open the `Network:` address it prints.

Stop the server with **Ctrl + C**.

## Environment variables

`.env.example` lists the Firebase settings the app needs:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

- Ila shares the real values privately. Paste them into your own `.env`.
- **Never commit `.env`** or paste its values into chat, issues or PRs.
- Only variables starting with `VITE_` are visible to the app. Read them with `import.meta.env.VITE_FIREBASE_PROJECT_ID`.
- Restart `npm run dev` after changing `.env`.

## Commands

| Command           | What it does                                                     |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Starts the local dev server with live reload                     |
| `npm run build`   | Type-checks the code and builds the production site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder so you can test the real build   |
| `npm run lint`    | Checks the code for common mistakes                              |

Run `npm run lint` and `npm run build` before opening a pull request. Both should finish with no errors.

## Project structure

```
athiravan-Website/
├── public/           Files served as-is (favicon, icons)
├── src/
│   ├── assets/       Images imported by components
│   ├── App.tsx       Main app component
│   ├── main.tsx      Entry point that mounts the app
│   └── *.css         Styles
├── index.html        Page shell that loads src/main.tsx
├── .env.example      List of environment variables (no real values)
└── vite.config.ts    Vite settings
```

## How we work

- `main` is protected. Work on a branch (`feature/...` or `fix/...`) and open a pull request.
- Ila reviews and merges every PR.
- Tasks are tracked on the [GitHub Project board](https://github.com/users/Ilavazhahan/projects/2).

Full rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Common problems

| Problem                           | Fix                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| `npm` or `node` is not recognised | Reinstall Node.js, then close and reopen the terminal                                     |
| `Cannot find module ...`          | Run `npm install` again                                                                   |
| Port 5173 is already in use       | Close the other dev server, or use the new port Vite prints                               |
| Firebase values are `undefined`   | Check `.env` is in the project root, names start with `VITE_`, then restart `npm run dev` |
| Changes don't show                | Save the file, then hard-refresh the browser (Ctrl + Shift + R)                           |

Stuck for more than 30 minutes? Ask in the group with a screenshot of the error.

## Setup

1. Clone the repo and open the project folder (the one that contains `package.json`):
   ```bash
   git clone https://github.com/Ilavazhahan/athiravan-Website.git
   cd athiravan-Website
   ```
2. Copy the example env file to a real one:
   - Windows (PowerShell): `copy .env.example .env`
   - Mac/Linux: `cp .env.example .env`
3. Open `.env` and fill in the Firebase values. Ask Ila for them. Never commit `.env` or share the values publicly.
4. Install the packages:
   ```bash
   npm install
   ```
5. Start the site:
   ```bash
   npm run dev
   ```
   Open the address it prints (usually http://localhost:5173).

If you change `.env`, stop the server (Ctrl+C) and run `npm run dev` again.
