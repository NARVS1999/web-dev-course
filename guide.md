# 🚀 Zero to Hero Guide: Web App Development  
## (Laravel + Next.js + MySQL + React Native) – **100% Free & Local-Friendly**

> *"Galing sa wala, hanggang sa kaya mo nang gumawa ng sarili mong app — lahat ng tools dito ay libre at pwedeng i-run sa local machine mo!"*

---

## 📚 PART 1: BEFORE YOU START (Pre-requisites)

### 🧠 **Fundamentals (Non-Negotiable)**

| Skill | What to Learn | Time Estimate | Free Resource |
|-------|---------------|---------------|---------------|
| **HTML** | Structure, forms, tables, semantic tags | 1 week | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| **CSS** | Flexbox, Grid, Responsive, Tailwind basics | 1-2 weeks | [CSS Tricks](https://css-tricks.com/) / [Tailwind Play](https://play.tailwindcss.com/) |
| **JavaScript** | ES6+, Async/Await, Fetch, DOM | 2-3 weeks | [JavaScript.info](https://javascript.info/) |
| **Git & GitHub** | Clone, Commit, Push, Pull, Branching | 3 days | [Git official](https://git-scm.com/) + free GitHub account |

> ⚠️ **Warning:** Huwag mong laktawan 'to! Ito ang pundasyon mo. Lahat ng susunod ay nakadepende dito.

---

### 🗄️ **Database Basics (Before MySQL)**

- **Data Types** – integer, string, boolean, date  
- **Primary/Foreign Keys** – para magka-relasyon ang tables  
- **Basic Queries** – SELECT, INSERT, UPDATE, DELETE  
- **Joins** – INNER JOIN, LEFT JOIN  

**✅ Local Practice:** Install **XAMPP** or **Laragon** (both free) at gamitin ang phpMyAdmin para mag-practice ng SQL queries bago ka mag-code.

---

### 🌐 **Web Fundamentals**

- HTTP Methods (GET, POST, PUT, DELETE)  
- REST API concepts  
- JSON – ang language ng API responses  
- Authentication – Cookies vs Tokens (JWT)  

---

## 📘 PART 2: THE LEARNING PATH (Step-by-Step)

### 🟢 **Phase 1: Backend – Laravel** (4–6 weeks) – **100% free, local first**

| Week | Topic | Mini-Project | Free Tools |
|------|-------|--------------|------------|
| 1 | Installation, Routing, Controllers | "Hello World" API | Composer, Laravel, VS Code |
| 2 | Blade Templates, Migrations, Eloquent ORM | Simple Blog (CRUD) | MySQL via XAMPP/Laragon |
| 3 | Relationships (One-to-Many, Many-to-Many) | Blog with Comments | TablePlus (free version) |
| 4 | Authentication (Sanctum/Passport), Middleware | User Login System | Postman (free) |
| 5 | API Resources, Validation, Error Handling | Todo App API | OpenCode (free AI assistant) |
| 6 | File Uploads, Queue, Events | E-commerce API (Products) | Laravel Horizon (free) |

**🎯 Goal:** Makagawa ka ng REST API na may authentication at database operations – lahat ng ito ay pwedeng patakbuhin sa `localhost` lang.

---

### 🟡 **Phase 2: Frontend – Next.js** (3–4 weeks) – **free hosting via Vercel**

| Week | Topic | Mini-Project | Free Tools |
|------|-------|--------------|------------|
| 1 | React Basics (Components, Props, State, Hooks) | Counter App | Create React App (or Vite) |
| 2 | Next.js Setup, Pages Router, SSR vs CSR | Static Portfolio | `npx create-next-app` |
| 3 | API Routes, Fetching Data (SWR/React Query) | Connect to Laravel API | SWR (free library) |
| 4 | Authentication in Next.js (NextAuth/JWT) | Login System with API | NextAuth.js (open-source) |

**🎯 Goal:** Makakonek mo ang Next.js frontend mo sa Laravel backend na tumatakbo sa `http://localhost:8000`.

---

### 🟠 **Phase 3: Mobile – React Native** (3–4 weeks) – **Expo (free, no Xcode needed)**

| Week | Topic | Mini-Project | Free Tools |
|------|-------|--------------|------------|
| 1 | Expo Setup, Components (View, Text, Button) | Static Mobile UI | Expo CLI + Expo Go app (sa phone) |
| 2 | Navigation (Stack, Bottom Tabs) | Multi-screen App | React Navigation (free) |
| 3 | API Integration, AsyncStorage | Connect to Same API | Axios (free) |
| 4 | Push Notifications, Camera, Permissions | Profile with Photo Upload | Expo Camera (free) |

**🎯 Goal:** Same app, pero sa mobile naman – gamit ang iisang API na tumatakbo sa `localhost` (pwede mong i-tunnel gamit ang `ngrok` para ma-access ng phone mo).

---

### 🔵 **Phase 4: Integration & Deployment** (2 weeks) – **all free tiers**

| Topic | What to Do | Free Option |
|-------|------------|-------------|
| Environment Variables | .env files for local vs production | `dotenv` (built-in) |
| CORS Setup | Allow frontend/mobile to access API | Laravel CORS config |
| Deploy Backend | Render.com / Railway / Fly.io | **Render Free Tier** (sleeps pero okay) |
| Deploy Frontend | Vercel / Netlify | **Vercel Free Tier** (unlimited personal) |
| Deploy Mobile | Expo Go (testing) / Play Store / App Store | **Expo Build** (free for testing) |

---

## 🛠️ PART 3: TOOLS YOU NEED – **LAHAT LIBRE**

| Tool | Purpose | Free Alternative |
|------|---------|------------------|
| **VS Code** | Code Editor | [Visual Studio Code](https://code.visualstudio.com/) – 100% free |
| **Postman** | API Testing | [Insomnia](https://insomnia.rest/) or **Thunder Client** (VS Code extension) |
| **TablePlus** | Database GUI | **DBeaver** (free) or phpMyAdmin |
| **Expo Go** | Mobile Testing | Download sa Play Store/App Store – libre |
| **GitHub** | Version Control | Unlimited public/private repos sa free account |
| **OpenCode** | AI Coding Assistant | Libre – gamitin mo sa buong journey mo! |

---

## 🧩 PART 4: IMPORTANT CONCEPTS TO MASTER

### 🔄 **Data Flow (Paano nag-uusap ang layers)**

```
[React Native] ←→ [Next.js Frontend] ←→ [Laravel API] ←→ [MySQL]
     (Mobile)          (Web Browser)         (Backend)      (Database)
```

Lahat ng 'to pwedeng tumakbo sa iisang computer mo – gamit ang `localhost` at iba't ibang ports.

### 🔐 **Authentication Flow (Local Setup)**

1. User logs in via Next.js/React Native (naka-run sa `localhost:3000` at `localhost:19000`)
2. Sends credentials to Laravel API (`localhost:8000/api/login`)
3. Laravel returns JWT token
4. Token stored in localStorage (web) or AsyncStorage (mobile)
5. Token sent in headers for protected routes

### 🗂️ **Folder Structure (Local Development)**

```
project/
├── backend-laravel/     # Laravel API (port 8000)
│   ├── app/
│   ├── routes/
│   └── database/
├── frontend-nextjs/     # Next.js Web (port 3000)
│   ├── pages/
│   ├── components/
│   └── styles/
└── mobile-reactnative/  # React Native App (Expo port 19000)
    ├── screens/
    ├── components/
    └── navigation/
```

---

## 📖 PART 5: RECOMMENDED FREE RESOURCES

### 🎥 **YouTube Channels (Tagalog/English)**

| Channel | Focus | Free? |
|---------|-------|-------|
| **The Net Ninja** | Laravel, React, Next.js | ✅ Libre |
| **CodeWithHarry** | Beginner-friendly | ✅ Libre |
| **Traversy Media** | Full-stack tutorials | ✅ Libre |
| **PinoyDev** (search mo) | Tagalog coding | ✅ Libre |

### 📚 **Free Courses & Docs**

- **Laravel:** [Laracasts](https://laracasts.com/) (may free lessons) + [Official Docs](https://laravel.com/docs)
- **Next.js:** [Next.js Learn](https://nextjs.org/learn) – libre
- **React Native:** [Expo Documentation](https://docs.expo.dev/) – libre
- **MySQL:** [W3Schools](https://www.w3schools.com/sql/) + [SQLZoo](https://sqlzoo.net/) – libre

---

## 🎯 PART 6: YOUR 6-MONTH LOCAL-FRIENDLY ROADMAP

| Month | Focus | Output (all local) |
|-------|-------|---------------------|
| **Month 1** | HTML, CSS, JS, Git | Portfolio website (static) |
| **Month 2** | MySQL + Laravel Basics | Blog API (CRUD) sa `localhost` |
| **Month 3** | Laravel Advanced + REST APIs | E-commerce API with auth |
| **Month 4** | React + Next.js Basics | Connect to your API (local) |
| **Month 5** | React Native Basics | Mobile version (Expo) |
| **Month 6** | Integration + Deployment | Deploy sa free tiers (Render, Vercel) |

---

## ⚠️ PART 7: COMMON PITFALLS (at paano maiiwasan)

| Mistake | Solution (Local-Friendly) |
|---------|----------------------------|
| **Jumping agad sa frameworks** | Master JS/HTML/CSS muna – maglaan ng oras |
| **Hindi gumagamit ng Git** | Gumawa ng GitHub account NOW – libre naman |
| **Copy-paste without understanding** | I-type mo manually at i-explain sa sarili mo |
| **Forgetting CORS** | I-set mo ang `cors.php` sa Laravel para payagan ang `localhost:3000` at `localhost:19000` |
| **Hardcoded API URLs** | Gumamit ng `.env` files – `API_URL=http://localhost:8000/api` |
| **Hindi nagbabasa ng error messages** | Basahin mo! Nandiyan ang sagot – at gamitin ang OpenCode para tumulong mag-debug |

---

## 💡 PART 8: TIPS FOR SUCCESS (WITH FREE TOOLS)

1. **Build projects, not just tutorials** – gumawa ka ng sarili mong idea (e.g., inventory system, library app).
2. **Join free communities** – Facebook groups, Discord, Reddit (r/laravel, r/nextjs, r/reactnative).
3. **Document your learning** – gumawa ng dev blog gamit ang free GitHub Pages.
4. **Use OpenCode** – para matulungan ka sa coding tasks (libre at walang bayad).
5. **Don't be afraid to ask** – walang bobong tanong sa simula.

---

## 🏁 FINAL WORDS

> *"Ang pagiging developer ay hindi karera. It's a marathon – at pwede kang mag-training sa sarili mong computer, nang hindi gumagastos ng kahit piso."*

### Your First Milestone (Local Edition):
✅ Makagawa ng **To-Do App** na:
- Laravel API (CRUD) – `localhost:8000`
- Next.js frontend (list + add task) – `localhost:3000`
- React Native mobile (same functions) – via Expo Go sa phone mo
- **Naka-deploy** sa free hosting (Render for API, Vercel for web) – para ma-access ng iba!

**Kapag nagawa mo 'to, kaya mo na ang lahat!** 💪

---

## 🔗 QUICK COMMANDS CHEAT SHEET (Free & Local)

```bash
# Laravel (localhost:8000)
composer create-project laravel/laravel api
cd api
php artisan make:model Task -m
php artisan migrate
php artisan serve

# Next.js (localhost:3000)
npx create-next-app@latest frontend
cd frontend
npm run dev

# React Native (Expo)
npx create-expo-app mobile
cd mobile
npm start
# Then scan QR code with Expo Go app (free)
```

---

**Simulan mo na ngayon – lahat ng kailangan mo ay nasa kamay mo na!** 🚀

*— Your Future Dev Self*

Notes: make it windows, free and local developmen friendly course, if be taglish