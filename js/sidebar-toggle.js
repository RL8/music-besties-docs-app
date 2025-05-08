// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create a toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'sidebar-toggle-button';
  toggleButton.textContent = 'Toggle Sections';
  toggleButton.setAttribute('title', 'Expand/Collapse All Sections');
  
  // Insert the button at the top of the sidebar
  const sidebar = document.querySelector('.md-sidebar__inner');
  if (sidebar) {
    sidebar.prepend(toggleButton);
  }
  
  // Track the state (expanded or collapsed)
  let sectionsExpanded = true;
  
  // Function to toggle all sections
  function toggleAllSections() {
    const navLists = document.querySelectorAll('.md-nav__list .md-nav__list');
    
    if (sectionsExpanded) {
      // Collapse all sections
      navLists.forEach(list => {
        list.style.display = 'none';
      });
      toggleButton.textContent = 'Expand All';
    } else {
      // Expand all sections
      navLists.forEach(list => {
        list.style.display = 'block';
      });
      toggleButton.textContent = 'Collapse All';
    }
    
    // Toggle the state
    sectionsExpanded = !sectionsExpanded;
  }
  
  // Add click event listener to the button
  toggleButton.addEventListener('click', toggleAllSections);
});
