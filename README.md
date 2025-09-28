# skill-checker

A Midnight compact contract that proves a user has a particular skill without revealing their private information.

This repository contains the contract source, a witness helper, compiled artifacts, keys, and ZKIR files produced by the Midnight toolchain.

## Repository layout

- `package.json` — project metadata and scripts
- `contract/src/skill-verification.compact` — compact contract source
- `contract/src/witness.ts` — witness helper / test utilities

<br/>
(The file below will be create after sucessfully compiler the contract with npm run compile command)
- `contract/src/managed/skill-verification/` — compiled artifacts produced by the `compile` script
  - `compiler/contract-info.json` — compiler metadata
  - `contract/index.cjs` — compiled contract module
  - `keys/` — prover & verifier keys for submit/update/verify flows
  - `zkir/` — ZKIR and .bzkir artifacts used by proof tooling
- `tests/` — (optional) tests and example harnesses

## Quick start

Prerequisites

- Node.js 16+ (recommended)
- The `compactc` compiler available in your PATH (used by the `compile` script)

Install dependencies:

```bash
npm install
```

Compile the compact contract (this writes into `contract/src/managed/skill-verification`):

```bash
npm run compile
```

The `compile` script runs:

```
compactc contract/src/skill-verification.compact contract/src/managed/skill-verification
```

If `compactc` is not installed, follow Midnight's documentation to install or build the compiler for your platform.

## Using the compiled artifacts

- The compiled contract is available at `contract/src/managed/skill-verification/contract/index.cjs` and can be required/imported from Node code that uses the Midnight runtime.
- Use the keys in `contract/src/managed/skill-verification/keys/` for generating and verifying proofs.
- ZKIR files in `contract/src/managed/skill-verification/zkir/` are used by Midnight proof tooling and providers.

The project's `package.json` already lists Midnight runtime and helper packages such as `@midnight-ntwrk/compact-runtime`, `@midnight-ntwrk/midnight-js-testing`, and proof providers.

## Scripts

- `npm run compile` — compile the compact contract
- `npm test` — placeholder (no tests defined yet)

## Development notes

Common local workflow:

1. Make changes to `contract/src/skill-verification.compact`.
2. Run `npm run compile` to regenerate managed artifacts.
3. Use the compiled contract, keys, and ZKIR in your dapp or test harness.

If you want, I can add:

- A minimal test harness demonstrating a proof + verify cycle using `@midnight-ntwrk/midnight-js-testing`.
- CI configuration to automatically compile and run tests.

## Project metadata

- name: `skill-checker`
- version: `1.0.0`
- author: APIPAWE KATOTO DANIEL
- license: MIT

## License

This project is distributed under the MIT License.

---
This project is part of the midnight hackathon, the UI will also be added soon.