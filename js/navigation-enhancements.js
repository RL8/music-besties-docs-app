document.addEventListener('DOMContentLoaded', function() {
  // Add previous/next navigation at the bottom of content
  addPrevNextNavigation();
  
  // Enhance breadcrumb navigation
  enhanceBreadcrumbs();
});

function addPrevNextNavigation() {
  const content = document.querySelector('.md-content__inner');
  if (!content) return;
  
  // Find all navigation links
  const navLinks = Array.from(document.querySelectorAll('.md-nav__link'));
  const activeLink = document.querySelector('.md-nav__link--active');
  
  if (!activeLink) return;
  
  // Find the index of the active link
  const activeIndex = navLinks.findIndex(link => link === activeLink);
  if (activeIndex === -1) return;
  
  // Get previous and next links
  const prevLink = activeIndex > 0 ? navLinks[activeIndex - 1] : null;
  const nextLink = activeIndex < navLinks.length - 1 ? navLinks[activeIndex + 1] : null;
  
  // Create navigation footer
  const navFooter = document.createElement('div');
  navFooter.className = 'nav-footer';
  
  // Add previous link if available
  if (prevLink) {
    const prev = document.createElement('a');
    prev.href = prevLink.href;
    prev.className = 'prev';
    prev.textContent = prevLink.textContent.trim();
    navFooter.appendChild(prev);
  } else {
    // Add empty div to maintain layout
    navFooter.appendChild(document.createElement('div'));
  }
  
  // Add next link if available
  if (nextLink) {
    const next = document.createElement('a');
    next.href = nextLink.href;
    next.className = 'next';
    next.textContent = nextLink.textContent.trim();
    navFooter.appendChild(next);
  } else {
    // Add empty div to maintain layout
    navFooter.appendChild(document.createElement('div'));
  }
  
  // Append navigation footer to content
  content.appendChild(navFooter);
}

function enhanceBreadcrumbs() {
  // Get the title element that contains the current page title
  const titleElement = document.querySelector('.md-header__topic');
  if (!titleElement) return;
  
  // Get all navigation items
  const navItems = Array.from(document.querySelectorAll('.md-nav__item'));
  const activeItem = document.querySelector('.md-nav__link--active');
  if (!activeItem) return;
  
  // Build breadcrumb path
  const breadcrumbs = [];
  let currentElement = activeItem;
  
  // Add current page
  breadcrumbs.push({
    text: activeItem.textContent.trim(),
    href: activeItem.href
  });
  
  // Find parent sections
  while (currentElement) {
    // Look for parent nav section
    const parentNav = currentElement.closest('.md-nav');
    if (!parentNav) break;
    
    // Find the parent item that contains this nav
    const parentItem = parentNav.closest('.md-nav__item');
    if (!parentItem) break;
    
    // Get the link in the parent item
    const parentLink = parentItem.querySelector(':scope > .md-nav__link');
    if (!parentLink) break;
    
    // Add to breadcrumbs
    breadcrumbs.unshift({
      text: parentLink.textContent.trim(),
      href: parentLink.href
    });
    
    // Move up to the parent
    currentElement = parentItem;
  }
  
  // Add home link
  breadcrumbs.unshift({
    text: 'Home',
    href: document.querySelector('.md-header__button.md-logo').href
  });
  
  // Clear existing content
  titleElement.innerHTML = '';
  
  // Add breadcrumb elements
  breadcrumbs.forEach((crumb, index) => {
    const span = document.createElement('span');
    span.className = 'md-ellipsis';
    
    const link = document.createElement('a');
    link.href = crumb.href;
    link.textContent = crumb.text;
    
    span.appendChild(link);
    titleElement.appendChild(span);
  });
}
