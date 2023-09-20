import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CreateParticipationAccounts {
  event: PublicKey
  participation: PublicKey
  participant: PublicKey
  systemProgram: PublicKey
}

/**
 * Creates a Participation instance.
 *
 * * Participation PDA associated with the participant and event.
 *
 * Once this is invoked, a participation exists for the participant in an event.
 */
export function createParticipation(
  accounts: CreateParticipationAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.participation, isSigner: false, isWritable: true },
    { pubkey: accounts.participant, isSigner: true, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([254, 216, 249, 137, 80, 165, 17, 168])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
