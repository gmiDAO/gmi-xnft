import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimSupportAccounts {
  event: PublicKey
  eventEscrow: PublicKey
  tokenMint: PublicKey
  participation: PublicKey
  support: PublicKey
  supporter: PublicKey
  claimTokenAccount: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

/**
 * Claim the Support reward.
 *
 * This can only be invoked by the supporter of the support when have not claimed yet.
 *
 * Once this is invoked, the supporter's claimed is set to true and the corresponding reward is transferred to the supporter token account.
 */
export function claimSupport(
  accounts: ClaimSupportAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.participation, isSigner: false, isWritable: false },
    { pubkey: accounts.support, isSigner: false, isWritable: true },
    { pubkey: accounts.supporter, isSigner: true, isWritable: true },
    { pubkey: accounts.claimTokenAccount, isSigner: false, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([112, 28, 63, 77, 37, 37, 36, 16])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
