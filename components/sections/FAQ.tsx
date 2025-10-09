'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How is this different from a hardware wallet?',
      answer: 'Hardware wallets are secure but inconvenient for active DeFi use. DefiShard provides hardware wallet-level security with software wallet convenience. You don\'t need to physically connect anything—just scan a QR code with your phone.',
    },
    {
      question: 'What if I lose my phone?',
      answer: 'You can recover using your backup device, social recovery contacts, or encrypted seed phrase backup. Losing your phone doesn\'t mean losing your assets—you just need to set up recovery options during initial setup.',
    },
    {
      question: 'Does this work with all DeFi apps?',
      answer: 'Yes! DefiShard is fully compatible with any dApp that supports standard wallet connections—Uniswap, Aave, Compound, OpenSea, and thousands more. We support Ethereum and all major EVM chains.',
    },
    {
      question: 'How fast is the transaction process?',
      answer: 'Typically 5-10 seconds from scanning the QR code to confirmation. The extra second of security is worth it to prevent a lifetime of regret.',
    },
    {
      question: 'Is my private key ever stored anywhere?',
      answer: 'No, never. Using distributed key generation, your complete private key never exists—not during setup, not during signing, not ever. This is fundamentally different from wallets that store encrypted keys.',
    },
    {
      question: 'What if someone steals both my phone and computer?',
      answer: 'Even with both devices, an attacker cannot retroactively derive your private key from the shares. Your devices are also protected with biometric security and passcodes.',
    },
  ]

  return (
    <section id="faq" className="section">
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-light">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-strong rounded-2xl p-6 text-left hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Still have questions?{' '}
            <a href="#" className="text-primary hover:text-primary-light transition-colors">
              Join our Discord
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

