'use client'

import { motion } from 'framer-motion'
import { Smartphone, Shield, QrCode, Check, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Shield,
      title: 'Distributed Key Generation',
      description: 'Install extension and mobile app. Key shares are generated using secret sharing protocols.',
      detail: 'The complete private key never exists—not even during setup',
      color: 'primary',
    },
    {
      number: '02',
      icon: Shield,
      title: 'Browse DeFi Normally',
      description: 'Connect to any DeFi protocol and create transactions as usual.',
      detail: 'No change to your workflow',
      color: 'secondary',
    },
    {
      number: '03',
      icon: QrCode,
      title: 'Scan & Review',
      description: 'Extension generates QR code. Scan with mobile app and review complete transaction details.',
      detail: 'See exactly what you\'re signing',
      color: 'accent',
    },
    {
      number: '04',
      icon: Check,
      title: 'Distributed Signing',
      description: 'Tap to confirm. Both devices engage in threshold signing protocol using zero-knowledge proofs.',
      detail: 'The key is NEVER reconstructed',
      color: 'success',
    },
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-light">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bank-Grade Security in
            <br />
            <span className="text-gradient">Four Simple Steps</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Familiar 2FA experience powered by threshold cryptography
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary via-accent to-success opacity-30" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="card h-full group hover:scale-105 transition-transform">
                  {/* Number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-${step.color} to-${step.color}-dark flex items-center justify-center font-bold text-lg shadow-glow`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center`}>
                      <step.icon className={`h-8 w-8 text-${step.color}`} />
                    </div>
                    <div className={`absolute inset-0 blur-xl bg-${step.color}/30 group-hover:bg-${step.color}/50 transition-all`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{step.description}</p>
                  
                  {/* Detail */}
                  <div className={`glass rounded-lg p-3 border border-${step.color}/30`}>
                    <p className={`text-${step.color} text-xs font-semibold`}>{step.detail}</p>
                  </div>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            <span>Try DefiShard Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

