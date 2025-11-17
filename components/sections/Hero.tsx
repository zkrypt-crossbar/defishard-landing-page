'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, ArrowRight, Check, Chrome } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-40 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-light">
                Protected by MPC Technology
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Key Never Exists.{' '}
                <span className="text-gradient">
                  Your Assets Always Safe.
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                DefiShard uses distributed key generation with threshold signatures. 
                Your private key <span className="text-white font-semibold">never exists anywhere</span>—not during setup, not during signing, not ever.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/defishard-wallet-v1.4.0.zip"
                download
                className="btn-primary text-lg px-8 py-4 inline-flex"
              >
                <Chrome className="h-5 w-5" />
                <span>Download Extension</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#cta"
                className="btn-secondary text-lg px-8 py-4 inline-flex"
              >
                <Smartphone className="h-5 w-5" />
                <span>Get Mobile App</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-gray-400">Protected Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">$100M+</div>
                <div className="text-sm text-gray-400">Assets Secured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">Zero</div>
                <div className="text-sm text-gray-400">Breaches</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'No single point of failure',
                'Bank-grade security',
                'Familiar 2FA experience',
                'Works with all DeFi',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 animated-gradient opacity-10" />
                
                <div className="relative space-y-8">
                  {/* Mobile Device */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-2xl p-6 border-2 border-primary/30"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                      <span className="font-semibold">Mobile App</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded-full w-3/4" />
                      <div className="h-2 bg-primary/20 rounded-full w-1/2" />
                      <div className="glass rounded-lg p-3 mt-4 border border-success/30">
                        <div className="text-xs text-success mb-1">Key Share 1</div>
                        <div className="font-mono text-xs text-gray-400">s₁ = 0x7a3f...</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection indicator */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-secondary rounded-full shadow-glow-cyan"
                      />
                      <div className="h-1 w-8 bg-gradient-to-r from-secondary to-primary rounded-full" />
                    </div>
                  </div>

                  {/* Browser Extension */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="glass rounded-2xl p-6 border-2 border-secondary/30"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-secondary" />
                      <span className="font-semibold">Browser Extension</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-secondary/20 rounded-full w-2/3" />
                      <div className="h-2 bg-secondary/20 rounded-full w-3/4" />
                      <div className="glass rounded-lg p-3 mt-4 border border-secondary/30">
                        <div className="text-xs text-secondary mb-1">Key Share 2</div>
                        <div className="font-mono text-xs text-gray-400">s₂ = 0x4c1e...</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Result */}
                  <div className="text-center glass rounded-xl p-4 border border-success/30">
                    <div className="text-sm text-gray-400 mb-2">Transaction Signed</div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-success" />
                      <span className="text-success font-semibold">Without Reconstructing Key</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

