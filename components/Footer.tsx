'use client'

import { Shield, Twitter, MessageCircle, Send, Github } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Documentation', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    Community: [
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Telegram', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="section pt-20 pb-8 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">DefiShard</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Securing DeFi, one distributed key at a time
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-strong rounded-xl flex items-center justify-center hover:border-primary/50 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 DefiShard. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Built for DeFi security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

