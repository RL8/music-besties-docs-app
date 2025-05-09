document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers to section headers
  const sectionHeaders = document.querySelectorAll('.md-nav__item--nested > .md-nav__link');
  
  sectionHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentNode;
      parent.classList.toggle('md-nav__item--open');
    });
  });

  // Add a toggle all sections button
  const nav = document.querySelector('.md-nav--primary > .md-nav__list');
  if (nav) {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'md-button md-button--primary section-toggle-button';
    toggleButton.textContent = 'Toggle All Sections';
    toggleButton.style.margin = '10px 0';
    toggleButton.style.width = '100%';
    
    toggleButton.addEventListener('click', function() {
      const allSections = document.querySelectorAll('.md-nav__item--nested');
      const anyOpen = Array.from(allSections).some(section => section.classList.contains('md-nav__item--open'));
      
      // If any sections are open, close all; otherwise, open all
      allSections.forEach(section => {
        if (anyOpen) {
          section.classList.remove('md-nav__item--open');
        } else {
          section.classList.add('md-nav__item--open');
        }
      });
    });
    
    // Insert at the top of the navigation
    nav.parentNode.insertBefore(toggleButton, nav);
  }
});
