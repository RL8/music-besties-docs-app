document.addEventListener('DOMContentLoaded', function() {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      curve: 'basis'
    },
    er: {
      useMaxWidth: false
    },
    sequence: {
      useMaxWidth: false,
      showSequenceNumbers: false,
      actorMargin: 80,
      boxMargin: 10,
      mirrorActors: false,
      bottomMarginAdj: 10,
      messageMargin: 35
    },
    classDiagram: {
      useMaxWidth: false,
      diagramPadding: 8,
      htmlLabels: true,
      curve: 'linear'
    }
  });
});
