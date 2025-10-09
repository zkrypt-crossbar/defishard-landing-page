# MPC Technical Clarity - Critical Reading

## ⚠️ MUST READ BEFORE BUILDING LANDING PAGE

This document addresses the **most common and dangerous misconception** about MPC wallets. Getting this wrong undermines your entire value proposition.

---

## The Common Misconception ❌

Many people (including developers and some security folks) think MPC wallets work like this:

### Wrong Understanding:
1. Take a private key
2. **Split it into two parts** (like cutting a paper in half)
3. Store Part A on mobile, Part B on browser extension
4. When signing a transaction:
   - Part A sends to device with Part B
   - OR Part B sends to device with Part A
   - **Reassemble the complete private key** (temporarily in memory)
   - Sign the transaction with the complete key
   - Delete/clear the key from memory

### Why This Is Wrong:
- **The key exists during signing** - even if only for milliseconds
- **Single point of failure returns** - at the moment of reassembly
- **Malware can intercept** - during the brief window when key is complete
- **Memory dumps can capture** - the key during reconstruction
- **Not fundamentally different** from traditional wallets - just distributed storage

### The Critical Flaw:
**If the complete private key ever materializes anywhere, you haven't eliminated the single point of failure - you've just moved it around.**

---

## DefiShard's Actual Implementation ✅

### Correct Understanding (True MPC):

DefiShard uses **Threshold Signature Schemes (TSS)** with **Secret Sharing** and **Zero-Knowledge Proofs**.

### 1. Distributed Key Generation (DKG)

**Setup Phase:**
```
Mobile Device          Browser Extension
     │                        │
     ├───── DKG Protocol ─────┤
     │                        │
     ↓                        ↓
  Share s₁              Share s₂
  
CRITICAL: Complete private key (sk) NEVER EXISTS
Not on mobile, not on browser, nowhere
```

**How it works:**
- Both devices engage in cryptographic protocol
- Each device generates randomness
- Through multi-round communication, they derive their shares
- Shares are related to a public key (pk)
- **The private key corresponding to pk never materializes**
- Each share alone reveals ZERO information about the private key

**Mathematical Property:**
```
Public Key (pk) ← Derived from protocol
Private Key (sk) ← NEVER COMPUTED OR STORED
Share s₁ (mobile) ← Mathematically useless alone
Share s₂ (browser) ← Mathematically useless alone

s₁ + s₂ ≠ sk (this is not simple addition!)
Computing sk from s₁ is cryptographically impossible
Computing sk from s₂ is cryptographically impossible
```

### 2. Threshold Signature Generation

**Signing Phase:**
```
Transaction to sign: tx

Mobile Device                   Browser Extension
(has s₁, knows tx)              (has s₂, knows tx)
     │                                  │
     ├──────── TSS Protocol ────────────┤
     │    (Multiple rounds with         │
     │     zero-knowledge proofs)       │
     │                                  │
     ├──────────────────────────────────┤
     │                                  │
     ↓                                  ↓
   Partial                          Partial
 Signature σ₁                    Signature σ₂
     │                                  │
     └──────────> Combine <─────────────┘
                    ↓
            Valid Signature (r, s)
            for transaction tx
            
CRITICAL: Private key sk NEVER RECONSTRUCTED
Signature is valid for public key pk
But was never created by complete private key
```

**How it works:**
- Mobile prepares to sign transaction with s₁
- Browser prepares to sign transaction with s₂
- They engage in multi-round protocol:
  - Exchange commitments
  - Prove correct behavior with zero-knowledge proofs
  - Generate partial signatures
  - Combine partial signatures
- Result: Valid ECDSA signature (r, s)
- **At no point was the complete private key assembled**

**Security Properties:**
```
Attacker compromises mobile (gets s₁):
  ❌ Cannot derive sk
  ❌ Cannot forge signatures alone
  ❌ Cannot compute s₂
  ❌ Gains zero information about sk
  ✅ Assets remain safe

Attacker compromises browser (gets s₂):
  ❌ Cannot derive sk
  ❌ Cannot forge signatures alone
  ❌ Cannot compute s₁
  ❌ Gains zero information about sk
  ✅ Assets remain safe

Attacker needs BOTH devices simultaneously:
  Even then, cannot retroactively steal past transactions
  Must break the TSS protocol cryptography itself
```

---

## Side-by-Side Comparison

| Aspect | ❌ Wrong "Split Key" Approach | ✅ DefiShard True MPC |
|--------|---------------------------|---------------------|
| **Key Generation** | Create full key, then split it | DKG protocol, key never exists |
| **Key Storage** | Two halves of real key | Two shares that don't form the key |
| **During Signing** | Reassemble key → sign → delete | TSS protocol, no reconstruction |
| **Private Key Exists?** | YES (during signing) | NO (never, anywhere) |
| **Single Point of Failure?** | YES (moment of reassembly) | NO (truly distributed) |
| **If One Device Hacked** | Wait for signing moment | Attacker gains nothing |
| **Memory Safety** | Key in RAM during signing | Key never in RAM anywhere |
| **Mathematical Security** | Relies on secure deletion | Relies on cryptographic hardness |
| **Security Level** | Security theater | True MPC security |

---

## Why This Matters for Your Landing Page

### 1. Educated Users Will Call Out Mistakes
Security researchers and crypto OGs will notice if you describe the "wrong" approach. This damages credibility.

### 2. It's Your Core Differentiator
If you describe MPC incorrectly, you sound like every other wallet claiming "security."

### 3. The Wrong Explanation Undermines Your Value
If the key reassembles during signing, then:
- ❌ You still have a single point of failure
- ❌ Malware could intercept during signing
- ❌ Your security is no better than traditional wallets
- ❌ You're just adding UX friction for minimal gain

### 4. The Right Explanation Is Your Moat
When you correctly explain that:
- ✅ The key **never exists**
- ✅ TSS produces signatures **without reconstructing the key**
- ✅ Even compromising both devices doesn't reveal past keys
- ✅ This is **cryptographically proven** security

Then users understand you have **fundamental** security, not just "two-factor storage."

---

## How to Explain This on Your Landing Page

### For General Users (Hero/Features):

**Good:**
"Your private key never exists—anywhere, ever. We use threshold signatures to sign transactions without assembling the key."

**Bad:**
"We split your key between two devices and bring them together to sign."

---

### For Technical Users (Security Deep Dive):

**Good:**
"DefiShard implements 2-of-2 threshold ECDSA using distributed key generation (DKG) and threshold signature schemes (TSS). Your private key shares are generated such that the complete key never exists. During signing, both devices engage in a multi-round protocol using zero-knowledge proofs to produce valid signatures without reconstructing the private key. This is fundamentally different from split-key approaches that reassemble during signing."

**Bad:**
"Your private key is split into two encrypted parts stored on different devices."

---

### Address the Misconception Directly:

**Add This Section to Your Landing Page:**

> ### "Wait, Don't MPC Wallets Just Split Keys?"
> 
> If you've heard of MPC wallets, you might think they work by splitting your private key into pieces that reassemble during signing.
> 
> ❌ **That's not secure.** If the key reassembles (even briefly), you still have a single point of failure.
> 
> ✅ **DefiShard's True MPC**: We use threshold signature schemes with secret sharing and zero-knowledge proofs. Your private key **never exists** - not during setup, not during signing, not ever. Our protocol produces valid signatures without the key materializing anywhere.
> 
> This is the difference between security theater and cryptographic security.

---

## Technical Terms to Use Correctly

### ✅ Use These Terms:
- **Threshold Signature Scheme (TSS)**
- **Distributed Key Generation (DKG)**
- **Secret Sharing** (e.g., Shamir's Secret Sharing)
- **Zero-Knowledge Proofs**
- **Multi-Party Computation (MPC)**
- **Key shares** (not "key parts" or "key halves")
- **Cooperative signing** (not "reassembly")
- **Threshold ECDSA**

### ❌ Avoid These Phrases:
- "Split your key into two parts"
- "Cut the key in half"
- "Bring the pieces together to sign"
- "Reassemble the key"
- "Merge the parts during signing"
- "Each device has half the key"
- "Combine the halves"

### ✅ Instead Say:
- "Generate key shares using secret sharing"
- "Distribute key generation"
- "Cooperative signing without reconstruction"
- "Threshold signatures"
- "Key never exists anywhere"
- "Each device has a cryptographic share"
- "Shares cooperate to sign"

---

## Red Flags in Your Messaging

If you find yourself saying any of these, **stop and revise**:

1. ❌ "Each part of the key..."
2. ❌ "When we need to sign, we combine..."
3. ❌ "The key is reassembled temporarily..."
4. ❌ "We merge the shares to sign..."
5. ❌ "Your private key is split in half..."
6. ❌ "Both devices send their portion..."

**All of these describe the WRONG approach.**

---

## Green Flags in Your Messaging

✅ "Your private key never exists"
✅ "Threshold signatures without reconstruction"
✅ "Secret sharing with zero-knowledge proofs"
✅ "Cryptographic cooperation"
✅ "Key shares are mathematically useless alone"
✅ "Distributed key generation protocol"
✅ "Sign without assembling the key"

---

## For Developers Building the Landing Page

When you see the Brief or other docs mention "split," understand it means:
- Generate using DKG (not split an existing key)
- Distribute key shares (not key parts)
- TSS signing (not reassembly)

If you find unclear language in the other docs, refer back to this document for the correct technical understanding.

---

## Diagram for Your Landing Page

**Wrong Approach (DO NOT SHOW THIS):**
```
     Private Key (complete)
           ↓
       Split into 2
          / \
         /   \
    Part A   Part B
    (mobile) (browser)
         \   /
          \ /
    Reassemble to Sign ← SINGLE POINT OF FAILURE!
```

**Correct Approach (SHOW THIS):**
```
   DKG Protocol
        ↓
   Public Key (pk)
        ↓
  ┌─────────────┐
  │             │
Share s₁      Share s₂
(mobile)      (browser)
  │             │
  └──── TSS ────┘
        ↓
   Signature (r,s)

Note: Private key (sk) 
never exists anywhere
```

---

## FAQ to Add to Landing Page

### Q: Is this really more secure than splitting a key?

**A:** Yes, fundamentally. "Splitting and reassembling" means the key exists during signing—a hacker could intercept it then. DefiShard's threshold signatures mean the key **never exists**, not even for a microsecond. There's no moment to intercept because there's nothing to intercept.

### Q: How can you sign without the private key?

**A:** Through cryptographic magic called threshold signatures. It's like two people jointly signing a document without either seeing the complete signature. The math works out such that the combined signature is valid for the public key, but neither party ever had the complete private key.

### Q: What if someone gets both my devices?

**A:** Even with both devices, an attacker can't retroactively derive your private key from the shares. They'd need to compromise both devices **at the same moment** AND break the cryptographic protocol to forge new signatures. Your past transactions and key remain secure.

---

## Summary: What to Remember

1. ✅ **Key NEVER exists** - not during setup, not during signing, nowhere
2. ✅ **Use threshold signatures** (TSS) with secret sharing
3. ✅ **Sign without reconstruction** - this is the core innovation
4. ✅ **Cryptographic security** - not just "careful memory management"
5. ✅ **Explain the difference** - address misconceptions directly

**If you take away one thing:** 
The complete private key never materializing anywhere is not a claim - it's a mathematical property of threshold signature schemes. This is what makes DefiShard fundamentally more secure.

---

## For Review: Updated Key Messages

### Headline Options:
1. "Your Private Key Never Exists. Your Assets Always Safe."
2. "True MPC: The Key That Never Was"
3. "Threshold Signatures. Zero Key Assembly. Total Security."

### Tagline:
"DefiShard uses threshold signatures with secret sharing—your private key never exists anywhere, making your DeFi assets truly uncompromisable."

### Security Deep Dive Intro:
"Most MPC solutions claim security by storing key pieces separately. DefiShard goes further: we use threshold ECDSA with distributed key generation, so your private key never exists—not during setup, not during signing, not ever. This is cryptographic security, not storage security."

---

**This is the technical hill to die on. Get this right, and your security story is unassailable.**

---

**Document Version:** 1.0  
**Created:** October 9, 2025  
**Purpose:** Ensure accurate technical representation of MPC technology  
**Importance:** CRITICAL - Read before writing any landing page copy

