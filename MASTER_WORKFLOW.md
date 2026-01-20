# VÖLTZMANN Website Master Workflow & Protocol
> **Single Source of Truth** for all future website updates.

## 1. Development Phase (开发阶段)
**Workspace**: `g:\BaiduSyncdisk\auraon.de`
*All code changes, new pages, and image generation must happen here.*

### Workflow:
1.  **Edit Code**: Modify pages in `app/`, update styles, or add components.
2.  **Add Assets**: Save new images to `public/images/`.
    *   **Rule**: Ensure every page uses a **unique** image (High-Realism/Branded).
3.  **Local Verification (Self-Check)**:
    *   Run: `npm run dev`
    *   **Check List**:
        *   [ ] No 404 errors on any link.
        *   [ ] All images load correctly (no broken icons).
        *   [ ] Layout is "Borderless & Authoritative" (Medical Grade).

---

## 2. Synchronization Phase (同步阶段 - ✨ Critical)
**Goal**: Transfer verified code from Dev (`auraon.de`) to Deployment (`voltzmann`).
*Never edit directly in the `voltzmann` folder.*

### Manual Sync Steps (Or use efficient copy commands):
You must copy the following folders/files from **Source** (`auraon.de`) to **Destination** (`voltzmann`):

| Asset | Action |
| :--- | :--- |
| `app/` folder | **Copy & Replace** (contains all pages) |
| `public/` folder | **Copy & Replace** (contains all images) |
| `vercel.json` | **Copy** (Critical for Vercel routing) |
| `package.json` | **Copy** (If dependencies changed) |
| `next.config.ts` | **Copy** (Configuration) |
| `tsconfig.json` | **Copy** |
| `*.md` files | **Copy** (Documentation updates) |

**Exclude**: Do NOT copy `.git`, `.next`, or `node_modules`.

---

## 3. Deployment Phase (部署阶段)
**Workspace**: `g:\BaiduSyncdisk\voltzmann`
**Remote Repo**: `https://github.com/sungbada123-web/voltzmann`

### Git Upload Steps:
1.  Open Terminal in: `g:\BaiduSyncdisk\voltzmann`
2.  **Execute Commands**:
    ```powershell
    # 1. Check status (should see modified files from sync)
    git status

    # 2. Stage all changes
    git add .

    # 3. Commit with descriptive message
    git commit -m "feat: [Describe your changes here, e.g., Update About Us images]"

    # 4. Push to Main (Triggers Vercel)
    git push origin main
    ```

---

## 4. Post-Deployment Verification (验收阶段)
**Platform**: Vercel (Online)

### Verification Checklist:
1.  **Wait**: Allow 2-3 minutes for Vercel build to complete.
2.  **Visit Live Site**:
    *   Click "Solutions" -> Check 3-4 random sub-pages.
    *   Click "Science" -> Check Images.
    *   Click "About" -> Check Team/Press images.
3.  **Troubleshooting**:
    *   **If 404**: Check `vercel.json` exists in `voltzmann` repo.
    *   **If Image Missing**: Check filename case sensitivity (e.g., `.png` vs `.PNG`).
