# skill-checker

A small Midnight contract that proves a user has a particular skill without revealing their private information.

This repository contains the compact contract sources, compiled artifacts, keys, and Zero-Knowledge IR (ZKIR) for the skill verification flow.

## Contents

- `contract/src/skill-verification.compact` — compact contract source
- `contract/src/witness.ts` — witness helper for tests or proving
(The file below will be create after sucessfully compiler the contract with **npm run compile** command)
- `contract/src/managed/skill-verification/` — compiled contract artifacts, keys and ZKIR
  - `compiler/contract-info.json` — compiler metadata
  - `contract/index.cjs` — compiled contract (CommonJS)
  - `keys/` — prover & verifier keys for submit/update/verify flows
  - `zkir/` — compiled ZKIR and bzkir artifacts used by proof tooling

## Quick start

Prerequisites

- Node.js (16+ recommended)
- `compact` compiler in your PATH (used by the `compile` script)

Install dependencies:

```bash
npm install
```

Compile the compact contract (this produces the managed/skill-verification folder):

```bash
npm run compile
```

Notes

- The `compile` script calls:

```
compact contract/src/skill-verification.compact contract/src/managed/skill-verification
```

- If you don't have `compact` installed, install it according to the Midnight docs for your platform.

## Using the artifacts

- The compiled contract code is present at `contract/src/managed/skill-verification/contract/index.cjs`.
- Keys for proving/verifying are in `contract/src/managed/skill-verification/keys/`.
- ZKIR files used by Midnight tooling are in `contract/src/managed/skill-verification/zkir/`.

You can import or require the compiled contract when building dapps or tests that use the Midnight runtime and proof providers listed in `package.json`.

## Scripts

- `npm run compile` — compile the compact contract (see above)

## Development & testing

This project doesn't ship CI or unit tests yet. For local testing you can use the Midnight testing utilities from the dependencies listed in `package.json` (for example `@midnight-ntwrk/midnight-js-testing`). Typical steps:

1. Compile the contract (`npm run compile`).
2. Use the keys in `contract/src/managed/skill-verification/keys/` to run or simulate proofs with your chosen Midnight proof provider.

If you'd like, I can add an example test harness showing a minimal proof/verify flow using `@midnight-ntwrk/midnight-js-testing` — tell me and I will scaffold it.

## Project metadata

- name: `skill-checker`
- version: `1.0.0`
- author: APIPAWE KATOTO DANIEL
- license: MIT

## License

This project is released under the MIT License. See the `LICENSE` file if present.

---
This project is part of the midnight hackathon, the UI will also be added soon. 
