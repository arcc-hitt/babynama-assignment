# Babynama - Frontend Developer Intern Assignment


Welcome to my implementation of the “Upcoming Live Webinars” feature for Babynama.

---

### 🔗 Live URL

[https://babynama-assignment-chi.vercel.app/](https://babynama-assignment-chi.vercel.app/)

---

## 🛠️ Choices Made

- **App Router adoption**  
  I used Next.js’s App Router (`/app` directory) instead of the older Pages Router to take advantage of React Server Components and the built‑in layout system.

- **TailwindCSS for styling & responsiveness**  
  I chose TailwindCSS to rapidly prototype the design with utility classes, ensuring consistent spacing, typography, and responsive layouts without writing custom CSS.

- **Separate `WebinarCard` component**  
  I pulled the card UI into its own `WebinarCard` component (in `/components/WebinarCard.tsx`) to keep the code modular, make it easier to maintain, and allow reuse of the card layout elsewhere in the app.

- **Dedicated `/components` folder**  
  All reusable UI components (like `WebinarCard`) live in a top‑level `/components` directory, keeping the project structure organized and making components easy to import across routes.

- **“View Webinars” navigation button**  
  On the home page (`/`), I added a “View Webinars” button using Next’s `<Link>` component, giving users a one‑click path to the webinars page.

- **TypeScript interfaces**  
  Defining a `Webinar` interface ensures type safety when passing data between the page and card component, catching any mismatches at compile time.

---

## 🧱 Roadblock & Learning

- **Tracking `.next` folder in Git**  
  I struggled with Git still tracking the `.next` build output even after it was already included in `.gitignore`. I solved it by running:
  ```bash
  git rm -r --cached .next
  git commit -m "chore: stop tracking .next build output"
  ```
  After that, the .next folder was correctly ignored.

- **Date formatting**  
  I wanted to display dates in a more human‑friendly format (e.g. “July 10, 2025”), so I researched the `Intl.DateTimeFormat` API. Implementing it allowed me to convert the ISO date strings to localized, readable dates.

- **Accessibility considerations**  
  After reading about accessible buttons, I added `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500` to the “View Details” buttons, ensuring keyboard users can see focus states.

---

## 📸 Screenshot

![Webinars Page Screenshot](https://github.com/user-attachments/assets/d75e90d2-98ac-4bbe-aef4-7dc39f3f2d99)
![Webinars Page Screenshot](https://github.com/user-attachments/assets/fb9fdc74-badf-45c6-a330-24beb1d1c8e5)

---

Thank you for reviewing my work!  
