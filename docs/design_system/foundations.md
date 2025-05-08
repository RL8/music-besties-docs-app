# Design Foundations

The foundational elements of the Music Besties design system define the basic visual language of the application. These elements include colors, typography, spacing, and effects.

## Colors

The color palette is designed to be clean, accessible, and aligned with the application's focus on music ranking.

### Primary Colors

| Token Name          | Value   | Usage                                     |
| :------------------ | :------ | :---------------------------------------- |
| `--color-bg-main`   | #f3f4f6 | Main background color                     |
| `--color-bg-white`  | #ffffff | Card and content background               |
| `--color-text-main` | #1f2937 | Primary text color                        |
| `--color-blue-primary` | #3b82f6 | Primary action buttons, focus states    |
| `--color-blue-dark` | #2563eb | Active tabs, selected states              |
| `--color-blue-light` | #eff6ff | Active tab background                     |

### Secondary Colors

| Token Name          | Value   | Usage                                     |
| :------------------ | :------ | :---------------------------------------- |
| `--color-text-secondary` | #6b7280 | Secondary text, counts, descriptions   |
| `--color-text-light` | #9ca3af | Lighter text, disabled states            |
| `--color-red`       | #dc2626 | Cancel buttons, destructive actions       |
| `--color-green`     | #10b981 | Save/confirm buttons, success states      |
| `--color-yellow`    | #fbbf24 | Star ratings                              |

### Neutral Colors

| Token Name          | Value   | Usage                                     |
| :------------------ | :------ | :---------------------------------------- |
| `--color-gray-border` | #e5e7eb | Borders, dividers                       |
| `--color-gray-light` | #f9fafb | Light backgrounds (sidebar)              |

### Era-Specific Colors

Each music era in the application has an associated emoji that serves as a visual identifier:

```javascript
// From data.js
const eraEmojis = {
    'debut': '💚',
    'fearless': '💛',
    'speaknow': '💜',
    'red': '❤️',
    '1989': '🩵',
    'reputation': '🖤',
    'lover': '🩷',
    'folklore': '🩶',
    'evermore': '🧡',
    'midnights': '💙',
    'ttpd': '🤍',
    'eras': '✨'
};
```

## Typography

The application uses a clean, modern typography system based on the Inter font family.

### Font Family

| Token Name        | Value             | Usage                                |
| :---------------- | :---------------- | :----------------------------------- |
| `--font-family-base` | 'Inter', sans-serif | Default app font                     |

### Font Sizes

| Token Name        | Value             | Usage                                |
| :---------------- | :---------------- | :----------------------------------- |
| `--font-size-xs`  | 0.75rem           | Small text, counts, metadata          |
| `--font-size-sm`  | 0.875rem          | Card titles, secondary text           |
| `--font-size-base` | 1rem             | Body text                             |
| `--font-size-lg`  | 1.125rem          | Sidebar titles                        |
| `--font-size-xl`  | 1.25rem           | Section headings                      |
| `--font-size-2xl` | 1.5rem            | Page titles                           |

### Font Weights

| Token Name        | Value             | Usage                                |
| :---------------- | :---------------- | :----------------------------------- |
| `--font-weight-normal` | 400          | Regular text                          |
| `--font-weight-medium` | 500          | Emphasized text                       |
| `--font-weight-semibold` | 600        | Headings, buttons                     |
| `--font-weight-bold` | 700            | Strong emphasis, main headings        |

### Line Heights

| Token Name        | Value             | Usage                                |
| :---------------- | :---------------- | :----------------------------------- |
| `--line-height-tight` | 1.25          | Headings                              |
| `--line-height-base` | 1.5            | Body text                             |

## Spacing

Consistent spacing helps create visual rhythm and hierarchy in the interface.

| Token Name     | Value | Usage                                  |
| :------------- | :---- | :------------------------------------- |
| `--spacing-1`  | 0.25rem | Tiny spacing, icon padding           |
| `--spacing-2`  | 0.5rem  | Small spacing, tight elements        |
| `--spacing-3`  | 0.75rem | Card padding                         |
| `--spacing-4`  | 1rem    | Standard spacing, component separation |
| `--spacing-6`  | 1.5rem  | Section spacing, modal padding       |
| `--spacing-8`  | 2rem    | Large spacing between major sections |

## Effects

Effects add depth and interactivity to the interface.

## Visual Assets

The application uses emoji characters as visual identifiers for albums. These emoji characters are used consistently throughout the application to provide visual recognition of albums without requiring image assets.

**Figure: Album Emoji Reference**

```
+----------------------------------+
| Album Emoji Reference            |
+----------------------------------+
| taylor-swift: 🤠                 |
| fearless: 💛                     |
| speak-now: 💜                    |
| red: ❤️                          |
| 1989: 🌊                         |
| reputation: 🐍                   |
| lover: 💖                        |
| folklore: 🌲                     |
| evermore: 🍂                     |
| midnights: ✨                    |
| ttpd: 🤍                         |
+----------------------------------+
```

*Comprehensive mapping between album identifiers and their corresponding emoji characters for visual representation. Maintains visual consistency across the application by standardizing the emoji usage for each album.*

### Shadows

| Token Name      | Value                         | Usage                           |
| :-------------- | :---------------------------- | :------------------------------ |
| `--shadow-sm`   | 0 1px 2px 0 rgba(0,0,0,0.05)  | Card shadows                    |
| `--shadow-md`   | 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06) | Elevated components |
| `--shadow-lg`   | 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05) | Modals, popovers |

### Border Radius

| Token Name      | Value                         | Usage                           |
| :-------------- | :---------------------------- | :------------------------------ |
| `--radius-sm`   | 0.25rem                       | Small border radius             |
| `--radius-md`   | 0.375rem                      | Medium border radius            |
| `--radius-lg`   | 0.5rem                        | Large border radius (cards, modals) |
| `--radius-full` | 9999px                        | Pill shapes, rank indicators    |

### Transitions

| Token Name      | Value                         | Usage                           |
| :-------------- | :---------------------------- | :------------------------------ |
| `--transition-fast` | 0.15s ease-in-out         | All UI transitions              |

## Iconography

The application primarily uses emoji as icons, with each music era having its own associated emoji.

```css
/* From styles.css */
.chip .chip-rank-indicator { 
    margin-right: 0.5rem; 
}
.chip-rank-indicator .emoji { 
    margin-right: 0.15rem; 
    font-size: 0.65rem; 
    line-height: 1; 
}
```

The app also uses a text-based close button (×) for the sidebar.
