# Syntax Errors Fixed ✅

## Issue
The code had fancy curved apostrophes (') instead of straight apostrophes (') in strings, which caused JavaScript syntax errors.

## Files Fixed

### 1. FAQ.tsx
- Fixed: `don't` → `don\'t`
- Fixed: `doesn't` → `doesn\'t`

### 2. HowItWorks.tsx
- Fixed: `you're` → `you\'re`

### 3. Problem.tsx
- Fixed: `aren't` → `aren\'t`
- Fixed: `you're` → `you\'re`
- Fixed: `doesn't` → `doesn\'t`
- Fixed: `can't` → `can\'t`

### 4. Security.tsx
- Fixed: `DefiShard's` → `DefiShard\'s`

## Status
✅ All syntax errors fixed!

## Next Steps
Your site should now run without errors:

```bash
npm run dev
```

Open http://localhost:3000 to see your landing page! 🎉

