import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimPublicationAccounts {
  event: PublicKey
  eventEscrow: PublicKey
  tokenMint: PublicKey
  publisher: PublicKey
  claimTokenAccount: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

/**
 * Claim the Publisher reward.
 *
 * This can only be invoked by the publisher of the event when status is Completed and have not claimed yet.
 *
 * Once this is invoked, the event claimed is set to true and the fee is transferred to the publisher token account.
 */
export function claimPublication(
  accounts: ClaimPublicationAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.publisher, isSigner: true, isWritable: true },
    { pubkey: accounts.claimTokenAccount, isSigner: false, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([112, 91, 136, 175, 192, 62, 249, 5])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
