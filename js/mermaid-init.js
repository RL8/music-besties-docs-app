// Initialize Mermaid with consistent styling
document.addEventListener('DOMContentLoaded', function() {
  mermaid.initialize({
    theme: 'neutral',
    themeVariables: {
      primaryColor: '#5D87E1',
      primaryTextColor: '#fff',
      primaryBorderColor: '#5D87E1',
      lineColor: '#5D87E1',
      secondaryColor: '#FF8A65',
      tertiaryColor: '#82B1FF'
    },
    flowchart: {
      curve: 'basis',
      htmlLabels: true
    },
    sequence: {
      actorMargin: 50,
      mirrorActors: false
    },
    fontFamily: 'Roboto, sans-serif'
  });
});

// Add responsive support
window.addEventListener('resize', function() {
  if (document.querySelectorAll('.mermaid').length > 0) {
    mermaid.init(undefined, '.mermaid');
  }
});

// Dark mode support
function updateMermaidTheme(isDark) {
  const theme = isDark ? 'dark' : 'neutral';
  const primaryColor = isDark ? '#82B1FF' : '#5D87E1';
  const backgroundColor = isDark ? '#2E303E' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#333333';
  
  mermaid.initialize({
    theme: theme,
    themeVariables: {
      primaryColor: primaryColor,
      primaryTextColor: textColor,
      primaryBorderColor: primaryColor,
      lineColor: primaryColor,
      secondaryColor: '#FF8A65',
      tertiaryColor: isDark ? '#5D87E1' : '#82B1FF',
      backgroundColor: backgroundColor
    }
  });
}

// Check for dark mode and update accordingly
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
updateMermaidTheme(darkModeMediaQuery.matches);
darkModeMediaQuery.addEventListener('change', e => {
  updateMermaidTheme(e.matches);
  mermaid.init(undefined, '.mermaid');
});

// Add interactive features
document.addEventListener('click', function(e) {
  if (e.target && e.target.closest('.mermaid')) {
    const diagram = e.target.closest('.mermaid');
    const nodes = diagram.querySelectorAll('.node');
    
    // Toggle focus on clicked node
    if (e.target.closest('.node')) {
      const clickedNode = e.target.closest('.node');
      nodes.forEach(node => {
        if (node === clickedNode) {
          node.classList.toggle('focused');
        } else {
          node.classList.remove('focused');
        }
      });
    }
  }
});

// Add CSS for focused nodes
const style = document.createElement('style');
style.textContent = `
  .mermaid .node.focused rect, 
  .mermaid .node.focused circle, 
  .mermaid .node.focused ellipse, 
  .mermaid .node.focused polygon {
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.3));
    transform: scale(1.05);
    transition: all 0.2s ease;
  }
`;
document.head.appendChild(style);
