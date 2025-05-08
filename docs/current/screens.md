# Core Screens

The Music Besties application consists of two primary screens that provide the main functionality of the application.

## Dashboard Screen

The Dashboard Screen is the main entry point of the application. It displays a grid of album cards, each representing an album that the user can interact with.

**Figure: Dashboard Screen Layout**

```
+-----------------------------------------------------+
|                   Music Besties                     |
+-----------------------------------------------------+
|                                                     |
|  +---------------+  +---------------+  +----------+ |
|  | 🤠            |  | 💛            |  | 💜       | |
|  | Taylor Swift  |  | Fearless      |  | Speak Now| |
|  | ★★★★☆        |  | ★★★★★        |  | ★★★☆☆    | |
|  | 5/13 songs    |  | 8/19 songs    |  | 3/16 songs| |
|  +---------------+  +---------------+  +----------+ |
|                                                     |
|  +---------------+  +---------------+  +----------+ |
|  | ❤️            |  | 🌊            |  | 🐍       | |
|  | Red           |  | 1989          |  | Reputation| |
|  | ★★★★★        |  | ★★★★☆        |  | ★★★★☆    | |
|  | 12/30 songs   |  | 7/16 songs    |  | 6/15 songs| |
|  +---------------+  +---------------+  +----------+ |
|                                                     |
+-----------------------------------------------------+
```

*Detailed visualization of the responsive grid interface showing album cards with ratings, selection counts, and emoji indicators. Provides a reference for the expected visual arrangement and information hierarchy of the main screen.*

Key features of the Dashboard Screen include:

- Grid layout of album cards
- Visual representation of albums with emoji icons
- Rating indicators for each album
- Selection count indicators showing how many songs are selected from each album
- Navigation to the Edit Rankings Screen

The Dashboard Screen is designed to provide a quick overview of the user's music collection and allow easy access to detailed information about each album.

## 3.2. Edit Rankings Screen

The Edit Rankings Screen allows users to create and manage rankings for albums and songs. It provides a tabbed interface for different ranking categories.

**Figure 3.2.10: Edit Rankings Screen Layout**

```
+-----------------------------------------------------+
|                   Music Besties                     |
+-----------------------------------------------------+
|                                                     |
| | Albums | Red | 1989 | Folklore | Evermore |       |
+-----------------------------------------------------+
|                                                     |
| Ranked Items:                                       |
|                                                     |
| +---------------+  +---------------+  +----------+  |
| | 1             |  | 2             |  | 3        |  |
| | All Too Well  |  | State of Grace|  | 22       |  |
| +---------------+  +---------------+  +----------+  |
|                                                     |
| Unranked Items:                                     |
|                                                     |
| +---------------+  +---------------+  +----------+  |
| | Red           |  | I Knew You    |  | We Are   |  |
| |               |  | Were Trouble  |  | Never... |  |
| +---------------+  +---------------+  +----------+  |
|                                                     |
| +---------------+  +---------------+                |
| | Begin Again   |  | Holy Ground   |                |
| |               |  |               |                |
| +---------------+  +---------------+                |
|                                                     |
+-----------------------------------------------------+
```

*Complete interface mockup showing the tab navigation, ranked items with position indicators, and unranked items section. Illustrates the expected UI state during the ranking process, helping developers understand the visual feedback requirements.*

Key features of the Edit Rankings Screen include:

- Tabbed navigation for different ranking categories
- Drag-and-drop interface for ranking items
- Clear visual distinction between ranked and unranked items
- Ability to add and remove items from rankings
- Save functionality to persist changes

The Edit Rankings Screen is designed to be intuitive and easy to use, allowing users to quickly create and modify their rankings.