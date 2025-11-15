# Quick Start: Compile Templates

## Step 1: Copy files to icon-cms-templates

From your `icon-cms` directory:

```bash
# Navigate to the templates repository
cd ../icon-cms-templates

# Copy the build tools
cp ../icon-cms/template-build-tools/package.json .
cp ../icon-cms/template-build-tools/compile-templates.js .
```

## Step 2: Install dependencies

```bash
npm install
```

## Step 3: Compile all SCSS files

```bash
npm run build
```

You should see output like:
```
Compiling SCSS templates in: /path/to/icon-cms-templates

Found 15 SCSS files to compile...

✓ Compiled: mdbootstrap/template-1/styles.scss -> mdbootstrap/template-1/styles.css
✓ Compiled: startbootstrap/theme-1/css/main.scss -> startbootstrap/theme-1/css/main.css
...

✓ Compiled: 15 files
```

## Step 4: Update .gitignore (if needed)

Check if `.gitignore` has `*.css` in it:

```bash
cat .gitignore | grep "\.css"
```

If it does, remove that line so the compiled CSS files are tracked:

```bash
# Edit .gitignore and remove the line that says *.css
nano .gitignore
```

## Step 5: Commit and push

```bash
git add .
git commit -m "Add compiled CSS files for all templates"
git push
```

## Done!

Your templates now have both:
- `.scss` files (for future editing)
- `.css` files (ready to use in production)

The icon-cms will use the compiled `.css` files when creating new projects.

---

## Troubleshooting

**Issue**: "Cannot find module 'sass'"
**Solution**: Run `npm install` first

**Issue**: "No SCSS files found"
**Solution**: Make sure you're running the command from the `icon-cms-templates` directory

**Issue**: Compilation errors
**Solution**: Check the error message - it will show which SCSS file has syntax errors. Fix the SCSS syntax and run again.

## Optional: Clean compiled files

If you want to remove all compiled CSS files:

```bash
npm run clean
```
