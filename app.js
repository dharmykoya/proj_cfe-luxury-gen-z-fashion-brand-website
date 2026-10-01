// Mobile menu toggle and smooth scroll functionality

// Select hamburger button and mobile menu elements
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

/**
 * Toggle mobile menu visibility by toggling 'translate-x-full' class,
 * and update aria-expanded attribute on the button accordingly.
 */
const openMenu = () => {
  mobileMenu.classList.remove('translate-x-full');
  menuToggle.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
  mobileMenu.classList.add('translate-x-full');
  menuToggle.setAttribute('aria-expanded', 'false');
};

const isMenuOpen = () => menuToggle && mobileMenu && !mobileMenu.classList.contains('translate-x-full');

// Hamburger button click toggles the mobile menu
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

/**
 * Add click event listeners to all navigation links (both desktop and mobile).
 * Closes mobile menu if open and triggers smooth scroll to the target section.
 */
const allNavLinks = document.querySelectorAll('a[href^="#"]');
allNavLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Close mobile menu if open
    if (isMenuOpen()) {
      closeMenu();
    }

    // Smooth scroll to target section
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/**
 * Close mobile menu when clicking outside of it (outside both the menu panel
 * and the toggle button).
 */
document.addEventListener('click', (e) => {
  if (
    isMenuOpen() &&
    !mobileMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    closeMenu();
  }
});

/**
 * Close mobile menu when the Escape key is pressed, and return focus
 * to the toggle button for keyboard accessibility.
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen()) {
    closeMenu();
    menuToggle.focus();
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — Skeleton loader removal on image load/error
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Hide the skeleton loader associated with a gallery image once the image
 * has finished loading. Uses the [data-skeleton] attribute to locate the
 * skeleton sibling inside the same gallery item container.
 *
 * @param {HTMLImageElement} img - The gallery image element.
 */
const hideSkeleton = (img) => {
  const container = img.parentElement;
  if (!container) return;
  const skeleton = container.querySelector('[data-skeleton]');
  if (skeleton) {
    skeleton.classList.add('hidden');
  }
};

/**
 * Replace the skeleton loader with a minimal error indicator when an image
 * fails to load, preventing a blank pulsing state.
 *
 * @param {HTMLImageElement} img - The gallery image element that errored.
 */
const showSkeletonError = (img) => {
  const container = img.parentElement;
  if (!container) return;
  const skeleton = container.querySelector('[data-skeleton]');
  if (skeleton) {
    skeleton.classList.remove('animate-pulse');
    skeleton.classList.add('bg-gray-300');
    skeleton.setAttribute('aria-label', 'Image unavailable');
  }
};

// Select all images inside the gallery section
const galleryImages = document.querySelectorAll('#gallery img');

galleryImages.forEach((img) => {
  // Image already decoded and cached by the browser
  if (img.complete && img.naturalWidth > 0) {
    hideSkeleton(img);
    return;
  }

  img.addEventListener('load', () => hideSkeleton(img));
  img.addEventListener('error', () => showSkeletonError(img));
});

// Optional enhancement: IntersectionObserver for viewport-aware lazy load tracking
if ('IntersectionObserver' in window) {
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Trigger load for images that may have been deferred
          if (img.dataset.src && !img.src) {
            img.src = img.dataset.src;
          }
          galleryObserver.unobserve(img);
        }
      });
    },
    { rootMargin: '200px 0px', threshold: 0 }
  );

  galleryImages.forEach((img) => galleryObserver.observe(img));
}
