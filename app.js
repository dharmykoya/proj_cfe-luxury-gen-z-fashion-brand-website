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
