'use client'

import { motion } from 'framer-motion'
import { Lock, AlertTriangle, Check, Code } from 'lucide-react'

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
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8 border-2 border-danger/30">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-6 w-6 text-danger flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-danger">What MPC is NOT</h3>
                  <p className="text-gray-400">
                    Many think MPC means splitting a key into parts, then sending them back together to sign. 
                    <span className="text-white font-semibold"> This is WRONG and not secure</span>—if the key reassembles anywhere, you still have a single point of failure.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border-2 border-success/30">
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-success">DefiShard\'s True MPC</h3>
                  <p className="text-gray-400 mb-4">
                    We use threshold signature schemes (TSS) with secret sharing and zero-knowledge proofs.
                  </p>
                  <div className="space-y-3">
                    <div className="glass rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Distributed Key Generation (DKG)</div>
                      <div className="text-xs text-gray-400">Key shares generated so complete key never materializes</div>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Threshold Signatures</div>
                      <div className="text-xs text-gray-400">Both devices cooperate to sign without reconstructing key</div>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Zero-Knowledge Proofs</div>
                      <div className="text-xs text-gray-400">Cryptographic proof without revealing the key</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Distributed Signing Flow</h3>
            
            <div className="space-y-6">
              {/* Setup Phase */}
              <div className="glass rounded-xl p-4 border border-primary/30">
                <div className="text-sm font-semibold text-primary mb-3">Setup: DKG Protocol</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-2">Share s₁</div>
                    <div className="font-mono text-xs">Mobile</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-2">Share s₂</div>
                    <div className="font-mono text-xs">Browser</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-3 text-center">
                  Complete key never exists
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              </div>

              {/* Signing Phase */}
              <div className="glass rounded-xl p-4 border border-secondary/30">
                <div className="text-sm font-semibold text-secondary mb-3">Signing: TSS Protocol</div>
                <div className="space-y-3">
                  <div className="glass rounded-lg p-3">
                    <div className="text-xs text-gray-400">Multi-round communication</div>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <div className="text-xs text-gray-400">Zero-knowledge proofs</div>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <div className="text-xs text-gray-400">Partial signatures combined</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-secondary to-success" />
              </div>

              {/* Result */}
              <div className="glass rounded-xl p-4 border border-success/30 text-center">
                <div className="text-sm font-semibold text-success mb-2">Valid Signature</div>
                <div className="text-xs text-gray-400">Key never reconstructed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Implementation - Pseudo Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-full mb-4">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-light">Technical Deep Dive</span>
            </div>
            <h3 className="text-2xl font-bold">How It Actually Works</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Phase 1: Distributed Key Generation */}
            <div className="glass-strong rounded-2xl p-6 border border-primary/30">
              <h4 className="text-lg font-bold mb-4 text-primary">Phase 1: Distributed Key Generation (DKG)</h4>
              <div className="bg-dark-elevated rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`// Mobile Device
function generateKeyShare1() {
  r1 = random()
  commitment1 = commit(r1)
  send(commitment1, browser)
  
  // Receive commitment from browser
  commitment2 = receive()
  
  // Exchange and verify
  share1 = derive(r1, commitment2)
  publicKey = derive(share1, share2)
  
  return share1 // Keep secret
}

// Private key NEVER exists
// Only shares s1, s2 exist`}</pre>
              </div>
            </div>

            {/* Phase 2: Distributed Signing */}
            <div className="glass-strong rounded-2xl p-6 border border-secondary/30">
              <h4 className="text-lg font-bold mb-4 text-secondary">Phase 2: Distributed Signing (TSS)</h4>
              <div className="bg-dark-elevated rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`// Mobile Device
function sign(transaction, share1) {
  // Round 1: Generate partial signature
  k1 = random()
  R1 = k1 * G
  send(R1, browser)
  
  // Round 2: Combine commitments
  R2 = receive()
  R = R1 + R2
  
  // Round 3: Sign with share
  s1 = sign_partial(transaction, share1, k1, R)
  send(s1, browser)
  
  // Final signature (r, s)
  // Never computed: privateKey
}`}</pre>
              </div>
            </div>

            {/* Security Properties */}
            <div className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-success/30">
              <h4 className="text-lg font-bold mb-4 text-success">Security Properties</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-mono text-primary mb-2">share1 alone</div>
                  <div className="text-xs text-gray-400">Reveals zero information about private key</div>
                  <div className="text-xs text-danger mt-2">❌ Cannot sign</div>
                </div>
                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-mono text-secondary mb-2">share2 alone</div>
                  <div className="text-xs text-gray-400">Reveals zero information about private key</div>
                  <div className="text-xs text-danger mt-2">❌ Cannot sign</div>
                </div>
                <div className="bg-dark-elevated rounded-xl p-4">
                  <div className="text-sm font-mono text-success mb-2">share1 + share2</div>
                  <div className="text-xs text-gray-400">Cooperate via protocol</div>
                  <div className="text-xs text-success mt-2">✓ Can sign without reconstructing key</div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Critical Difference</h4>
                  <p className="text-gray-300 mb-3">
                    The complete private key is never computed, not even for a microsecond. 
                    The signature is produced through cryptographic cooperation between shares.
                  </p>
                  <div className="bg-dark-elevated rounded-lg p-3 font-mono text-sm">
                    <div className="text-danger">❌ <span className="text-gray-400">Traditional:</span> privateKey = decrypt(share1 + share2)</div>
                    <div className="text-success mt-2">✓ <span className="text-gray-400">DefiShard:</span> signature = MPC_sign(share1, share2, tx)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

