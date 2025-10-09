# DefiShard Landing Page - Quick Start Guide

Get your landing page up and running in under 30 minutes with this quick start guide.

---

## ⚡ 5-Minute Setup

### Step 1: Create the Project (2 minutes)

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest defishard-landing-page \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

# Navigate to project
cd defishard-landing-page

# Install additional dependencies
npm install framer-motion lucide-react clsx
```

### Step 2: Update Tailwind Config (1 minute)

Replace `tailwind.config.ts` with:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#3385FF',
        },
        security: {
          DEFAULT: '#00D395',
          dark: '#00B37E',
          light: '#33DEAA',
        },
        navy: {
          DEFAULT: '#0A1929',
          light: '#1E3A52',
        },
        gray: {
          light: '#F5F7FA',
          DEFAULT: '#6B7280',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Step 3: Create Folder Structure (1 minute)

```bash
mkdir -p components/sections
mkdir -p components/ui
mkdir -p lib
mkdir -p public/images
```

### Step 4: Start Development Server (1 minute)

```bash
npm run dev
```

Visit `http://localhost:3000` - you're ready to build!

---

## 🎨 Basic Component Templates

### Button Component

Create `components/ui/Button.tsx`:

```typescript
import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg font-semibold transition-all duration-200',
        'hover:scale-105 active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        {
          'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl': 
            variant === 'primary',
          'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white': 
            variant === 'secondary',
          'bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy': 
            variant === 'outline',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Hero Section

Create `components/sections/Hero.tsx`:

```typescript
'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🔐 Protected by MPC Technology
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Your DeFi Deserves Double Protection
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed">
            Your private key never exists—anywhere. True MPC with secret sharing and zero-knowledge proofs. 
            Bank-grade security for DeFi with familiar 2FA experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary">
              Download DefiShard
            </Button>
            <Button size="lg" variant="secondary">
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-8 text-sm">
            <div>
              <div className="text-2xl font-bold text-navy">50K+</div>
              <div className="text-gray">Protected Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy">$XXM+</div>
              <div className="text-gray">Assets Secured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-security">Zero</div>
              <div className="text-gray">Breaches</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square">
            {/* Placeholder for hero image/mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-security/20 rounded-3xl animate-float" />
            <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
              <p className="text-gray text-center">
                Hero Image:<br />
                Mobile + Extension<br />
                Mockup Here
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

### Header Component

Create `components/Header.tsx`:

```typescript
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-navy">
              DefiShard
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm">Download</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full" size="sm">
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
```

### Footer Component

Create `components/Footer.tsx`:

```typescript
import React from 'react';

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Security', 'Documentation', 'Pricing'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Community: ['Discord', 'Twitter', 'Telegram', 'GitHub'],
    Legal: ['Privacy', 'Terms', 'Cookies'],
    Support: ['Help Center', 'Contact', 'Status'],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Description */}
        <div className="mb-12">
          <div className="text-2xl font-bold mb-2">DefiShard</div>
          <p className="text-gray-400">Securing DeFi, one wallet at a time</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 DefiShard. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 📄 Main Page Setup

Update `app/page.tsx`:

```typescript
import { Hero } from '@/components/sections/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Add more sections here as you build them */}
      <Footer />
    </main>
  );
}
```

Update `app/layout.tsx` for better metadata:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DefiShard - Secure DeFi with MPC 2-of-2 Security',
  description: 'Eliminate the single point of failure in DeFi. DefiShard uses MPC technology to split your private key between mobile and browser.',
  keywords: ['DeFi security', 'MPC wallet', 'crypto security', 'browser extension wallet'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## 🚀 Build More Sections

Now that you have the foundation, add more sections. Here's a template for the Features section:

Create `components/sections/Features.tsx`:

```typescript
'use client';

import React from 'react';
import { Shield, Smartphone, Zap, Globe, AlertTriangle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'MPC 2-of-2 Security',
    description: 'Threshold signatures with secret sharing and zero-knowledge proofs. Your private key never exists—anywhere, ever. Assets safe even if one device is compromised.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Transaction Review',
    description: 'Review every detail on your phone. Catch scams before signing.',
  },
  {
    icon: Globe,
    title: 'Universal Compatibility',
    description: 'Works with Uniswap, Aave, Compound, and all your favorite DeFi protocols.',
  },
  {
    icon: Zap,
    title: 'Seamless UX',
    description: 'Quick QR code scanning. Transactions complete in seconds.',
  },
  {
    icon: AlertTriangle,
    title: 'Active Protection',
    description: 'Real-time threat detection and warning system for suspicious transactions.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Recovery',
    description: 'Secure backup options and social recovery available.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Everything You Need to Stay Secure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with the security-conscious DeFi user in mind
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Then add it to your main page:

```typescript
// In app/page.tsx
import { Features } from '@/components/sections/Features';

// Add in the main component:
<Hero />
<Features />
<Footer />
```

---

## 📋 Development Checklist

Use this checklist as you build:

### Foundation ✅
- [x] Project setup
- [x] Tailwind configured
- [x] Basic components (Button)
- [x] Header component
- [x] Footer component
- [x] Hero section

### Sections (Build in Order)
- [ ] Problem section
- [ ] How It Works section
- [ ] Features section (template provided above)
- [ ] Security Deep Dive
- [ ] Use Cases
- [ ] Social Proof
- [ ] FAQ (with accordion)
- [ ] Final CTA

### Polish
- [ ] Add smooth scroll behavior
- [ ] Add animations on scroll
- [ ] Optimize images
- [ ] Add meta tags
- [ ] Test mobile responsive
- [ ] Test cross-browser
- [ ] Run Lighthouse audit

---

## 🎨 Using the Documentation

As you build each section:

1. **Structure**: Refer to `VISUAL_WIREFRAME.md` for layout
2. **Copy**: Get text from `COPY_VARIATIONS.md`
3. **Details**: Check `LANDING_PAGE_BRIEF.md` for full specifications
4. **Technical**: Use `TECHNICAL_SPEC.md` for implementation guidance

---

## 🔧 Helpful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npx prettier --write .  # Format code

# Deployment (Vercel)
vercel                  # Deploy to preview
vercel --prod          # Deploy to production
```

---

## 💡 Tips & Best Practices

### 1. Build Section by Section
Don't try to build everything at once. Complete one section fully before moving to the next.

### 2. Test on Real Devices
- Use Chrome DevTools device emulation
- Test on actual mobile devices
- Check different screen sizes

### 3. Optimize as You Go
- Use Next.js Image component for all images
- Keep animations smooth (use CSS transforms)
- Minimize bundle size

### 4. Use Placeholder Content
Don't let missing content block you:
- Use `placehold.co` for images
- Use lorem ipsum for long text
- Replace with real content later

### 5. Version Control
```bash
git init
git add .
git commit -m "Initial commit"
```

Commit after each major section is complete.

---

## 🚨 Common Issues & Solutions

### Issue: Animations not working
**Solution**: Make sure you're using `'use client'` directive in components using `framer-motion`

### Issue: Tailwind classes not applying
**Solution**: Check `tailwind.config.ts` includes correct content paths

### Issue: Images not loading
**Solution**: Place images in `public/` folder and reference with `/image-name.jpg`

### Issue: Mobile menu not closing
**Solution**: Make sure to call `setIsMobileMenuOpen(false)` in nav item click handlers

---

## 📚 Next Steps

After completing the basic structure:

1. **Add Real Content**: Replace placeholders with actual copy from `COPY_VARIATIONS.md`
2. **Add Images**: Create or source images for hero, features, mockups
3. **Add More Sections**: Build Problem, How It Works, etc.
4. **Optimize**: Run Lighthouse, fix issues
5. **Deploy**: Push to Vercel or your hosting platform
6. **Iterate**: Gather feedback, improve based on data

---

## 🎯 30-Minute Challenge

Can you build the foundation in 30 minutes? Try this:

**Minutes 0-10**: Setup
- Create project
- Install dependencies
- Configure Tailwind

**Minutes 10-20**: Core Components
- Build Button component
- Build Header component
- Build Footer component

**Minutes 20-30**: Hero Section
- Implement Hero component
- Add to main page
- Test responsive design

If you complete this, you have a working foundation to build on!

---

## 🆘 Need Help?

- **Next.js Issues**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Icons**: [lucide.dev](https://lucide.dev)

---

**Ready to build? Let's go! 🚀**

Start with the 5-minute setup above, then build section by section using the templates provided.

