# Music Besties Documentation

This repository contains the documentation for the Music Besties application, a web application that helps users organize, rank, and review music albums.

## Setup

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/music-besties-docs.git
   cd music-besties-docs
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

### Local Development

To serve the documentation locally:

```
python -m mkdocs serve
```

This will start a local server at http://127.0.0.1:8000 where you can preview the documentation.

### Building the Documentation

To build the static site:

```
python -m mkdocs build
```

This will create a `site` directory with the built documentation.

## Documentation Structure

The documentation is organized into three main sections:

1. **Current State** - Documentation of the existing application
2. **Future State** - Plans and specifications for upcoming versions
3. **Design System** - Standalone design system documentation

## Contributing

To contribute to the documentation:

1. Create a new branch for your changes
2. Make your changes to the relevant Markdown files
3. Preview your changes locally using `mkdocs serve`
4. Submit a pull request with your changes

## License

This documentation is provided for internal use only.
