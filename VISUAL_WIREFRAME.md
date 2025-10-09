# DefiShard Landing Page - Visual Wireframe & Layout Guide

This document provides ASCII-style wireframes and detailed layout specifications for each section of the landing page.

---

## Header (Sticky, appears on all sections)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]        Features  Security  How It Works  FAQ    [Download] │
│                                                          [≡ Menu]    │
└─────────────────────────────────────────────────────────────────────┘
```

**Desktop Layout:**
- Height: 80px
- Max-width: 1280px centered
- Background: Transparent on hero, white with shadow on scroll
- Logo: 40px height
- Nav items: Horizontal, right-aligned
- Download button: Primary blue, right side
- Mobile menu: Hidden

**Mobile Layout:**
- Height: 64px
- Logo: Left
- Hamburger menu: Right (☰)
- Full-screen mobile menu on click

---

## 1. Hero Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  ┌────────────────────────────┐  ┌────────────────────────────┐    │
│  │ [BADGE: Protected by MPC]  │  │                            │    │
│  │                            │  │    [HERO IMAGE/MOCKUP]     │    │
│  │ Your DeFi Deserves         │  │    Mobile + Extension      │    │
│  │ Double Protection          │  │    Working Together        │    │
│  │                            │  │                            │    │
│  │ Split your private key... │  │    [Animated Elements]     │    │
│  │ No single point of failure│  │                            │    │
│  │                            │  │                            │    │
│  │ [Primary CTA: Download]   │  │                            │    │
│  │ [Secondary: How It Works] │  │                            │    │
│  │                            │  │                            │    │
│  │ [50K Users][Zero Breaches]│  │                            │    │
│  │ [Stats bar]                │  │                            │    │
│  └────────────────────────────┘  └────────────────────────────┘    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Desktop Layout:**
- Height: 100vh (full viewport)
- Two columns: 60% left (content), 40% right (visual)
- Max-width: 1280px centered
- Vertical center alignment
- Background: Subtle gradient (light blue to white)

**Mobile Layout:**
- Stack vertically
- Hero text first
- Image below
- Full-width buttons

**Elements:**
- Badge: Small pill shape, light blue background
- H1: 56px, bold, dark navy
- Subtitle: 20px, gray, 150% line height
- Primary CTA: Large button, blue gradient
- Secondary CTA: Outlined button, white background
- Stats bar: 3 items horizontally

---

## 2. Problem Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                      The $3.8 Billion Problem                        │
│                                                                       │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │  Traditional Extension      │  │    DefiShard                │  │
│  │  Wallet                      │  │    Protected Wallet         │  │
│  │                              │  │                             │  │
│  │  [Illustration: Single       │  │  [Illustration: Split      │  │
│  │   key in one location]       │  │   key across devices]      │  │
│  │                              │  │                             │  │
│  │  ❌ Single point of failure │  │  ✅ Distributed security   │  │
│  │  ❌ Vulnerable to attacks   │  │  ✅ Multiple checkpoints   │  │
│  │  ❌ No transaction review   │  │  ✅ Mobile review          │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│                                                                       │
│  • One compromised extension = Total loss of funds                   │
│  • Malware can silently drain your wallet in minutes                │
│  • Phishing attacks are more sophisticated than ever                │
│  • Your DeFi portfolio is at risk right now                          │
│                                                                       │
│                    [CTA: Protect Yourself Now]                       │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: 1120px centered
- Background: Light gray (#F5F7FA)
- Padding: 120px vertical
- Title: 48px, centered, dark navy
- Two-column comparison: 50/50 split
- Bullet points: Below comparison, single column
- CTA: Centered at bottom

**Visual Elements:**
- Comparison boxes: White cards with shadow
- Icons: Red X for problems, Green check for solutions
- Illustrations: Simple, clear diagrams

---

## 3. How It Works Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                         How It Works                                 │
│              Bank-Grade Security in Four Simple Steps               │
│                                                                       │
│  ┌───────┐        ┌───────┐        ┌───────┐        ┌───────┐     │
│  │   1   │───────>│   2   │───────>│   3   │───────>│   4   │     │
│  │ [Icon]│        │ [Icon]│        │ [Icon]│        │ [Icon]│     │
│  │       │        │       │        │       │        │       │     │
│  │ Split │        │Browse │        │ Scan  │        │Confirm│     │
│  │ Your  │        │ DeFi  │        │   &   │        │  And  │     │
│  │ Key   │        │       │        │Review │        │ Sign  │     │
│  │       │        │       │        │       │        │       │     │
│  │[Image]│        │[Image]│        │[Image]│        │[Image]│     │
│  │       │        │       │        │       │        │       │     │
│  │ Install ext-  │        │ Use any│        │ Mobile│        │     │
│  │ ension & app. │        │ DeFi   │        │ verifies     │     │
│  │ MPC splits    │        │ app... │        │ transaction  │     │
│  │ your key      │        │        │        │ details      │     │
│  └───────┘        └───────┘        └───────┘        └───────┘     │
│                                                                       │
│                   [Optional: Demo Video/Animation]                   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Desktop Layout:**
- Max-width: 1280px centered
- Background: White
- Padding: 120px vertical
- Steps: Horizontal row, 4 equal columns
- Arrows: Connecting line between steps
- Each step: Icon + number badge + title + description + visual

**Mobile Layout:**
- Vertical timeline
- Steps stack top to bottom
- Arrows point downward

**Visual Elements:**
- Number badges: Circular, blue gradient, white text
- Icons: Simple line icons, consistent style
- Step visuals: Small mockups or illustrations
- Progress line: Blue, animated on scroll

---

## 4. Features Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                    Everything You Need to Stay Secure               │
│                                                                       │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐       │
│  │     [ICON]     │  │     [ICON]     │  │     [ICON]     │       │
│  │                │  │                │  │                │       │
│  │ MPC 2-of-2     │  │ Mobile Trans-  │  │ Universal      │       │
│  │ Security       │  │ action Review  │  │ Compatibility  │       │
│  │                │  │                │  │                │       │
│  │ Military-grade │  │ Review every   │  │ Works with     │       │
│  │ encryption...  │  │ detail on...   │  │ Uniswap...     │       │
│  │                │  │                │  │                │       │
│  └────────────────┘  └────────────────┘  └────────────────┘       │
│                                                                       │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐       │
│  │     [ICON]     │  │     [ICON]     │  │     [ICON]     │       │
│  │                │  │                │  │                │       │
│  │ Seamless UX    │  │ Active         │  │ Easy           │       │
│  │                │  │ Protection     │  │ Recovery       │       │
│  │                │  │                │  │                │       │
│  │ Quick QR code  │  │ Real-time      │  │ Secure backup  │       │
│  │ scanning...    │  │ threat det...  │  │ options...     │       │
│  │                │  │                │  │                │       │
│  └────────────────┘  └────────────────┘  └────────────────┘       │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Desktop Layout:**
- Max-width: 1120px centered
- Background: Light gray (#F5F7FA)
- Padding: 120px vertical
- Grid: 3 columns × 2 rows
- Gap: 32px between cards

**Mobile Layout:**
- Single column
- Cards stack vertically
- Full width with padding

**Card Design:**
- Background: White
- Border-radius: 12px
- Padding: 40px
- Shadow: Subtle elevation
- Hover effect: Lift up, stronger shadow

**Card Contents:**
- Icon: 48px, blue color, top
- Title: 24px, bold, 16px margin top
- Description: 16px, gray, 8px margin top
- Min-height: Match tallest card

---

## 5. Security Deep Dive Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                        How MPC Technology Works                      │
│                                                                       │
│  ┌───────────────────────────────┐  ┌──────────────────────────┐   │
│  │                               │  │                          │   │
│  │  [DIAGRAM: True MPC]         │  │  Your Complete Key       │   │
│  │                               │  │  Never Exists            │   │
│  │   Setup: DKG Protocol         │  │                          │   │
│  │   ┌─────────┐  ┌─────────┐  │  │  Multi-Party Computation │   │
│  │   │ Share 1 │  │ Share 2 │  │  │  (MPC) uses threshold    │   │
│  │   │(Mobile) │  │(Browser)│  │  │  signatures with secret  │   │
│  │   └─────────┘  └─────────┘  │  │  sharing & ZK proofs.    │   │
│  │        ↓            ↓         │  │                          │   │
│  │   Signing: TSS Protocol       │  │  Key shares generated    │   │
│  │   [ZK Proofs + Cooperation]   │  │  so complete key NEVER   │   │
│  │            ↓                  │  │  exists—not during setup,│   │
│  │      Valid Signature          │  │  not during signing.     │   │
│  │   (Key never reconstructed)   │  │                          │   │
│  │                               │  │                          │   │
│  └───────────────────────────────┘  └──────────────────────────┘   │
│                                                                       │
│                      Comparison: Traditional vs DefiShard            │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Feature             │ Traditional    │ DefiShard            │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ Private Key Storage │ Single device  │ Never exists         │   │
│  │ If Browser Hacked   │ ❌ Assets lost │ ✅ Assets safe      │   │
│  │ Transaction Review  │ Limited        │ Full mobile review   │   │
│  │ 2FA Protection      │ Optional       │ Built-in             │   │
│  │ Recovery Options    │ Seed only      │ Multiple options     │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  [Security Badge] [Audited by...] [Open Source Badge]               │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: 1120px centered
- Background: White
- Padding: 120px vertical
- Two sections: Diagram explanation + Comparison table

**Diagram Section:**
- Two columns: 60% diagram, 40% explanation
- Diagram: Animated on scroll
- Explanation: Clear, simple language

**Comparison Table:**
- Full width
- 3 columns: Feature | Traditional | DefiShard
- Alternating row colors for readability
- Icons for ✅ and ❌

**Trust Badges:**
- Bottom row, centered
- 3-4 badges horizontally
- Grayscale or colored

---

## 6. Use Cases Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                          Built For Everyone                          │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────┐│
│  │   [ICON]     │  │   [ICON]     │  │   [ICON]     │  │ [ICON]  ││
│  │              │  │              │  │              │  │         ││
│  │ DeFi         │  │ NFT          │  │ Yield        │  │ Treasury││
│  │ Traders      │  │ Collectors   │  │ Farmers      │  │ Managers││
│  │              │  │              │  │              │  │         ││
│  │ "Execute     │  │ "Protect     │  │ "Manage      │  │"Enterprise│
│  │ hundreds of  │  │ rare NFTs    │  │ multiple     │  │ security ││
│  │ transactions │  │ from mali-   │  │ protocols... │  │ for DAOs││
│  │ with conf... │  │ cious..."    │  │              │  │ and..."  ││
│  │              │  │              │  │              │  │         ││
│  │ [Learn More] │  │ [Learn More] │  │ [Learn More] │  │[Contact]││
│  └──────────────┘  └──────────────┘  └──────────────┘  └─────────┘│
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: 1280px centered
- Background: Light gray (#F5F7FA)
- Padding: 120px vertical
- Grid: 4 equal columns (2×2 on tablet, 1 column on mobile)
- Gap: 24px

**Card Design:**
- Background: White
- Border-radius: 12px
- Padding: 32px
- Text-align: Center
- Hover: Slight lift effect

**Card Contents:**
- Icon/Illustration: Top, 64px
- Persona title: 24px, bold
- Quote/Description: 16px, gray
- Optional link: Small, bottom

---

## 7. Social Proof Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                     Trusted by Thousands of DeFi Users              │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐│
│  │  $XXM+       │  │  50,000+     │  │  Zero        │  │  <10s    ││
│  │  Protected   │  │  Users       │  │  Breaches    │  │  Speed   ││
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────┘│
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ "I trade on DeFi daily and manage a 6-figure portfolio.     │   │
│  │  DefiShard is the only wallet I trust with that kind of     │   │
│  │  exposure. The mobile review is a game-changer."            │   │
│  │                                                              │   │
│  │  [Avatar] — Alex Chen, DeFi Trader                          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────┐  │
│  │ "After seeing...   │  │ "I'm new to DeFi  │  │ "Security... │  │
│  │  what happened..." │  │  and wanted to..." │  │  researcher" │  │
│  │ — Sarah Miller     │  │ — John Davis      │  │ — Mike Smith │  │
│  └────────────────────┘  └────────────────────┘  └──────────────┘  │
│                                                                       │
│            As Featured In: [Logo] [Logo] [Logo] [Logo]              │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: 1120px centered
- Background: White
- Padding: 120px vertical

**Stats Bar:**
- 4 columns
- Large number: 48px, bold, blue
- Label: 16px, gray, below number

**Testimonials:**
- First testimonial: Full width, featured
- Remaining testimonials: 3 columns
- Background: Light gray cards
- Padding: 32px
- Border-radius: 12px

**Testimonial Contents:**
- Quote: 18px, dark text
- Avatar: 48px circle (optional)
- Name & role: 14px, gray

**Media Logos:**
- Grayscale logos
- 4-6 logos horizontally
- Equal spacing

---

## 8. FAQ Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                     Frequently Asked Questions                       │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▼ How is this different from a hardware wallet?             │   │
│  ├──────────────────────────────────────────────────────────────┤   │
│  │ For active DeFi use, yes. DefiShard provides hardware       │   │
│  │ wallet-level security with software wallet convenience...   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▶ What if I lose my phone?                                   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▶ Does this work with all DeFi apps?                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▶ Is my private key ever stored completely on any device?   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▶ What if someone steals my phone?                           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ▶ How fast is the transaction process?                       │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│           Still have questions? [Join our Discord]                   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: 800px centered (narrower for readability)
- Background: Light gray (#F5F7FA)
- Padding: 120px vertical
- Single column

**Accordion Design:**
- Each item: White background
- Border-radius: 8px
- Margin: 16px between items
- Padding: 24px
- Hover: Slight shadow

**Accordion Behavior:**
- Closed by default (except first item)
- Click to expand
- Smooth height transition
- Arrow icon rotates on open
- Only one open at a time (optional)

**Contents:**
- Question: 18px, bold, dark
- Answer: 16px, gray, 16px margin top
- Arrow icon: Right side, rotates

---

## 9. Final CTA Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│           [Background: Gradient or image with overlay]               │
│                                                                       │
│                      Secure Your DeFi Today                          │
│                                                                       │
│          Join thousands of users who sleep better knowing            │
│               their assets are protected by DefiShard                │
│                                                                       │
│             [Download Chrome Extension]  [Get Mobile App]            │
│                                                                       │
│                  Free to download and use forever                    │
│                                                                       │
│          [Chrome Store]  [App Store]  [Google Play]                  │
│                                                                       │
│  [Small mockup or illustration in background]                        │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Full viewport width
- Background: Blue gradient or image
- Padding: 150px vertical
- Content: Centered
- Max-width: 700px for text

**Elements:**
- Headline: 48px, white, bold
- Subtitle: 20px, white/light gray
- CTAs: Large buttons, white background
- Store badges: Below CTAs, authentic badges

**Visual:**
- Background image: Subtle mockup or abstract
- Overlay: Semi-transparent blue gradient
- Text: High contrast for readability

---

## 10. Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  [LOGO]                                                              │
│  Securing DeFi, one wallet at a time                                 │
│                                                                       │
│  ┌─────────┐  ┌─────────┐  ┌──────────┐  ┌────────┐  ┌─────────┐  │
│  │Product  │  │Company  │  │Community │  │Legal   │  │Support  │  │
│  │         │  │         │  │          │  │        │  │         │  │
│  │Features │  │About    │  │Discord   │  │Privacy │  │Help     │  │
│  │Security │  │Blog     │  │Twitter   │  │Terms   │  │Contact  │  │
│  │Docs     │  │Careers  │  │Telegram  │  │Cookies │  │Status   │  │
│  │Pricing  │  │Press    │  │GitHub    │  │        │  │         │  │
│  └─────────┘  └─────────┘  └──────────┘  └────────┘  └─────────┘  │
│                                                                       │
│  ───────────────────────────────────────────────────────────────    │
│                                                                       │
│  © 2025 DefiShard. All rights reserved.    [X] [Discord] [Telegram] │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Full viewport width
- Background: Dark navy (#0A1929)
- Text color: Light gray
- Padding: 80px vertical, 40px horizontal
- Max-width: 1280px centered

**Grid:**
- 5 columns on desktop
- 2 columns on tablet
- 1 column on mobile

**Elements:**
- Logo: Top left, with tagline
- Column headers: 14px, bold, white
- Links: 14px, gray, hover to white
- Divider line: Light gray
- Bottom bar: Copyright left, social icons right

**Social Icons:**
- 24px, circular
- Light gray, hover to white
- 16px spacing between

---

## Responsive Breakpoints Summary

### Desktop (1280px+)
- All sections at max-width: 1280px
- Multi-column layouts
- Horizontal navigation
- Side-by-side content

### Laptop (1024px - 1279px)
- Slight reduction in max-width: 1120px
- Same layouts, tighter spacing

### Tablet (768px - 1023px)
- Two-column layouts (instead of 3 or 4)
- Reduced font sizes
- Tighter padding
- Some sections stack

### Mobile (< 768px)
- Single column layouts
- Stack all multi-column content
- Hamburger menu
- Full-width CTAs
- Increased tap targets (min 44px)
- Reduced padding

---

## Animation Guidelines

### On Page Load:
1. Hero content: Fade in + slide up (400ms)
2. Hero visual: Fade in + slide left (600ms, 200ms delay)
3. Header: Fade in (300ms)

### On Scroll (Intersection Observer):
1. Section titles: Fade in + slide up
2. Content: Stagger fade in (each item 100ms delay)
3. Images/visuals: Scale up from 95% to 100%
4. Stats: Count-up animation
5. Diagrams: Progressive reveal

### Hover States:
1. Buttons: Scale 1.05, shadow increase
2. Cards: Translate Y -8px, shadow increase
3. Links: Color change, underline
4. Images: Scale 1.1 (with overflow hidden)

### Timing:
- Fast: 200ms (color changes, small movements)
- Medium: 400ms (slides, fades)
- Slow: 600ms (complex animations)
- Easing: ease-out for most, ease-in-out for hover

---

## Color Usage Map

### Primary Blue (#0066FF):
- CTAs (buttons)
- Links
- Icons in features
- Active states
- Progress indicators

### Security Green (#00D395):
- Success messages
- Checkmarks in comparisons
- Trust indicators
- Positive highlights

### Dark Navy (#0A1929):
- Headlines
- Body text
- Footer background

### Light Gray (#F5F7FA):
- Section backgrounds (alternating)
- Card backgrounds (on white sections)
- Subtle borders

### White (#FFFFFF):
- Main background
- Card backgrounds (on gray sections)
- Button text

### Warning Red (#FF4D4F):
- X marks in comparisons
- Error states (use sparingly)

---

## Typography Scale

### Desktop:
- H1 (Hero): 56px, bold, line-height 1.2
- H2 (Sections): 48px, bold, line-height 1.3
- H3 (Subsections): 32px, semi-bold, line-height 1.4
- H4 (Cards): 24px, semi-bold, line-height 1.5
- Body Large: 20px, regular, line-height 1.6
- Body: 16px, regular, line-height 1.6
- Small: 14px, regular, line-height 1.5

### Mobile (scale down by ~15%):
- H1: 40px
- H2: 36px
- H3: 28px
- H4: 20px
- Body Large: 18px
- Body: 16px (keep same)
- Small: 14px (keep same)

---

## Spacing System

Using 8px base unit:

- **4px**: Icon margins, tight spacing
- **8px**: Text line gaps
- **16px**: Element margins, padding small
- **24px**: Card padding, section gaps
- **32px**: Card padding large, column gaps
- **40px**: Section padding mobile
- **60px**: Between subsections
- **80px**: Between major sections (mobile)
- **120px**: Between major sections (desktop)

---

## Image Specifications

### Hero Image:
- Size: 1200×800px minimum
- Format: PNG with transparency or WebP
- Content: Mobile + extension mockup
- Style: Realistic or illustrated

### Feature Icons:
- Size: 64×64px
- Format: SVG (vector)
- Style: Line icons, consistent weight
- Color: Primary blue

### Section Illustrations:
- Size: 800×600px minimum
- Format: SVG or optimized PNG
- Style: Match overall design (illustrated)
- Keep file size < 200KB

### Logos:
- Format: SVG preferred
- Multiple versions: Full, icon-only
- Colors: Color and white versions

### Screenshots:
- Size: Actual device resolution
- Format: PNG for quality
- Add device frames (optional)
- Show realistic content

---

## Accessibility Checklist

### Visual:
- ✅ Color contrast: 4.5:1 minimum
- ✅ Focus indicators: Visible outline
- ✅ Text size: Minimum 16px body
- ✅ Line height: 1.5+ for body text
- ✅ No text in images (use alt text)

### Semantic:
- ✅ Proper heading hierarchy
- ✅ Semantic HTML5 tags
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ Form labels associated

### Interaction:
- ✅ Keyboard navigation works
- ✅ Tab order logical
- ✅ Skip to content link
- ✅ No keyboard traps
- ✅ Buttons/links > 44px touch target

### Motion:
- ✅ Respect prefers-reduced-motion
- ✅ No auto-playing video with sound
- ✅ Animations pausable
- ✅ No flashing content

---

## Performance Checklist

### Images:
- ✅ WebP format with fallbacks
- ✅ Responsive images (srcset)
- ✅ Lazy loading below fold
- ✅ Proper dimensions set
- ✅ Compressed (TinyPNG, etc.)

### Code:
- ✅ Minified CSS/JS
- ✅ Code splitting
- ✅ Tree shaking unused code
- ✅ Critical CSS inlined
- ✅ Defer non-critical JS

### Fonts:
- ✅ WOFF2 format
- ✅ Font subsetting
- ✅ Preload critical fonts
- ✅ Font-display: swap

### General:
- ✅ Gzip/Brotli compression
- ✅ CDN for static assets
- ✅ Browser caching headers
- ✅ Reduce third-party scripts
- ✅ Lighthouse score 90+

---

This wireframe document provides a complete visual reference for building the landing page. Use it alongside the other documentation for implementation.

**Document Version:** 1.0  
**Last Updated:** October 9, 2025

