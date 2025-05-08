# Diagram Comparisons

This page provides side-by-side comparisons of ASCII diagrams and their enhanced Mermaid equivalents for the Music Besties documentation.

## 1. Application Architecture

### Current ASCII Version

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
|           |                         |               |
|           v                         v               |
|  +-------------------+    +---------------------+   |
|  |                   |    |                     |   |
|  |  Album Sidebar    |    |  Confirmation       |   |
|  |     Panel         |    |     Modal           |   |
|  |                   |    |                     |   |
|  +-------------------+    +---------------------+   |
|                                                     |
+-----------------------------------------------------+
```

### Enhanced Mermaid Version

```mermaid
flowchart TD
    subgraph MusicBesties["Music Besties Application"]
        Dashboard["Dashboard Screen\n(Main application view)"] <--"Navigate between\nscreens"--> EditRankings["Edit Rankings Screen\n(Drag & drop interface)"];
        
        Dashboard -->|"View album\ndetails"| AlbumSidebar["Album Sidebar Panel\n(Song lists, ratings, reviews)"];
        EditRankings -->|"Confirm\nactions"| ConfirmationModal["Confirmation Modal\n(Save/discard changes)"];
        
        classDef screens fill:#f9f,stroke:#333,stroke-width:2px;
        classDef components fill:#bbf,stroke:#333,stroke-width:1px;
        
        class Dashboard,EditRankings screens;
        class AlbumSidebar,ConfirmationModal components;
    end
    
    %% Add tooltips for additional context
    click Dashboard "#" "Primary view for album collection"
    click EditRankings "#" "Interface for ranking songs"
    click AlbumSidebar "#" "Displays detailed album information"
    click ConfirmationModal "#" "Prevents accidental data loss"
```

**Enhancements:**
- Added descriptive labels to each component
- Color-coded primary screens vs. supporting components
- Added relationship descriptions on connection lines
- Included tooltips for additional context
- Used subgraph to clearly define application boundary

## 2. Component Hierarchy

### Current ASCII Version

```
App.vue
  |
  |--- DashboardCard.vue (Multiple instances in grid)
  |
  |--- EditRankingsTabs.vue
  |      |
  |      |--- DraggableItem.vue (Multiple instances)
  |
  |--- SidebarPanel.vue
  |
  |--- ModalDialog.vue
```

### Enhanced Mermaid Version

```mermaid
flowchart TD
    App["App.vue\n(Root component)"] --> Dashboard["DashboardCard.vue\n(Multiple instances in grid)"];
    App --> EditRankings["EditRankingsTabs.vue\n(Ranking interface)"];
    App --> Sidebar["SidebarPanel.vue\n(Sliding information panel)"];
    App --> Modal["ModalDialog.vue\n(Reusable confirmation dialogs)"];
    
    EditRankings --> DraggableItem["DraggableItem.vue\n(Multiple draggable instances)"];
    
    %% Add styling for component types
    classDef root fill:#f96,stroke:#333,stroke-width:4px;
    classDef container fill:#9cf,stroke:#333,stroke-width:2px;
    classDef item fill:#cfc,stroke:#333,stroke-width:1px;
    
    %% Apply classes to nodes
    class App root;
    class Dashboard,EditRankings,Sidebar,Modal container;
    class DraggableItem item;
    
    %% Add annotations
    App:::root -. "Manages routing\nand global state" .-> Dashboard;
    App:::root -. "Handles user\ninteractions" .-> EditRankings;
    EditRankings -. "Creates multiple\ninstances dynamically" .-> DraggableItem;
```

**Enhancements:**
- Added component responsibilities in each node
- Used different styles to indicate component hierarchy levels
- Added annotations explaining relationships between components
- Included styling to distinguish between container components and leaf components

## 3. Data Structure Model

### Current ASCII Version

```
  +-------------------+
  |    Album Object   |
  +-------------------+
  | - id              |
  | - name            |
  | - emoji           |
  | - songs[]         |
  +-------------------+
          |
          v
  +-------------------+     +-------------------+
  |  User Selections  |     |   User Reviews    |
  +-------------------+     +-------------------+
  | - albumId         |     | - albumId         |
  | - selectedSongs[] |     | - rating          |
  | - rankOrder[]     |     | - comment         |
  +-------------------+     | - timestamp       |
                            +-------------------+
```

### Enhanced Mermaid Version

```mermaid
classDiagram
    class AlbumObject {
        <<Core Data>>
        String id
        String name
        String emoji
        Array~String~ songs
        +getSongCount() int
        +getFormattedTitle() String
    }
    
    class UserSelections {
        <<User Preferences>>
        String albumId
        Array~String~ selectedSongs
        Array~String~ rankOrder
        +addToRanking(songId) void
        +removeFromRanking(songId) void
        +moveInRanking(songId, newPosition) void
    }
    
    class UserReviews {
        <<User Content>>
        String albumId
        Number rating
        String comment
        DateTime timestamp
        +updateRating(newRating) void
        +updateComment(newComment) void
    }
    
    AlbumObject "1" --o "0..1" UserSelections : references >
    AlbumObject "1" --o "0..1" UserReviews : references >
    
    note for AlbumObject "Stores core album metadata\nand list of available songs"
    note for UserSelections "Manages user's song\nselections and rankings"
    note for UserReviews "Stores user ratings\nand review comments"
```

**Enhancements:**
- Added stereotypes to indicate purpose of each class
- Included data types with generics for arrays
- Added methods to show available operations
- Used proper UML notation for relationships with cardinality
- Added explanatory notes for each class
- Specified relationship direction and type (composition)

## 4. Ranking Interaction Flow

### Current ASCII Version

```
+-----------------------------------------------------+
|                                                     |
|  Step 1: Initial State                              |
|  +---------------+        +---------------+         |
|  | Ranked:       |        | Unranked:     |         |
|  | (empty)       |        | • Item A      |         |
|  |               |        | • Item B      |         |
|  |               |        | • Item C      |         |
|  +---------------+        +---------------+         |
|                                                     |
|  Step 2: User taps Item B                           |
|  +---------------+        +---------------+         |
|  | Ranked:       |        | Unranked:     |         |
|  | 1. Item B     |        | • Item A      |         |
|  |               |        | • Item C      |         |
|  |               |        |               |         |
|  +---------------+        +---------------+         |
|                                                     |
|  Step 3: User taps Item A                           |
|  +---------------+        +---------------+         |
|  | Ranked:       |        | Unranked:     |         |
|  | 1. Item B     |        | • Item C      |         |
|  | 2. Item A     |        |               |         |
|  |               |        |               |         |
|  +---------------+        +---------------+         |
|                                                     |
|  Step 4: User taps Item B again (to unrank)         |
|  +---------------+        +---------------+         |
|  | Ranked:       |        | Unranked:     |         |
|  | 1. Item A     |        | • Item B      |         |
|  |               |        | • Item C      |         |
|  |               |        |               |         |
|  +---------------+        +---------------+         |
|                                                     |
+-----------------------------------------------------+
```

### Enhanced Mermaid Version

```mermaid
sequenceDiagram
    participant User
    participant UI as Ranking Interface
    participant State as Application State
    
    Note over User,State: Step 1: Initial State
    Note over UI: Ranked: (empty)<br>Unranked: Item A, Item B, Item C
    
    User->>UI: Taps Item B
    UI->>State: toggleItemRank("B")
    State-->>UI: Update ranked/unranked lists
    Note over User,State: Step 2: After tapping Item B
    Note over UI: Ranked: 1. Item B<br>Unranked: Item A, Item C
    
    User->>UI: Taps Item A
    UI->>State: toggleItemRank("A")
    State-->>UI: Update ranked/unranked lists
    Note over User,State: Step 3: After tapping Item A
    Note over UI: Ranked: 1. Item B, 2. Item A<br>Unranked: Item C
    
    User->>UI: Taps Item B again
    UI->>State: toggleItemRank("B")
    State-->>UI: Remove from ranking, adjust positions
    Note over User,State: Step 4: After tapping Item B again
    Note over UI: Ranked: 1. Item A<br>Unranked: Item B, Item C
    
    Note over UI,State: Key behaviors:<br>1. Tapping unranked item adds to end of ranking<br>2. Tapping ranked item removes it from ranking<br>3. Remaining ranked items adjust positions automatically
```

**Enhancements:**
- Added clear participant lanes showing the interaction between User, UI, and State
- Included method calls to show the actual implementation details
- Added descriptive notes at each step to show the UI state
- Included a summary of key behaviors at the end
- Used proper sequence diagram notation for actions and responses

## 5. Data Flow Implementation

### Current ASCII Version

```
+-------------+     +-------------+     +-------------+
| User Action | --> | Vue Methods | --> | State Update|
+-------------+     +-------------+     +-------------+
      |                                        |
      v                                        v
+-------------+                        +-------------+
| UI Update   | <----------------------| LocalStorage|
+-------------+                        +-------------+
```

### Enhanced Mermaid Version

```mermaid
flowchart LR
    UserAction["User Action\n(tap, drag, input)"] -->|"Triggers"| VueMethods["Vue Methods\n(event handlers)"];
    VueMethods -->|"Commits changes to"| StateUpdate["State Update\n(reactive data)"];
    
    StateUpdate -->|"Persists data to"| LocalStorage["LocalStorage\n(browser cache)"];
    StateUpdate -->|"Reactively updates"| UIUpdate["UI Update\n(DOM changes)"];
    UserAction -->|"Observes"| UIUpdate;
    
    %% Add styling
    classDef action fill:#f96,stroke:#333,stroke-width:2px;
    classDef process fill:#9cf,stroke:#333,stroke-width:2px;
    classDef storage fill:#fd7,stroke:#333,stroke-width:2px;
    classDef display fill:#9f9,stroke:#333,stroke-width:2px;
    
    class UserAction action;
    class VueMethods,StateUpdate process;
    class LocalStorage storage;
    class UIUpdate display;
    
    %% Add method examples
    VueMethods -. "e.g., toggleItemRank(),\nsaveAndExit()" .-> StateUpdate;
    StateUpdate -. "e.g., localStorage.setItem(\n'userRankings', JSON.stringify(rankings))" .-> LocalStorage;
```

**Enhancements:**
- Added descriptive subtitles to each component
- Used color coding to distinguish different types of operations
- Added specific method examples to illustrate implementation
- Used directional labels to explain the purpose of each connection
- Added a feedback loop showing how user actions relate to UI updates

## 6. LocalStorage Structure

### Current ASCII Version

```
LocalStorage {
  "music-besties-albums": [
    {
      "id": "red",
      "name": "Red",
      "emoji": "❤️",
      "songs": ["All Too Well", "22", ...]
    },
    ...
  ],
  
  "music-besties-selections": {
    "red": {
      "selectedSongs": ["All Too Well", "22", ...],
      "rankOrder": ["All Too Well", "State of Grace", ...]
    },
    ...
  },
  
  "music-besties-reviews": {
    "red": {
      "rating": 5,
      "comment": "Amazing album!",
      "timestamp": "2025-04-15T14:30:00Z"
    },
    ...
  }
}
```

### Enhanced Mermaid Version

```mermaid
erDiagram
    LOCALSTORAGE ||--o{ ALBUM : stores
    LOCALSTORAGE ||--o{ USER_SELECTION : stores
    LOCALSTORAGE ||--o{ USER_REVIEW : stores
    
    ALBUM ||--o{ USER_SELECTION : references
    ALBUM ||--o{ USER_REVIEW : references
    
    LOCALSTORAGE {
        string key
        string value
    }
    
    ALBUM {
        string id PK
        string name
        string emoji
        array songs
    }
    
    USER_SELECTION {
        string albumId FK
        array selectedSongs
        array rankOrder
    }
    
    USER_REVIEW {
        string albumId FK
        number rating
        string comment
        datetime timestamp
    }
    
    %% Add implementation details
    LOCALSTORAGE }|..|| PERSISTENCE_LAYER : "implements"
    
    PERSISTENCE_LAYER {
        function getItem(key)
        function setItem(key_value)
        function removeItem(key)
    }
    
    %% Add key names
    ALBUM }o..|| KEY_NAMES : "stored as"
    USER_SELECTION }o..|| KEY_NAMES : "stored as"
    USER_REVIEW }o..|| KEY_NAMES : "stored as"
    
    KEY_NAMES {
        string ALBUMS "music-besties-albums"
        string SELECTIONS "music-besties-selections"
        string REVIEWS "music-besties-reviews"
    }
```

**Enhancements:**
- Used proper ER diagram notation with cardinality
- Added primary and foreign key indicators
- Included data types for all fields
- Added implementation details showing the persistence layer
- Included actual key names used in LocalStorage
- Showed relationships between different data entities
