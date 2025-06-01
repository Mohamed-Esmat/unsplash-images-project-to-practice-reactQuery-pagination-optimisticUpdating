# 🔍 Image Search App

A sleek and modern image search app built with **React**, **React Query**, and the **Unsplash API**. This project showcases advanced frontend techniques like pagination, theming, efficient data fetching, and debounced search — all in a clean, professional UI.

---

## ✨ Features

* 🔍 Image search using the powerful Unsplash API
* 📦 Data fetching & caching with React Query
* 📸 Dynamic image grid with responsive design
* 🌓 Built-in **dark & light theme support**
* ⏭️ Smart pagination for navigating large image sets
* ⚡ Debounced input for fast & efficient searching
* ♻️ Error and loading states for smooth UX
* ✅ Clean folder structure for scalability

---

## 🌐 Live Demo

Check out the live version of the Image Search App here:
**[🔗 View Demo](https://unsplash-images-reactquery-pagination.netlify.app/)**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mohamed-Esmat/unsplash-images-project-to-practice-reactQuery-pagination-optimisticUpdating.git
cd iunsplash-images-project-to-practice-reactQuery-pagination-optimisticUpdating
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Unsplash Access Key

Create a `.env` file in the root directory and add your Unsplash API access key:

```bash
VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
```

You can obtain a key from [Unsplash Developers](https://unsplash.com/developers).

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

---

## 🔧 Tech Stack

* ⚛️ React (with Vite)
* 📦 React Query
* 🖼️ Unsplash API
* 🌐 TypeScript (optional, if used)

---

## 🎨 Styling & Design

* **Dark/Light Mode**: Built-in support for theme switching based on user/system preference 🌗
* **Custom CSS**: Styling is done using standard or modular CSS, no utility CSS framework used
* **Responsive Layout**: Optimized for all screen sizes — mobile to desktop
* **Accessible UX**: Keyboard-navigable and readable in all themes

---

## 📁 Folder Structure

```bash
src/
│
├── components/       # Reusable UI components (SearchInput, ImageGrid, Pagination...)
├── hooks/            # Custom hooks (e.g., useDebounce)
├── theme/            # Theme provider and logic
├── App.jsx           # Main App entry point
├── main.jsx          # Root rendering
└── index.css         # Global styles
```

---

## 📸 Screenshots

| Light Mode                      | Dark Mode                     |
| ------------------------------- | ----------------------------- |
| ![light](https://res.cloudinary.com/tawfeer/image/upload/v1748735118/light-theme_d7nwtd.png) | ![dark](https://res.cloudinary.com/tawfeer/image/upload/v1748735145/dark-theme_mhshho.png) |

---

## 🧠 Learnings

* Handling API pagination elegantly with user experience in mind
* React Query's caching & loading strategies
* Optimizing search with debounce
* Implementing global theme support

---

## 🙌 Acknowledgements

Big thanks to the incredible resources and tools that made this project possible:

* 📘 **John Smilga** — for his excellent *Complete React, Next.js & TypeScript Projects Course 2025*, which includes a **simplified version** of this project
* 📸 [Unsplash API](https://unsplash.com/developers) — for providing a vast collection of high-quality, free images
* ⚛️ [React Query](https://tanstack.com/query/latest) — for powerful and effortless data fetching and caching
* ⚡ [Vite](https://vitejs.dev/) — for fast and modern development experience

---

## 📜 License

This project is an **independently built, full-featured version** that expands upon the image search project concept introduced in the [Complete React, Next.js & TypeScript Projects Course 2025](https://www.udemy.com/user/john-smilga/) by **John Smilga**. It is intended strictly for **educational and portfolio purposes**.

Licensed under the **MIT License** — you're free to use, modify, and distribute this project with proper attribution.
© [Mohamed Esmat](https://github.com/Mohamed-Esmat)
