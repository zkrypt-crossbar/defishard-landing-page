'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

export default function Problem() {
  const attacks = [
    {
      name: 'Ronin Network',
      date: 'March 2022',
      amount: '$625M',
      victims: 'Axie Infinity users',
      cause: 'Compromised private keys',
    },
    {
      name: 'Slope Wallet',
      date: 'August 2022',
      amount: '$8M+',
      victims: '9,000+ wallets',
      cause: 'Keys logged to server',
    },
    {
      name: 'LastPass Breach',
      date: 'December 2022',
      amount: '$35M+',
      victims: 'Crypto users',
      cause: 'Password manager hack',
    },
    {
      name: 'Atomic Wallet',
      date: 'June 2023',
      amount: '$100M+',
      victims: '5,500+ wallets',
      cause: 'Wallet vulnerability',
    },
  ]

  return (
    <section id="problem" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full mb-6">
            <AlertCircle className="h-4 w-4 text-danger" />
            <span className="text-sm font-medium text-danger">The Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Extension Wallets Are
            <br />
            <span className="text-gradient">Single Points of Failure</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Over $1 billion lost since 2022. These aren\'t theoretical risks—
            these are real people who lost everything because their wallet software was compromised.
          </p>
        </motion.div>

        {/* Attacks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {attacks.map((attack, index) => (
            <motion.div
              key={attack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-danger/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{attack.name}</h3>
                  <p className="text-sm text-gray-400">{attack.date}</p>
                </div>
                <div className="text-2xl font-bold text-danger">{attack.amount}</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-sm">Victims:</span>
                  <span className="text-sm font-semibold">{attack.victims}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-sm">Cause:</span>
                  <span className="text-sm">{attack.cause}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Traditional Wallet */}
          <div className="glass-strong rounded-2xl p-8 border-2 border-danger">
            <h3 className="text-2xl font-bold mb-6">Traditional Extension</h3>
            
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-1">Private key exists in browser</div>
                <div className="text-sm text-gray-400">Complete key stored, ready to steal</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">Single point of failure</div>
                <div className="text-sm text-gray-400">One compromise = total loss</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">Vulnerable to malware</div>
                <div className="text-sm text-gray-400">Extensions can read everything</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">No transaction review</div>
                <div className="text-sm text-gray-400">Click-approve habit leads to scams</div>
              </div>
            </div>
          </div>

          {/* DefiShard */}
          <div className="glass-strong rounded-2xl p-8 border-2 border-success">
            <h3 className="text-2xl font-bold mb-6">DefiShard</h3>
            
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-1">Key never exists anywhere</div>
                <div className="text-sm text-gray-400">Distributed key generation—nothing to steal</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">No single point of failure</div>
                <div className="text-sm text-gray-400">Both devices required, even then key doesn\'t exist</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">Malware can\'t steal keys</div>
                <div className="text-sm text-gray-400">Key shares are cryptographically useless alone</div>
              </div>
              
              <div>
                <div className="font-semibold mb-1">Mobile transaction review</div>
                <div className="text-sm text-gray-400">See exactly what you\'re signing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

