'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { value: '$1B+', label: 'Lost to wallet hacks since 2022' },
    { value: '9,000+', label: 'Wallets drained in Slope attack' },
    { value: '$625M', label: 'Stolen in Ronin Network hack' },
    { value: '$100M+', label: 'Lost in Atomic Wallet breach' },
  ]

  return (
    <section className="section py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The Extension Wallet Crisis
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-300 text-lg">
              These were all <span className="text-white font-semibold">"secure" users</span> who did nothing wrong.
              <br className="hidden md:block" />
              The problem is <span className="text-danger font-semibold">architectural</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

