# Responsive Design Principles

This section documents how the Music Besties application adapts to different screen sizes and devices. The responsive design ensures a consistent user experience across various devices.

## Breakpoints

The application uses Tailwind CSS breakpoints to define responsive behavior.

| Breakpoint Name | Width (px) | Target Devices                    |
| :-------------- | :--------- | :-------------------------------- |
| Default         | 0-639      | Mobile phones                     |
| sm              | 640+       | Larger phones, small tablets      |

```html
<!-- From index.html -->
<div id="dashboard-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
```

## Component Adaptations

### Dashboard Grid

The dashboard grid adapts to different screen sizes by changing the number of columns.

```html
<!-- From index.html -->
<div id="dashboard-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
```

- 2 columns on mobile devices (default)
- 3 columns on larger screens (sm breakpoint and above)
- Gap spacing increases from 0.75rem to 1rem on larger screens

### Container Padding

Container padding increases on larger screens to provide more breathing room.

```html
<!-- From index.html -->
<div id="screen-dashboard" v-show="currentScreen === 'dashboard'" class="p-4 sm:p-6">
```

- 1rem padding (p-4) on mobile devices
- 1.5rem padding (p-6) on larger screens

### Sidebar Width

The sidebar has a responsive width that adapts to the screen size.

```css
/* From styles.css */
#view-sidebar { 
    width: 85%; 
    max-width: 350px; 
}
```

- 85% width on smaller screens
- Maximum width of 350px on larger screens

### Tab Spacing

The spacing between tabs increases on larger screens.

```html
<!-- From index.html -->
<nav id="tab-buttons" class="-mb-px flex space-x-1 sm:space-x-2 px-4" aria-label="Tabs"></nav>
```

- 0.25rem spacing (space-x-1) on mobile devices
- 0.5rem spacing (space-x-2) on larger screens

## Layout Shifts

The application handles layout shifts between breakpoints in a way that maintains usability and visual consistency.

### Consistent Component Sizing

Components maintain consistent sizing relative to their containers across breakpoints.

```css
/* From styles.css */
.dashboard-grid-card { 
    min-height: 95px; 
}
```

- Fixed minimum height ensures consistent card sizing
- Percentage-based widths adapt to container size

### Overflow Handling

The application handles overflow appropriately to prevent content from breaking the layout.

```html
<!-- From index.html -->
<div class="border-b border-gray-200 bg-white overflow-x-auto sticky top-[61px] z-10">
```

- Horizontal scrolling for tab navigation on smaller screens
- Text truncation for long content

## Touch Targets

The application ensures that interactive elements are large enough for touch interaction.

```css
/* From styles.css */
.dashboard-grid-card { 
    min-height: 95px; 
    cursor: pointer; 
}
```

- Cards have adequate size for touch interaction
- Buttons have appropriate padding for touch targets
- The no-hover-highlight class removes default tap highlights on mobile

```css
/* From styles.css */
.no-hover-highlight { 
    -webkit-tap-highlight-color: transparent; 
}
```

## Viewport Settings

The application uses appropriate viewport settings to ensure proper rendering on mobile devices.

```html
<!-- From index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Width set to device width
- Initial scale set to 1.0
- No user-scalable restrictions

## Testing Approach

When testing responsive behavior, consider the following:

- Test on actual devices when possible, not just browser resizing
- Test both portrait and landscape orientations
- Verify that touch interactions work as expected
- Check that text remains readable at all screen sizes
- Ensure that no content is cut off or inaccessible
- Verify that the application performs well on lower-end devices
