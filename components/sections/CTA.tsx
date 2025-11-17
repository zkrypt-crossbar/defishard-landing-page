'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Chrome, Smartphone } from 'lucide-react'
import EmailForm from '../EmailForm'

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 animated-gradient" />
          <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Secure Your DeFi
                <br />
                <span className="text-gradient">Today</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of users who sleep better knowing their assets are protected by distributed key technology
              </p>

              {/* Download Options */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Browser Extension */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-effect rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Chrome className="h-8 w-8 text-blue-400" />
                    <h3 className="text-2xl font-bold">Browser Extension</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    For Chrome, Brave, and Edge
                  </p>
                  <a
                    href="/defishard-wallet-v1.4.0.zip"
                    download
                    className="btn-primary w-full text-lg px-6 py-4 shadow-glow-lg inline-flex items-center justify-center gap-2"
                  >
                    <span>Download Extension</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </motion.div>

                {/* Mobile App */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass-effect rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-8 w-8 text-purple-400" />
                    <h3 className="text-2xl font-bold">Mobile App</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    For Android (Beta Testing)
                  </p>
                  <a
                    href="/defishard-v1.2.0-1763367532-20251117_151937.apk"
                    download
                    className="btn-primary w-full text-lg px-6 py-4 shadow-glow-lg inline-flex items-center justify-center gap-2 mb-6"
                  >
                    <span>Download APK</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-gray-300 mb-4 text-sm">
                      Join waitlist for iOS release
                    </p>
                    <EmailForm />
                  </div>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Free Forever</div>
                  <div className="text-sm text-gray-400">No hidden fees</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1 Minute</div>
                  <div className="text-sm text-gray-400">Setup time</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">All Chains</div>
                  <div className="text-sm text-gray-400">EVM compatible</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: 360 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: -360 
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

