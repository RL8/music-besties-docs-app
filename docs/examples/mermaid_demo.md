# Mermaid Diagram Examples

This page demonstrates various types of Mermaid diagrams that can be used in the Music Besties documentation.

## Application Architecture

This flowchart shows the high-level architecture of the Music Besties application:

```mermaid
graph TD
    A[Music Besties App] --> B[Dashboard Screen]
    A --> C[Edit Rankings Screen]
    B --> D[Album Cards]
    B --> E[Navigation Sidebar]
    C --> F[Song Rankings]
    C --> G[Review Section]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:1px
    style C fill:#bbf,stroke:#333,stroke-width:1px
```

## Component Hierarchy

This diagram shows the component hierarchy:

```mermaid
graph TD
    App --> LeftSidebar
    App --> MainContent
    LeftSidebar --> SidebarPanel
    LeftSidebar --> NavigationLinks
    MainContent --> EraRankings
    MainContent --> SongRankings
    MainContent --> ReviewSection
```

## Data Flow

This sequence diagram shows the data flow when a user updates a ranking:

```mermaid
sequenceDiagram
    participant User
    participant UI as User Interface
    participant State as App State
    participant Storage as Local Storage
    
    User->>UI: Drags song to new position
    UI->>State: Update song ranking
    State->>UI: Re-render with new order
    State->>Storage: Save updated rankings
    Storage-->>State: Confirm save complete
```

## State Transitions

This state diagram shows the possible states of a review:

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Published: User clicks Save
    Draft --> Discarded: User clicks Cancel
    Published --> Editing: User clicks Edit
    Editing --> Published: User clicks Update
    Editing --> Discarded: User clicks Delete
    Discarded --> [*]
```

## Class Diagram

This class diagram shows the data model:

```mermaid
classDiagram
    class Album {
        +string id
        +string name
        +string emoji
        +Song[] songs
        +int rating
        +string review
    }
    
    class Song {
        +string id
        +string name
        +int ranking
        +int rating
        +string review
    }
    
    Album "1" --> "*" Song: contains
```

## Comparison with ASCII Diagrams

### ASCII Version (Current)
```
+-----------------------------------------------------+
|                   Music Besties                     |
+-----------------------------------------------------+
|                                                     |
|  +-------------------+    +---------------------+   |
|  |                   |    |                     |   |
|  |    Dashboard      |<-->|    Edit Rankings    |   |
|  |     Screen        |    |       Screen        |   |
|  |                   |    |                     |   |
|  +-------------------+    +---------------------+   |
```

### Mermaid Version (Proposed)
```mermaid
graph LR
    subgraph "Music Besties"
        A[Dashboard Screen] <--> B[Edit Rankings Screen]
    end
    
    style A fill:#bbf,stroke:#333,stroke-width:1px
    style B fill:#bbf,stroke:#333,stroke-width:1px
```

## Benefits of Mermaid Diagrams

1. **Maintainability**: Text-based format is easier to update than ASCII art
2. **Readability**: Cleaner visual presentation with styling options
3. **Consistency**: Standardized format across all diagrams
4. **Interactivity**: Some diagrams support zooming and panning
5. **Version Control**: Changes to diagrams can be tracked in Git
