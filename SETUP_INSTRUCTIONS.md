# DefiShard Landing Page - Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
defishard-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles with Web3 theme
├── components/
│   ├── Header.tsx          # Sticky header with navigation
│   ├── Footer.tsx          # Footer with links
│   └── sections/
│       ├── Hero.tsx        # Hero section with visual
│       ├── Stats.tsx       # Attack statistics
│       ├── Problem.tsx     # Real-world attacks
│       ├── HowItWorks.tsx  # DKG & distributed signing
│       ├── Features.tsx    # Key features grid
│       ├── Security.tsx    # MPC deep dive
│       ├── FAQ.tsx         # Common questions
│       └── CTA.tsx         # Final call-to-action
├── tailwind.config.ts      # Web3 theme configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## 🎨 Design Features

### Modern Web3 Styling
- **Dark theme** with mesh gradients
- **Glass morphism** effects
- **Animated backgrounds** with particles
- **Glow effects** on hover
- **Smooth scroll** animations
- **Responsive design** for all devices

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Cyan (#06b6d4)
- **Accent**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Danger**: Red (#ef4444)

### Key Components
- Animated hero with distributed key visual
- Real attack case studies with stats
- Interactive how-it-works section
- Feature cards with hover effects
- Technical security deep dive
- FAQ accordion
- Responsive mobile menu

## 🔧 Customization

### Update Content
Edit the component files in `components/sections/` to modify:
- Headlines and copy
- Statistics and numbers
- Feature descriptions
- FAQ questions

### Modify Styling
- Global styles: `app/globals.css`
- Theme colors: `tailwind.config.ts`
- Component-specific: Inline Tailwind classes

### Add Sections
1. Create new component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to page composition

## 📝 Content Guidelines

### Key Messaging
- ✅ "Distributed key generation" (not "split key")
- ✅ "Distributed signing" (not "reassemble")
- ✅ "Your key never exists"
- ✅ "Threshold signatures"
- ✅ "Zero-knowledge proofs"

### Tone
- Professional but approachable
- Security-focused without fear-mongering
- Empowering, not alarming
- Clear over clever

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Deploy the `.next` folder
3. Ensure Node.js 18+ runtime

## ✅ Pre-Launch Checklist

- [ ] Update all placeholder links and CTAs
- [ ] Add real download URLs
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+)
- [ ] Check all animations on slow devices
- [ ] Verify all links work
- [ ] Add analytics tracking
- [ ] Set up error monitoring (Sentry)
- [ ] Add meta images for social sharing
- [ ] Test cross-browser compatibility

## 🎯 Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📚 Documentation Reference

See the following docs for more details:
- `LANDING_PAGE_BRIEF.md` - Complete strategy
- `MPC_TECHNICAL_CLARITY.md` - Technical accuracy
- `REAL_WORLD_ATTACKS.md` - Attack case studies
- `COPY_VARIATIONS.md` - Alternative copy options

## 🆘 Troubleshooting

### Animations not working
- Ensure `framer-motion` is installed
- Check browser support for CSS backdrop-filter

### Styling issues
- Run `npm install` to ensure Tailwind is installed
- Clear `.next` cache: `rm -rf .next`
- Restart dev server

### Build errors
- Check Node.js version (18+ required)
- Ensure all dependencies are installed
- Check for TypeScript errors

## 📞 Support

For questions about the content or strategy, refer to the documentation package.
For technical issues with Next.js or React, see official docs.

---

**Built with Next.js 14, React 18, Tailwind CSS, and Framer Motion**

