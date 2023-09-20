import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CreateSupportArgs {
  amount: BN
}

export interface CreateSupportAccounts {
  event: PublicKey
  eventEscrow: PublicKey
  tokenMint: PublicKey
  participation: PublicKey
  support: PublicKey
  supporter: PublicKey
  fundingTokenAccount: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

export const layout = borsh.struct([borsh.u64("amount")])

/**
 * Creates a Support instance.
 *
 * * Support PDA associated with the supporter and participation (participation relates a participant within an event).
 *
 * Once this is invoked, a support exists for the participation
 */
export function createSupport(
  args: CreateSupportArgs,
  accounts: CreateSupportAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.participation, isSigner: false, isWritable: true },
    { pubkey: accounts.support, isSigner: false, isWritable: true },
    { pubkey: accounts.supporter, isSigner: true, isWritable: true },
    { pubkey: accounts.fundingTokenAccount, isSigner: false, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([160, 221, 190, 48, 68, 87, 22, 222])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      amount: args.amount,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
