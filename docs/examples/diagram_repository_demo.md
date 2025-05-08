# Diagram Repository Demo

This page demonstrates how to include diagrams from the central diagram repository.

## Including ASCII Diagrams

You can include ASCII diagrams from the central repository using the markdown-include syntax:

### Application Architecture (ASCII)

{!_diagrams/ascii/architecture/application_architecture.md!}

*Visual representation of the component relationships showing how the Dashboard and Edit Rankings screens interact with supporting panels.*

## Including Mermaid Diagrams

Similarly, you can include Mermaid diagrams from the central repository:

### Application Architecture (Mermaid)

{!_diagrams/mermaid/architecture/application_architecture.md!}

*Enhanced diagram showing the component relationships with additional context and styling.*

## Benefits of the Central Repository Approach

1. **Single Source of Truth**: Each diagram exists in only one place, making updates easier and more consistent.

2. **Separation of Content and Presentation**: Diagrams are stored separately from the documentation text, making both easier to maintain.

3. **Reusability**: The same diagram can be included in multiple documentation pages without duplication.

4. **Version Control**: Changes to diagrams can be tracked independently of documentation content changes.

5. **Easier Conversion**: When converting from ASCII to Mermaid, you only need to update one file, and all references will use the new version.

## How to Use in Your Documentation

To include a diagram in any documentation page, use the following syntax:

```markdown
{!_diagrams/ascii/architecture/application_architecture.md!}

*Your caption here*
```

Or for Mermaid diagrams:

```markdown
{!_diagrams/mermaid/architecture/application_architecture.md!}

*Your caption here*
```

## Recommended Workflow for Diagram Conversion

1. Create the ASCII diagram in `_diagrams/ascii/[category]/[name].md`
2. Create the Mermaid equivalent in `_diagrams/mermaid/[category]/[name].md`
3. Update documentation pages to use the preferred version

This approach allows you to gradually convert diagrams while maintaining backward compatibility.
