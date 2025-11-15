# Template Build Tools

This directory contains build tools for compiling SCSS templates in the `icon-cms-templates` repository.

## Setup

1. Copy these files to the root of the `icon-cms-templates` repository:
   ```bash
   cp template-build-tools/package.json ../icon-cms-templates/
   cp template-build-tools/compile-templates.js ../icon-cms-templates/
   ```

2. Install dependencies:
   ```bash
   cd ../icon-cms-templates
   npm install
   ```

## Usage

### Compile all SCSS files to CSS
```bash
npm run build
```

This will:
- Find all `*.scss` files (except partials starting with `_`)
- Compile them to CSS (compressed format)
- Output `.css` files next to the `.scss` files
- Example: `styles.scss` → `styles.css`

### Clean compiled CSS files
```bash
npm run clean
```

This removes all compiled `.css` files that have a corresponding `.scss` file.

## What happens?

- **Before compilation**: Templates contain `.scss` files
- **After compilation**: Each `.scss` file has a compiled `.css` file next to it
- **Templates will work with both**: Keep the `.scss` for future edits, use `.css` in production

## Commit strategy

After running `npm run build`:

1. Update `.gitignore` to **keep** the compiled `.css` files (remove `*.css` from gitignore if present)
2. Commit both `.scss` and compiled `.css` files
3. The CMS will use the `.css` files (pre-compiled and ready)

## Example structure

```
mdbootstrap/
├── template-1/
│   ├── index.html
│   ├── styles.scss      ← Source file (for development)
│   ├── styles.css       ← Compiled file (for production)
│   └── script.js
└── template-2/
    ├── index.html
    ├── main.scss
    └── main.css
```

## Alternative: Compile to separate dist folder

If you prefer to keep compiled files separate, modify `compile-templates.js`:

```javascript
const cssFile = scssFile
  .replace(/\.scss$/, '.css')
  .replace(/^\.\./, '../dist'); // Output to dist folder
```

Then update templates-registry.yaml to point to the `dist/` folder for each template.
