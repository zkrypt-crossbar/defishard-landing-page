import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DefiShard - Your Key Never Exists. Your Assets Always Safe.',
  description: 'Eliminate the single point of failure in DeFi. DefiShard uses MPC technology with distributed key generation and distributed signing. Your private key never exists anywhere.',
  keywords: ['DeFi security', 'MPC wallet', 'distributed key generation', 'threshold signatures', 'Web3 security', 'crypto wallet'],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'DefiShard - Distributed Key Security for DeFi',
    description: 'True MPC security with threshold signatures. Your private key never exists anywhere.',
    type: 'website',
    images: ['/icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DefiShard - Your Key Never Exists',
    description: 'Distributed key generation and threshold signatures for DeFi security',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          {/* Animated mesh gradient background */}
          <div className="fixed inset-0 mesh-gradient grid-pattern -z-10" />
          
          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  )
}

