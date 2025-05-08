/**
 * Enhanced Navigation for MkDocs
 * Features:
 * - Collapsible sections that persist between page loads
 * - Enhanced visual indicators for current section
 * - Breadcrumbs at the top of each page
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation enhancements
  enhanceNavigation();
  addBreadcrumbs();
});

/**
 * Enhance the navigation with collapsible sections and visual indicators
 */
function enhanceNavigation() {
  // Get all nav items with children
  const navItems = document.querySelectorAll('.md-nav__item--nested');
  
  // Add toggle functionality and restore saved state
  navItems.forEach(item => {
    const label = item.querySelector('.md-nav__link');
    const list = item.querySelector('.md-nav');
    
    if (label && list) {
      // Add custom styling to parent items
      label.classList.add('nav-parent');
      
      // Add toggle indicators
      const indicator = document.createElement('span');
      indicator.classList.add('nav-toggle-icon');
      indicator.innerHTML = '►';
      label.prepend(indicator);
      
      // Get section ID for localStorage
      const sectionId = getSectionId(label.textContent.trim());
      
      // Check if this section should be expanded based on:
      // 1. Saved state in localStorage
      // 2. If it contains the current page
      const isCurrentSection = list.querySelector('.md-nav__link--active') !== null;
      const savedState = localStorage.getItem(`nav-${sectionId}`);
      const shouldBeExpanded = (savedState === 'expanded' || (isCurrentSection && savedState !== 'collapsed'));
      
      // Set initial state
      if (shouldBeExpanded) {
        item.classList.add('md-nav__item--expanded');
        list.style.display = 'block';
        indicator.innerHTML = '▼';
      } else {
        list.style.display = 'none';
      }
      
      // Add click event
      label.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isExpanded = item.classList.contains('md-nav__item--expanded');
        
        if (isExpanded) {
          // Collapse
          item.classList.remove('md-nav__item--expanded');
          list.style.display = 'none';
          indicator.innerHTML = '►';
          localStorage.setItem(`nav-${sectionId}`, 'collapsed');
        } else {
          // Expand
          item.classList.add('md-nav__item--expanded');
          list.style.display = 'block';
          indicator.innerHTML = '▼';
          localStorage.setItem(`nav-${sectionId}`, 'expanded');
        }
      });
    }
  });
  
  // Enhance current page indicator
  const currentLink = document.querySelector('.md-nav__link--active');
  if (currentLink) {
    currentLink.classList.add('current-page');
    
    // Scroll to the current link in the navigation
    setTimeout(() => {
      currentLink.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 300);
  }
}

/**
 * Add breadcrumbs at the top of the content area
 */
function addBreadcrumbs() {
  const contentArea = document.querySelector('.md-content__inner');
  const currentLink = document.querySelector('.md-nav__link--active');
  
  if (contentArea && currentLink) {
    // Create breadcrumbs container
    const breadcrumbs = document.createElement('div');
    breadcrumbs.classList.add('docs-breadcrumbs');
    
    // Add Home link
    let breadcrumbsHTML = '<a href="/">Home</a>';
    
    // Build breadcrumb path
    const path = [];
    let parent = currentLink.closest('.md-nav__list');
    
    // Get parent sections
    while (parent) {
      const parentItem = parent.closest('.md-nav__item--nested');
      if (parentItem) {
        const parentLink = parentItem.querySelector('.md-nav__link');
        if (parentLink) {
          const text = parentLink.textContent.trim();
          const href = parentLink.getAttribute('href') || '#';
          path.unshift({ text, href });
        }
      }
      parent = parent.parentElement.closest('.md-nav__list');
    }
    
    // Add parent sections to breadcrumbs
    path.forEach(item => {
      breadcrumbsHTML += ` > <a href="${item.href}">${item.text}</a>`;
    });
    
    // Add current page
    breadcrumbsHTML += ` > <span>${currentLink.textContent.trim()}</span>`;
    
    // Set breadcrumbs HTML
    breadcrumbs.innerHTML = breadcrumbsHTML;
    
    // Insert breadcrumbs at the top of the content
    const firstChild = contentArea.firstChild;
    contentArea.insertBefore(breadcrumbs, firstChild);
  }
}

/**
 * Get a clean section ID for localStorage
 */
function getSectionId(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '-');
}
