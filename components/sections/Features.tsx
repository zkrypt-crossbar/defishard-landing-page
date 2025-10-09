'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Globe, Zap, Eye, RotateCcw } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'MPC 2-of-2 Security',
      description: 'Threshold signatures with secret sharing and zero-knowledge proofs. Your private key never exists—anywhere, ever.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: Smartphone,
      title: 'Mobile Transaction Review',
      description: 'Review every detail on your phone. Catch scams before signing. Screenshot important transactions.',
      gradient: 'from-secondary to-secondary-dark',
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works with Uniswap, Aave, Compound, and all your favorite DeFi protocols. Support for Ethereum and major EVM chains.',
      gradient: 'from-accent to-accent-dark',
    },
    {
      icon: Zap,
      title: 'Seamless UX',
      description: 'Quick QR code scanning. Transactions complete in seconds. Familiar 2FA-style workflow you already trust.',
      gradient: 'from-success to-primary',
    },
    {
      icon: Eye,
      title: 'Active Protection',
      description: 'Real-time threat detection. Warning system for suspicious transactions. Automatic security updates.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: RotateCcw,
      title: 'Easy Recovery',
      description: 'Secure backup options and social recovery available. Never lose access to your assets.',
      gradient: 'from-secondary to-success',
    },
  ]

  return (
    <section id="features" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need
            <br />
            <span className="text-gradient">To Stay Secure</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with the security-conscious DeFi user in mind
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform"
            >
              {/* Icon with gradient */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 shadow-glow`}>
                  <feature.icon className="h-full w-full text-white" />
                </div>
                <div className={`absolute inset-0 blur-2xl bg-gradient-to-br ${feature.gradient} opacity-30 group-hover:opacity-50 transition-all`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

