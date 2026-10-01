# Luxury Gen-Z Fashion Brand Website

> *Where heritage meets the now. Crafted for the culturally fluent.*

A photography-centric, minimalist static website for a luxury fashion brand targeting Gen-Z consumers. Built with performance and aesthetic precision in mind.

---

## Description

This project delivers an immersive digital presence for a luxury Gen-Z fashion brand — a space where high-fashion sensibility meets the visual language of the next generation. The site prioritizes editorial photography, bold typographic statements, and fluid micro-interactions to create a brand experience that resonates with a digitally native, aesthetically discerning audience.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic document structure |
| **CSS3** | Custom styles, animations, and layout |
| **Tailwind CSS** | Utility-first styling framework |
| **JavaScript (ES6+)** | Interactivity and dynamic behavior |

---

## Features Implemented

- **Responsive Hero Section** — Full-bleed editorial imagery with gradient overlay, bold headline, and CTA button optimized for all screen sizes
- **Product Gallery with Skeleton Loading** — Photography-centric CSS Grid with shimmer skeleton placeholders for graceful perceived performance
- **Brand Story Section** — Two-column alternating layout with lifestyle imagery and compelling copy that communicates brand values
- **Scroll-Triggered Reveal Animations** — Intersection Observer–powered fade-up animations that reward exploration, with `prefers-reduced-motion` support
- **Morphing Button Interactions** — Fluid CTA animations with letter-spacing transitions, scale transforms, and fill-sweep hover effects
- **Social Media Integration** — Instagram, TikTok, Pinterest, and X (Twitter) icon links in header and footer with accessible aria-labels
- **Performance Optimizations** — Lazy loading for below-fold images, `fetchpriority="high"` for the LCP image, `width`/`height` attributes to prevent CLS, and `decoding="async"` on non-critical images
- **Accessibility Compliance** — Skip-to-content link, semantic HTML landmarks, ARIA labels on all icon-only controls, keyboard-navigable interactive elements, and visible focus states
- **Newsletter Sign-Up** — Accessible email form with client-side validation, ARIA feedback, and screen reader announcements
- **Press & Social Proof** — Testimonials via `<blockquote>` / `<cite>`, and press mention logos
- **Dual Footer** — Contact footer (gray-900) and full brand footer with Shop/Info navigation columns and copyright bar

---

## Accessibility

This site targets **WCAG 2.1 AA compliance**:

- **Semantic HTML** — Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`, and `<cite>` elements throughout
- **Heading Hierarchy** — Single `<h1>` for the hero headline; `<h2>` for all section headings; `<h3>` for subsection headings; sequential levels with no skips
- **Skip Link** — Visually hidden skip-to-content link at the top of `<body>` that becomes visible on keyboard focus, targeting `id="main"`
- **ARIA Labels** — All icon-only buttons and social media icon links include descriptive `aria-label` attributes; navigation links include contextual labels
- **Keyboard Navigation** — All interactive elements (buttons, links, form inputs) are reachable and operable via keyboard alone
- **Visible Focus States** — Focus rings (`focus:ring-2`) applied consistently to all interactive elements
- **Color Contrast** — Hero text rendered over a dark gradient overlay; body and UI text colors selected to meet the 4.5:1 minimum contrast ratio for normal text
- **Reduced Motion** — All animations and transitions are disabled when `prefers-reduced-motion: reduce` is detected
- **Image Alt Text** — All `<img>` elements carry descriptive alt text; purely decorative overlays use `aria-hidden="true"`
- **Form Accessibility** — Email input is associated with a `<label>` via matching `for`/`id`; `aria-invalid` is toggled on validation failure

---

## Performance

- **Image Lazy Loading** — All below-fold images use `loading="lazy"` to defer network requests until needed
- **LCP Optimization** — The hero image uses `loading="eager"` and `fetchpriority="high"` to prioritize the Largest Contentful Paint element
- **Layout Stability** — Explicit `width` and `height` attributes on every `<img>` prevent Cumulative Layout Shift (CLS)
- **Async Decoding** — Non-critical images use `decoding="async"` to avoid blocking the main thread
- **Skeleton Screens** — Shimmer skeleton placeholders fill image containers while assets load, improving perceived performance
- **Deferred JavaScript** — All `<script>` tags use `defer` to avoid render-blocking

---

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/luxury-gen-z-fashion-brand-website.git
   cd luxury-gen-z-fashion-brand-website
   ```

2. **Open locally**

   Option A — Direct browser open:
   ```bash
   open index.html
   ```

   Option B — Local server with live reload (using VS Code Live Server extension or similar):
   ```bash
   # Using Python's built-in HTTP server
   python3 -m http.server 8080
   # Then navigate to http://localhost:8080
   ```

   Option C — Using Node.js `serve` package:
   ```bash
   npx serve .
   ```

3. **Start editing** — Changes to HTML, CSS, or JS files will reflect on browser refresh.

---

## Project Structure

```
luxury-gen-z-fashion-brand-website/
├── index.html              # Main entry point
├── app.js                  # Core interactivity and animations
├── .gitignore              # Version control exclusions
└── README.md               # Project documentation
```

---

## Deployment

This site is deployed on **GitHub Pages** via an automated workflow.

### Deploy to GitHub Pages

1. Push your code to the `main` branch of your GitHub repository
2. Navigate to **Settings → Pages** in your repository
3. Set the source to **Deploy from a branch**, select `main`, and folder `/` (root)
4. Your site will be live at `https://your-username.github.io/luxury-gen-z-fashion-brand-website/`

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

---

## Browser Support

This site is built for modern browsers and tested against:

| Browser | Minimum Version |
|---------|----------------|
| **Google Chrome** | 90+ |
| **Mozilla Firefox** | 90+ |
| **Apple Safari** | 14+ |
| **Microsoft Edge** | 90+ |

Features such as CSS Grid, Intersection Observer, `backdrop-filter`, and `aspect-ratio` are natively supported in all target browsers. No polyfills are required.

---

## Design Principles

The visual identity of this site is governed by the following principles:

- **Scroll-Triggered Reveals** — Content enters the viewport with purposeful motion, rewarding exploration
- **Bold Typography** — Oversized type as a visual element; letterforms as art
- **Generous Whitespace** — Breathing room that conveys luxury and editorial confidence
- **Photography First** — Images lead the narrative; layout serves the image
- **Contrast and Tension** — Dark and light, large and small, motion and stillness

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: brief description of change'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request with a clear description of the changes

Please ensure your code follows the existing style conventions and does not introduce unnecessary dependencies.

---

## Credits

- **Photography** — All editorial and lifestyle images sourced from [Unsplash](https://unsplash.com) under the Unsplash License (free for commercial and non-commercial use)
- **CSS Framework** — [Tailwind CSS](https://tailwindcss.com) v3.x, loaded via CDN
- **Icons** — Inline SVG icons hand-crafted to match the brand's minimal aesthetic

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
