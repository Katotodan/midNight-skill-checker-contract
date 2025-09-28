import { WitnessContext } from '@midnight-ntwrk/compact-runtime';
import { Ledger } from './managed/skill-verification/contract/index.cjs';

export type SkillProofPrivateState = {
  secretKey: Uint8Array;
  skillProof: Uint8Array;
};

export const witnesses = {
  getSkillProof: (
    {
      privateState,
    }: WitnessContext<Ledger, SkillProofPrivateState>): [SkillProofPrivateState, Uint8Array] =>
    [privateState, privateState.skillProof],

  secretKey: ({
    privateState,
  }: WitnessContext<Ledger, SkillProofPrivateState>): [SkillProofPrivateState, Uint8Array] =>
    [privateState, privateState.secretKey],
};
