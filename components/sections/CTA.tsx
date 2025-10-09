'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Chrome, Smartphone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section">
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

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 shadow-glow-lg">
                  <Chrome className="h-6 w-6" />
                  <span>Download Extension</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button className="btn-secondary text-lg px-8 py-4">
                  <Smartphone className="h-6 w-6" />
                  <span>Get Mobile App</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Free Forever</div>
                  <div className="text-sm text-gray-400">No hidden fees</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5 Minutes</div>
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

