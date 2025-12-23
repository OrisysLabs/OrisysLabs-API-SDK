Build privacy-preserving applications with our comprehensive SDK.

INSTALLATION:
```bash
npm install @orisys/core @orisys/zk @orisys/x402
```

BASIC USAGE:
```typescript
import { OrisysClient, ZKProof } from '@orisys/core';
import { X402Bridge } from '@orisys/x402';

// Initialize client
const client = new OrisysClient({
  network: 'mainnet',
  keypair: wallet.keypair
});

// Create shielded transfer
const transfer = await client.shield({
  amount: encrypted(value),
  recipient: shieldedAddress,
  proof: ZKProof.generate(),
});

// Cross-chain transfer
await X402Bridge.transfer({
  from: 'solana',
  to: 'ethereum',
  ...transfer
});
```

AVAILABLE PACKAGES:
▸ @orisys/core - Core privacy primitives



----------------------


OrisysLabs is a research collective focused on experiments around terminals, identity, and how we interact with AI systems through raw interfaces.

We build privacy-first infrastructure on Solana, secured by zero-knowledge proofs, and connected through the x402 protocol for cross-chain interoperability.

Our mission is to strip away the abstractions between humans and machines. The command line is the truest form of human-machine dialogue. We believe in transparency through verifiability, not exposure.

Core Technologies:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Zero-Knowledge Proofs - Privacy without compromise
▸ Solana Integration - Speed and scalability
▸ x402 Protocol - Cross-chain privacy bridge
▸ Terminal-First Design - Raw AI interfaces


----------------------


OrisysLabs uses zk-SNARK circuits to enforce transaction correctness while keeping all sensitive details hidden within cryptographic proofs.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts
▸ Sender identity
▸ Receiver identity  
▸ Metadata and behavioral patterns

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership
▸ Non-negative amounts and balance conservation
▸ Merkle tree membership of notes
▸ Creation of new valid commitments

Implementation Example:
```typescript
import { ZKProof } from '@orisys/zk';

const proof = await ZKProof.generate({
  statement: "balance >= amount",
  witness: privateData,
  public: commitment
});

await ZKProof.verify(proof); // ✓ Verified
```
▸ @orisys/zk - Zero-knowledge proof system
▸ @orisys/x402 - Cross-chain bridge
▸ @orisys/terminal - Terminal interface SDK
