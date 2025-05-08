# Layout Patterns

This section documents the common layout patterns used in the Music Besties application. These patterns define how components are arranged and how the application structure is organized.

## Grid System

The application uses a responsive grid system based on Tailwind CSS.

```html
<!-- From index.html -->
<div id="dashboard-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
```

### Key Characteristics

- Dashboard grid uses 2 columns on mobile, 3 columns on larger screens
- Gap spacing of 0.75rem (mobile) to 1rem (desktop)
- Responsive breakpoints follow Tailwind's default system

## Common Layout Structures

### App Container

The main application container provides a consistent frame for the application content.

```html
<!-- From index.html -->
<div class="max-w-xl mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden">
```

- Maximum width of 36rem (max-w-xl)
- Centered with auto margins
- White background
- Full minimum height of the viewport
- Shadow for elevation
- Relative positioning for absolute children

### Screen Layout

Each screen in the application follows a consistent layout pattern.

```html
<!-- From index.html - Dashboard Screen -->
<div id="screen-dashboard" v-show="currentScreen === 'dashboard'" class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">My Rankings</h1>
        <button id="edit-rankings-btn" @click="showScreen('edit')" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow active:bg-blue-700 transition-colors text-sm no-hover-highlight">
            Edit
        </button>
    </div>
    <!-- Content -->
</div>
```

- Padding: 1rem (p-4) on mobile, 1.5rem (p-6) on desktop
- Header with title and action button
- Content area below header

### Header Layout

Headers use a consistent layout pattern across the application.

```html
<!-- From index.html - Edit Screen Header -->
<div class="flex justify-between items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
    <button id="cancel-edit-btn" @click="showScreen('dashboard')" class="text-red-600 font-medium px-3 py-1 rounded active:bg-red-100 transition-colors no-hover-highlight">Cancel</button>
    <h2 class="text-lg font-semibold text-gray-700">Edit Rankings</h2>
    <button id="save-edit-btn" @click="showSaveConfirmModal" class="bg-green-500 text-white font-semibold px-4 py-1 rounded-md shadow active:bg-green-700 transition-colors no-hover-highlight">Save</button>
</div>
```

- Flex layout with space-between for title and action buttons
- Centered alignment of items
- Border bottom for visual separation
- Sticky positioning for scrolling content

### Tab Layout

The tab layout pattern is used for switching between related content.

```html
<!-- From index.html - Tab Layout -->
<div class="border-b border-gray-200 bg-white overflow-x-auto sticky top-[61px] z-10">
    <nav id="tab-buttons" class="-mb-px flex space-x-1 sm:space-x-2 px-4" aria-label="Tabs"></nav>
</div>
<div id="tab-panels" class="flex-grow overflow-y-auto p-4 sm:p-6"></div>
```

- Horizontal scrolling tabs with panels below
- Sticky positioning for tab navigation
- Overflow handling for scrollable content
- Consistent spacing between tabs

### Sidebar Layout

The sidebar layout pattern is used for detailed views and interactions.

```html
<!-- From index.html - Sidebar Layout -->
<div id="view-sidebar" :class="{'visible': isSidebarVisible}">
    <div class="sidebar-header">
        <div class="sidebar-header-top-row">
            <div id="sidebar-title-container" class="sidebar-title-container"></div>
            <button id="sidebar-close-btn" @click="closeSidebar" class="sidebar-close-btn no-hover-highlight active:bg-gray-200" aria-label="Close sidebar">&times;</button>
        </div>
    </div>
    <div id="sidebar-content" class="sidebar-content">
        <div id="sidebar-tab-nav" class="sidebar-tab-nav">
            <!-- Tab buttons -->
        </div>
        <div id="sidebar-tab-panels" class="flex-grow relative">
            <!-- Tab panels -->
        </div>
    </div>
</div>
```

- Fixed position panel with header and scrollable content
- Header with title and close button
- Tab navigation for different views
- Scrollable content area

## Spacing Application

The application uses consistent spacing to create visual hierarchy and rhythm.

### Margins Between Sections

```html
<!-- From index.html -->
<div class="flex justify-between items-center mb-6">
```

- Margins between sections: 1.5rem (mb-6)
- Consistent bottom margins for separation between content blocks

### Padding for Containers

```html
<!-- From index.html -->
<div id="screen-dashboard" v-show="currentScreen === 'dashboard'" class="p-4 sm:p-6">
```

- Padding for containers: 1rem (p-4) on mobile, 1.5rem (p-6) on desktop
- Consistent padding across different screen sizes

### Gap Between Grid Items

```html
<!-- From index.html -->
<div id="dashboard-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
```

- Gap between grid items: 0.75rem (gap-3) on mobile, 1rem (gap-4) on desktop
- Responsive gap sizing for different screen sizes

## Component Composition

### Cards in Grid

```html
<!-- Dashboard grid with cards -->
<div id="dashboard-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"></div>
```

- Cards are arranged in a responsive grid
- Each card has consistent sizing and spacing
- Grid adapts to different screen sizes

### Tabs with Panels

```html
<!-- Tab system -->
<div class="border-b border-gray-200 bg-white overflow-x-auto sticky top-[61px] z-10">
    <nav id="tab-buttons" class="-mb-px flex space-x-1 sm:space-x-2 px-4" aria-label="Tabs"></nav>
</div>
<div id="tab-panels" class="flex-grow overflow-y-auto p-4 sm:p-6"></div>
```

- Tab buttons are linked to corresponding panels
- Only one panel is visible at a time
- Tabs are horizontally scrollable on smaller screens

### Modal Composition

```html
<!-- Modal structure -->
<div id="save-confirm-modal" class="modal-overlay" :class="{'visible': isSaveModalVisible}">
    <div class="modal">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Confirm Save</h3>
        <p class="text-gray-600 mb-6">Are you sure you want to save these rankings?</p>
        <div class="flex justify-end space-x-3">
            <button id="cancel-save-modal-btn" @click="hideSaveConfirmModal" class="px-4 py-2 rounded-md text-gray-700 bg-gray-100 active:bg-gray-300 transition-colors no-hover-highlight">Cancel</button>
            <button id="confirm-save-modal-btn" @click="saveAndExit" class="px-4 py-2 rounded-md bg-green-500 text-white active:bg-green-700 transition-colors shadow no-hover-highlight">Confirm Save</button>
        </div>
    </div>
</div>
```

- Modal overlay with centered modal dialog
- Modal includes title, message, and action buttons
- Buttons are aligned to the right with consistent spacing
