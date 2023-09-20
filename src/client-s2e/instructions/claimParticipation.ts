import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimParticipationAccounts {
  event: PublicKey
  eventEscrow: PublicKey
  tokenMint: PublicKey
  participation: PublicKey
  participant: PublicKey
  claimTokenAccount: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

/**
 * Claim the Participation reward.
 *
 * This can only be invoked by the participant of the participation when can_claim is true and have not claimed yet.
 *
 * Once this is invoked, the participation's claimed is set to true and the fee is transferred to the participant token account.
 */
export function claimParticipation(
  accounts: ClaimParticipationAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.participation, isSigner: false, isWritable: true },
    { pubkey: accounts.participant, isSigner: true, isWritable: true },
    { pubkey: accounts.claimTokenAccount, isSigner: false, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([253, 205, 254, 84, 243, 197, 188, 203])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
