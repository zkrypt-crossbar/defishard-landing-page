# DefiShard Landing Page - Technical Specification

## Tech Stack Recommendations

### Option 1: Next.js (Recommended)
**Pros:**
- SEO-friendly with SSR/SSG
- Fast performance with automatic optimization
- Great developer experience
- Built-in image optimization
- Easy deployment (Vercel)
- TypeScript support

**Stack:**
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React or Heroicons
- Analytics: Vercel Analytics or Google Analytics 4
- Form handling: React Hook Form
- Email: Resend or SendGrid

### Option 2: React + Vite
**Pros:**
- Lightning-fast development
- Smaller bundle size
- More flexibility
- Simpler deployment

**Stack:**
- Framework: React 18+ with Vite
- Routing: React Router
- Styling: Tailwind CSS
- Animations: Framer Motion
- Analytics: GA4
- Hosting: Netlify or Vercel

### Option 3: Astro (For Maximum Performance)
**Pros:**
- Minimal JavaScript
- Best lighthouse scores
- Content-focused
- Can use React components

**Stack:**
- Framework: Astro
- UI Components: React islands
- Styling: Tailwind CSS
- Hosting: Cloudflare Pages or Netlify

---

## Recommended: Next.js Setup

### Project Structure
```
defishard-landing-page/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   └── api/                       # API routes for form submissions
│       └── newsletter/
│           └── route.ts
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Security.tsx
│   │   ├── UseCases.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── AnimatedSection.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── mockups/
│   │   └── logos/
│   └── videos/
├── lib/
│   ├── constants.ts               # App constants
│   ├── animations.ts              # Reusable animation variants
│   └── utils.ts                   # Helper functions
├── styles/
│   └── animations.css             # Custom animations
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Understanding MPC Technology (Critical for Accurate Messaging)

### What MPC Is NOT ❌

**Common Misconception:**
Many people think MPC means:
1. Split the private key into two parts (like cutting a paper in half)
2. Store each part on a different device
3. When signing, send both parts to one device to reassemble
4. Sign with the complete key
5. Delete the key from memory

**Why this is NOT secure:** If the key is ever reconstructed (even temporarily in memory), you have a single point of failure at that moment. Malware could intercept it during reassembly.

### What True MPC Actually Is ✅

**DefiShard's Implementation:**

1. **Distributed Key Generation (DKG)**:
   - Private key shares are generated using cryptographic protocols
   - The complete private key NEVER exists—not even during generation
   - Each share is mathematically useless alone (reveals zero information about the key)

2. **Threshold Signature Scheme (TSS)**:
   - When signing, both devices engage in multi-round communication
   - Uses secret sharing (Shamir's Secret Sharing or similar)
   - Uses zero-knowledge proofs to verify correct behavior
   - Produces valid ECDSA signature (r, s) without reconstructing private key

3. **Security Properties**:
   - **Key never exists**: Complete private key never materializes anywhere
   - **No single point of failure**: One compromised device reveals nothing
   - **Cryptographically secure**: Based on hardness of discrete logarithm problem
   - **Standard signatures**: Output is standard ECDSA signature, works with all blockchains

**This distinction is CRITICAL for your landing page messaging.**

---

## Page Sections Breakdown

### 1. Header (Sticky)
```tsx
Components:
- Logo (links to home)
- Navigation links: Features, Security, How It Works, FAQ
- CTA button: "Download"
- Mobile hamburger menu

Behavior:
- Transparent on hero, solid background on scroll
- Smooth scroll to sections
- Mobile responsive menu
```

### 2. Hero Section
```tsx
Layout: Two-column (60/40 split)

Left Column:
- Badge: "Protected by MPC Technology"
- H1: Main headline
- Subtitle: Supporting text
- Primary CTA: "Download DefiShard"
- Secondary CTA: "See How It Works"
- Trust indicators: "50K+ Users" | "Zero Breaches" | "$XXM Protected"

Right Column:
- Hero visual: Mockup of mobile + extension
- Animated elements showing interaction

Animations:
- Fade in headline
- Slide in mockups
- Subtle floating animation on mockup
```

### 3. Problem Section
```tsx
Layout: Centered content

Elements:
- Attention-grabbing stat (large text)
- 2-column comparison visual
  Left: "Traditional Extension Wallet" (vulnerable)
  Right: "DefiShard" (protected)
- 4 bullet points highlighting risks
- Subtle background gradient

Animations:
- Fade in on scroll
- Comparison visual slides in from sides
```

### 4. How It Works Section
```tsx
Layout: Centered timeline/stepper

Elements:
- Section title: "How It Works"
- 4-step visual flow (horizontal on desktop, vertical on mobile)
  Each step:
    - Number badge
    - Icon/illustration
    - Title
    - Description
    - Visual element (mockup or diagram)

Animations:
- Steps fade in sequentially on scroll
- Progress line animates between steps
- Optional: Animated demo video/gif
```

### 5. Features Section
```tsx
Layout: 3x2 grid

Elements:
- Section title: "Everything You Need"
- 6 feature cards:
  Each card:
    - Icon
    - Title
    - Description (2-3 lines)
    - Hover effect (elevation/glow)

Animations:
- Stagger fade in on scroll
- Hover effects (scale up slightly)
```

### 6. Security Deep Dive Section
```tsx
Layout: Two-column alternating

Elements:
- "How MPC Works" explainer with diagram
- Comparison table
- Security badges/certifications
- "Open Source" callout (if applicable)

Animations:
- Diagram animates to show key splitting
- Table rows highlight on hover
```

### 7. Use Cases Section
```tsx
Layout: 4-column cards (2x2 on tablet, 1 column on mobile)

Elements:
- Section title: "Built For Everyone"
- 4 persona cards:
  - Icon/illustration
  - Persona name
  - Quote or description
  - "Perfect for [use case]"

Animations:
- Cards fade in on scroll
- Hover effect (slight lift)
```

### 8. Social Proof Section
```tsx
Layout: Mixed

Elements:
- Stats bar: 4 key metrics in a row
- Testimonials: 3-column grid or carousel
  Each testimonial:
    - Quote
    - Name & role
    - Avatar (if available)
- Media mentions: Logo row
- Trust badges: Security audit badges

Animations:
- Stats count up on scroll into view
- Testimonials fade in
- Logo carousel auto-scrolls (optional)
```

### 9. FAQ Section
```tsx
Layout: Single column, centered (max-width)

Elements:
- Section title: "Frequently Asked Questions"
- Accordion with 8-10 questions
  - Click to expand/collapse
  - Smooth height transition
- CTA at bottom: "More questions? Join our Discord"

Animations:
- Accordion smooth expand/collapse
- Rotate arrow icon
```

### 10. Final CTA Section
```tsx
Layout: Centered, full-width background

Elements:
- Large headline: "Secure Your DeFi Today"
- Supporting text
- Download buttons (Chrome, iOS, Android)
- Mockup visual in background
- Trust indicators

Animations:
- Subtle gradient animation in background
- Buttons with hover effects
```

### 11. Footer
```tsx
Layout: Multi-column grid

Columns:
- Column 1: Logo + description
- Column 2: Product (Features, Security, Docs, Pricing)
- Column 3: Company (About, Blog, Careers, Press)
- Column 4: Community (Discord, Twitter, Telegram, GitHub)
- Column 5: Legal (Privacy, Terms, Cookies)

Bottom bar:
- Copyright
- Social media icons

Styling:
- Dark background
- Subtle divider lines
```

---

## Key Components

### Button Component
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

// Styling:
// Primary: Blue gradient, white text
// Secondary: White background, dark text
// Outline: Transparent, border
// Ghost: Transparent, no border
```

### Animated Section Wrapper
```tsx
interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  threshold?: number; // Intersection observer threshold
}

// Uses Framer Motion with IntersectionObserver
// Animates when section comes into view
```

### Feature Card
```tsx
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: boolean; // For featured items
}

// Styling:
// Card with subtle shadow
// Hover: Elevation increase, glow effect
// Icon in brand color
```

---

## Responsive Breakpoints

Using Tailwind's default breakpoints:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

### Mobile-First Approach
- Design for mobile by default
- Enhance for larger screens
- Test on multiple device sizes

### Key responsive behaviors:
- Header: Hamburger menu on mobile
- Hero: Stack columns on mobile
- Features: 1 column mobile, 2 column tablet, 3 column desktop
- How It Works: Vertical timeline on mobile, horizontal on desktop
- Footer: 1 column mobile, expand to multi-column on tablet+

---

## Performance Optimization

### Images
- Use Next.js Image component for automatic optimization
- WebP format with fallbacks
- Lazy loading for below-the-fold content
- Proper alt text for accessibility
- Responsive images with srcset

### Code Splitting
- Dynamic imports for heavy components
- Separate chunks for animations library
- Load video/demo content on demand

### Fonts
- Use next/font for optimized font loading
- Subset fonts to include only needed characters
- Preload critical fonts

### Animations
- Use CSS transforms (GPU-accelerated)
- Reduce motion for users who prefer it (prefers-reduced-motion)
- Lazy load Framer Motion if possible

### Metrics to Hit
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## SEO Implementation

### Meta Tags
```tsx
// app/layout.tsx or page.tsx
export const metadata = {
  title: 'DefiShard - Secure DeFi with MPC 2-of-2 Security',
  description: 'Eliminate the single point of failure in DeFi. DefiShard uses MPC technology with secret sharing—your private key never exists anywhere.',
  keywords: ['DeFi security', 'MPC wallet', 'crypto security', 'browser extension wallet'],
  openGraph: {
    title: 'DefiShard - Secure DeFi with MPC 2-of-2 Security',
    description: 'Bank-grade security for DeFi with familiar 2FA-style UX',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DefiShard - Secure DeFi with MPC 2-of-2 Security',
    description: 'Eliminate the single point of failure in DeFi',
    images: ['/twitter-image.jpg'],
  },
}
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DefiShard",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "operatingSystem": "Chrome, iOS, Android",
  "description": "Secure DeFi wallet using MPC 2-of-2 technology"
}
```

### Sitemap
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://defishard.com/</loc>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs as needed -->
</urlset>
```

---

## Analytics & Tracking

### Events to Track
1. **Page views**: Home page, specific sections
2. **CTA clicks**: Download button, See How It Works, etc.
3. **Scroll depth**: How far users scroll
4. **Video plays**: Demo video engagement
5. **External links**: Chrome Store, App Store clicks
6. **Form submissions**: Newsletter signup
7. **Time on page**: Engagement metric
8. **Mobile vs Desktop**: User breakdown

### Implementation
```tsx
// Using Vercel Analytics or GA4
import { track } from '@vercel/analytics';

// Track CTA click
const handleDownloadClick = () => {
  track('download_cta_click', {
    location: 'hero',
    cta_text: 'Download DefiShard'
  });
  // Navigate to download
};
```

---

## Forms & Interactions

### Newsletter Signup
```tsx
Components needed:
- Input field for email
- Submit button
- Loading state
- Success message
- Error handling

API endpoint: /api/newsletter
- Validate email format
- Store in database or email service (Resend, ConvertKit, etc.)
- Send welcome email
- Return success/error
```

### Contact Form (if included)
```tsx
Fields:
- Name
- Email
- Message
- reCAPTCHA (optional, for spam prevention)

Validation:
- Client-side: React Hook Form + Zod
- Server-side: API route validation
```

---

## Third-Party Integrations

### Email Service
**Recommended: Resend**
```bash
npm install resend
```

```tsx
// app/api/newsletter/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();
  
  await resend.emails.send({
    from: 'DefiShard <hello@defishard.com>',
    to: email,
    subject: 'Welcome to DefiShard',
    html: '<p>Welcome email content</p>'
  });
  
  return Response.json({ success: true });
}
```

### Analytics
**Option 1: Vercel Analytics** (if using Vercel)
```bash
npm install @vercel/analytics
```

**Option 2: Google Analytics 4**
```tsx
// app/layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### Error Tracking
**Recommended: Sentry**
```bash
npm install @sentry/nextjs
```

---

## Accessibility (a11y)

### Requirements
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Color contrast ratio: 4.5:1 minimum
- ✅ Reduced motion support
- ✅ Screen reader testing

### Implementation
```tsx
// Button with proper ARIA
<button
  aria-label="Download DefiShard Chrome Extension"
  onClick={handleDownload}
>
  Download
</button>

// Reduced motion
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://defishard.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (server-side only)
RESEND_API_KEY=re_xxxxxxxxxxxx
DATABASE_URL=postgresql://...
SENTRY_DSN=https://...

# Feature Flags
NEXT_PUBLIC_SHOW_DOWNLOAD_BUTTONS=true
NEXT_PUBLIC_ENABLE_NEWSLETTER=true
```

---

## Testing Strategy

### Unit Tests
- Component rendering
- Button interactions
- Form validation
- API routes

### Integration Tests
- Section interactions
- Newsletter signup flow
- Navigation

### E2E Tests (Playwright or Cypress)
- Full user journey
- CTA click through
- Mobile responsive checks

### Visual Regression
- Percy or Chromatic
- Test across breakpoints

---

## Deployment

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Custom Domain
1. Add domain in Vercel dashboard
2. Update DNS records
3. SSL certificate auto-provisioned

### Environment Setup
- Development: Local (.env.local)
- Preview: Per-branch deploys
- Production: Main branch auto-deploys

---

## Launch Checklist

### Pre-Launch
- [ ] All content proofread
- [ ] All images optimized
- [ ] All links tested
- [ ] Mobile responsive verified
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Performance audit (Lighthouse 90+)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO audit (meta tags, sitemap, robots.txt)
- [ ] Analytics connected and tested
- [ ] Error tracking setup
- [ ] SSL certificate active
- [ ] Backup strategy in place

### Launch Day
- [ ] Final production deploy
- [ ] Verify all CTAs lead to correct destinations
- [ ] Test form submissions
- [ ] Monitor error tracking
- [ ] Check analytics data flow
- [ ] Social media posts scheduled
- [ ] Monitor performance metrics

### Post-Launch
- [ ] Daily analytics review (first week)
- [ ] User feedback collection
- [ ] A/B test planning
- [ ] Content updates based on data
- [ ] Bug fixes and optimizations

---

## Maintenance Plan

### Weekly
- Review analytics data
- Check error logs
- Monitor site performance
- Update content if needed

### Monthly
- Security updates
- Dependency updates
- Performance optimization
- Content refresh

### Quarterly
- Major feature updates
- Design improvements based on data
- Competitive analysis
- User survey

---

## Cost Estimate

### Development (One-time)
- Design: $2,000 - $5,000 (if hiring designer)
- Development: $5,000 - $15,000 (depending on complexity)
- Copywriting: $1,000 - $3,000 (if hiring copywriter)
- Total: $8,000 - $23,000

### Hosting & Services (Annual)
- Domain: $15/year
- Hosting (Vercel Pro): $20/month = $240/year
- Email service (Resend): $20/month = $240/year
- Analytics: $0 (Vercel) or $150/year (GA4 is free)
- Error tracking (Sentry): $26/month = $312/year
- Total: ~$800-1,000/year

**DIY Option:**
If building yourself with this spec document: $800-1,000/year (hosting + services only)

---

## Next Steps to Start Development

1. **Set up project**
   ```bash
   npx create-next-app@latest defishard-landing-page
   cd defishard-landing-page
   npm install tailwindcss framer-motion lucide-react
   ```

2. **Create folder structure** (as outlined above)

3. **Implement sections one by one**
   - Start with Header and Hero
   - Add remaining sections
   - Polish animations and interactions

4. **Test thoroughly**

5. **Deploy to Vercel**

6. **Monitor and iterate**

---

**Document Version:** 1.0  
**Last Updated:** October 9, 2025

