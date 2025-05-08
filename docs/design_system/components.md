# UI Components

This section documents the core UI components used in the Music Besties application. Each component is described with its visual style, variations, and usage guidelines.

## Buttons

Buttons are interactive elements that trigger actions in the application.

### Visual Style

- Primary buttons use blue/green backgrounds with white text
- Secondary/cancel buttons use red text or gray backgrounds
- All buttons have rounded corners (border-radius: 0.375rem)
- Padding: 0.5rem 1rem (py-2 px-4) for primary, 0.25rem 0.75rem (py-1 px-3) for secondary

```css
/* From styles.css */
button:focus-visible {
    outline: 2px solid #3b82f6; 
    outline-offset: 2px; 
    border-radius: 4px;
}

button {
    transition: all 0.15s ease-in-out;
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Primary Action | Blue background (#3b82f6), white text | Main actions (Edit) |
| Confirm/Save | Green background (#10b981), white text | Save actions |
| Cancel/Destructive | Red text (#dc2626), transparent background | Cancel actions |
| Secondary | Gray background (#f3f4f6), dark text | Alternative actions |
| Active | Darker shade of the button color | When pressed |
| Focus | 2px blue outline with 2px offset | Keyboard focus |

### Usage Guidelines

- Use primary buttons for main actions (Edit, Save)
- Use secondary buttons for alternative actions
- Use text-only buttons for cancel actions
- Maintain adequate spacing between buttons
- Use clear, concise button labels

### Accessibility Considerations

- All buttons have visible focus states
- Interactive elements use the no-hover-highlight class to remove tap highlights on mobile
- Buttons use semantic HTML button elements

## Chips

Chips are compact UI elements used to display items in a list, especially for rankings.

### Visual Style

- Inline-flex display with centered alignment
- Padding: 0.25rem 0.75rem
- May include rank indicators

```css
/* From styles.css */
.chip { 
    display: inline-flex; 
    align-items: center; 
    padding: 0.25rem 0.75rem; 
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Standard | Light background with dark text | Default chip style |
| Disabled | Opacity 0.5, gray background | Non-interactive chips |
| With Rank | Includes circular rank indicator with emoji | Showing ranked items |

### Usage Guidelines

- Use chips primarily in the sidebar to display ranked items
- Include rank indicators to show position when relevant
- Keep chip content concise

## Cards

Cards are container elements used to display grouped information.

### Visual Style

- White background
- Border radius: 0.5rem
- Light shadow
- Border: 1px solid #e5e7eb
- Padding: 0.75rem

```css
/* From styles.css */
.dashboard-grid-card { 
    background-color: white; 
    border-radius: 0.5rem; 
    padding: 0.75rem; 
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); 
    border: 1px solid #e5e7eb; 
    text-align: center; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    min-height: 95px; 
    cursor: pointer; 
    position: relative; 
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Standard | White background, light shadow | Default card style |
| Selected | Highlighted state | For selected items |
| With Rank | Includes rank indicator | For ranked items |
| With Stars | Displays star ratings | For rated items |

### Usage Guidelines

- Use cards in the dashboard grid to display items
- Include title, count, rank, and star ratings as needed
- Maintain consistent card sizing within a grid

## Tabs

Tabs are navigation elements used to switch between content views.

### Visual Style

- Horizontal arrangement with spacing between tabs
- Border-bottom for active state

```css
/* From styles.css */
.tab-button.active { 
    border-color: #3b82f6; 
    background-color: #eff6ff; 
    color: #2563eb; 
    font-weight: 600; 
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Active | Blue border-bottom, blue text, light blue background | Currently selected tab |
| Inactive | Gray text, no border | Non-selected tabs |

### Usage Guidelines

- Use tabs for switching between different categories or views
- Clearly distinguish the active tab
- Keep tab labels short and descriptive

## Modal

Modals are overlay dialogs for focused interactions.

### Visual Style

- White background
- Border radius: 0.5rem
- Box shadow for elevation
- Padding: 1.5rem
- Backdrop with blur effect

```css
/* From styles.css */
.modal-overlay { 
    position: fixed; 
    inset: 0; 
    background-color: rgba(0, 0, 0, 0.6); 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    z-index: 50; 
    opacity: 0; 
    visibility: hidden; 
    backdrop-filter: blur(2px); 
}

.modal { 
    background-color: white; 
    padding: 1.5rem; 
    border-radius: 0.5rem; 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
    width: 90%; 
    max-width: 400px; 
    transform: scale(0.95); 
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Visible | Fully opaque overlay, modal at scale 1 | When modal is open |
| Hidden | Transparent overlay, modal at scale 0.95 | When modal is closed |

### Usage Guidelines

- Use modals for confirmation dialogs (save confirmation)
- Include a title, message, and action buttons
- Provide a way to dismiss the modal (cancel button)
- Limit the use of modals to important interactions

## Sidebar

The sidebar is a side panel for detailed views and interactions.

### Visual Style

- Fixed position on the right side
- Light gray background (#f9fafb)
- Box shadow for elevation
- Width: 85% (max 350px)

```css
/* From styles.css */
#view-sidebar { 
    position: fixed; 
    top: 0; 
    bottom: 0; 
    right: 0; 
    width: 85%; 
    max-width: 350px; 
    background-color: #f9fafb; 
    box-shadow: -2px 0 10px rgba(0,0,0,0.1); 
    z-index: 60; 
    transform: translateX(100%); 
    visibility: hidden; 
    display: flex; 
    flex-direction: column; 
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Visible | Transformed to x:0 | When sidebar is open |
| Hidden | Transformed to x:100% | When sidebar is closed |

### Usage Guidelines

- Use the sidebar for detailed views of selected items
- Include tabs for different views (Rankings, Review & Notes)
- Provide a close button to dismiss the sidebar

## Star Rating

The star rating component allows users to rate items.

### Visual Style

- Yellow stars (#fbbf24)
- Interactive labels with radio inputs

```css
/* From styles.css */
.star-rating label {
    transition: all 0.15s ease-in-out;
}
```

### Variations and States

| Variation | Style | Usage |
|-----------|-------|-------|
| Selected | Filled star | Rated value |
| Unselected | Empty star | Unrated value |
| Hover | Highlighted star | Interactive feedback |

### Usage Guidelines

- Use for rating items from 1-5 stars
- Include descriptive text for each star rating
- Provide visual feedback on hover and selection
