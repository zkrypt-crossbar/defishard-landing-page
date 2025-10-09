'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

export default function Security() {

  return (
    <section id="security" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full mb-6">
            <Lock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-light">Security Deep Dive</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How True MPC
            <br />
            <span className="text-gradient">Actually Works</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Misconception Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 border border-white/20 mb-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Common Misunderstanding</h3>
              <p className="text-gray-300 text-lg mb-4">
                Many people think MPC means <span className="text-white font-semibold">"split the key into two parts, then send them back together to sign."</span>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">This is incorrect.</span> If the key is ever reassembled (even temporarily), 
                you still have a single point of failure at that moment. Malware could intercept it during reassembly.
              </p>
            </div>
          </motion.div>

          {/* Comparison: Wrong vs Right */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* WRONG: Split Key Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 border-2 border-danger"
            >
              <h3 className="text-xl font-bold mb-6">Wrong: "Split Key" Signing</h3>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold text-danger mb-2">Step 1: Split Key</div>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="glass rounded-lg p-2 text-center text-xs">Part A</div>
                    <div className="glass rounded-lg p-2 text-center text-xs">Part B</div>
                  </div>
                  <div className="text-xs text-gray-400">Store separately on devices</div>
                </div>

                {/* Step 2 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-danger/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold text-danger mb-2">Step 2: Send Parts Together</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-xs glass rounded px-2 py-1">Part A →</div>
                    <div className="text-xs glass rounded px-2 py-1">← Part B</div>
                  </div>
                  <div className="text-xs text-gray-400">Transfer to one device</div>
                </div>

                {/* Step 3 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-danger/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4 border-2 border-danger/50">
                  <div className="text-sm font-semibold text-danger mb-2">Step 3: Reassemble Key</div>
                  <div className="glass rounded-lg p-2 text-center text-xs mb-2 border border-danger/50">
                    Complete Private Key
                  </div>
                  <div className="text-xs text-danger font-semibold uppercase tracking-wider">
                    SINGLE POINT OF FAILURE
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-danger/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold mb-2">Step 4: Sign & Delete</div>
                  <div className="text-xs text-gray-400">Hope malware didn\'t catch it</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Distributed Signing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 border-2 border-success"
            >
              <h3 className="text-xl font-bold mb-6">Correct: Distributed Signing</h3>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold text-success mb-2">Step 1: DKG Protocol</div>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="glass rounded-lg p-2 text-center text-xs">Share s₁</div>
                    <div className="glass rounded-lg p-2 text-center text-xs">Share s₂</div>
                  </div>
                  <div className="text-xs text-gray-400">Generated so key never exists</div>
                </div>

                {/* Step 2 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-success/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold text-success mb-2">Step 2: Exchange Commitments</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-xs glass rounded px-2 py-1">C₁ →</div>
                    <div className="text-xs glass rounded px-2 py-1">← C₂</div>
                  </div>
                  <div className="text-xs text-gray-400">Zero-knowledge proofs only</div>
                </div>

                {/* Step 3 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-success/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4 border-2 border-success/50">
                  <div className="text-sm font-semibold text-success mb-2">Step 3: Compute Partial Signatures</div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="glass rounded-lg p-2 text-center text-xs">σ₁ = f(s₁)</div>
                    <div className="glass rounded-lg p-2 text-center text-xs">σ₂ = f(s₂)</div>
                  </div>
                  <div className="text-xs text-success font-semibold uppercase tracking-wider">
                    NO KEY RECONSTRUCTION
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-success/30" />
                </div>

                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-semibold text-success mb-2">Step 4: Combine Signatures</div>
                  <div className="glass rounded-lg p-2 text-center text-xs mb-2">
                    Valid Signature (r, s)
                  </div>
                  <div className="text-xs text-gray-400">Key never assembled</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-strong rounded-2xl p-8 border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">The Critical Difference</h3>
              <p className="text-gray-300 text-lg mb-6">
                In distributed signing, the complete private key <span className="text-white font-semibold">never exists anywhere</span>—not in memory, not in transit, not even for a microsecond. 
                The signature is produced through cryptographic cooperation between shares.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-dark-elevated rounded-xl p-4 border border-danger/30">
                  <div className="text-sm font-semibold text-danger mb-2">Wrong Approach</div>
                  <div className="font-mono text-xs text-gray-400">
                    privateKey = part1 + part2<br />
                    signature = sign(privateKey, tx)
                  </div>
                </div>
                <div className="bg-dark-elevated rounded-xl p-4 border border-success/30">
                  <div className="text-sm font-semibold text-success mb-2">DefiShard Approach</div>
                  <div className="font-mono text-xs text-gray-400">
                    σ₁ = sign_partial(share1, tx)<br />
                    σ₂ = sign_partial(share2, tx)<br />
                    signature = combine(σ₁, σ₂)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

