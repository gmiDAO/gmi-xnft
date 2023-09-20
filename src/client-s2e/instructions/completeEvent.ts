import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CompleteEventAccounts {
  event: PublicKey
  participation: PublicKey
  publisher: PublicKey
  systemProgram: PublicKey
}

/**
 * Completes an Event and lets the winner participant claim the reward.
 *
 * This can only be invoked by the publisher of the event, when the event result is known.
 *
 * Once this is invoked, the event's status is updated to completed and can_claim is set to true for the winner participant.
 */
export function completeEvent(
  accounts: CompleteEventAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.participation, isSigner: false, isWritable: true },
    { pubkey: accounts.publisher, isSigner: true, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([186, 119, 43, 87, 68, 151, 182, 27])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
