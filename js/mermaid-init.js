// Initialize Mermaid with consistent styling and enhanced diagram-specific themes
document.addEventListener('DOMContentLoaded', function() {
  mermaid.initialize({
    theme: 'neutral',
    themeVariables: {
      // Common styling for all diagrams
      primaryColor: '#3b82f6',
      primaryTextColor: '#1f2937',
      primaryBorderColor: '#3b82f6',
      lineColor: '#64748b',
      secondaryColor: '#f97316',
      tertiaryColor: '#8b5cf6',
      
      // Architecture diagram colors (flowcharts)
      flowchartMainBkg: '#f4f6f8',
      flowchartBorder: '#d1d5db',
      
      // Data structure diagram colors (class/er diagrams)
      classBkg: '#eef2ff',
      classBorder: '#6366f1',
      erBkg: '#f0f9ff',
      erBorder: '#0ea5e9',
      
      // User flow diagram colors (sequence diagrams)
      sequenceBkg: '#f0fdf4',
      sequenceNumberBkg: '#10b981',
      sequenceBoxBkgColor: '#ecfdf5',
      sequenceBoxBorderColor: '#10b981',
      
      // Text and font settings
      fontSize: '14px',
      noteTextColor: '#1e293b'
    },
    flowchart: {
      curve: 'basis',
      htmlLabels: true,
      padding: 15
    },
    sequence: {
      actorMargin: 50,
      mirrorActors: false,
      bottomMarginAdj: 10,
      useMaxWidth: true
    },
    er: {
      layoutDirection: 'TB',
      entityPadding: 15
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
