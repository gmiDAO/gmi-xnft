import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UpdateSupportAmountArgs {
  amount: BN
  transferType: types.TransferTypeKind
}

export interface UpdateSupportAmountAccounts {
  event: PublicKey
  eventEscrow: PublicKey
  tokenMint: PublicKey
  participation: PublicKey
  support: PublicKey
  supporter: PublicKey
  supporterTokenAccount: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

export const layout = borsh.struct([
  borsh.u64("amount"),
  types.TransferType.layout("transferType"),
])

/**
 * Update the amount of a Support instance.
 *
 * This can only be invoked by the supporter of the support.
 *
 * Once this is invoked, the support's amount is updated to the new amount given and tokens are transferred accordingly.
 */
export function updateSupportAmount(
  args: UpdateSupportAmountArgs,
  accounts: UpdateSupportAmountAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.participation, isSigner: false, isWritable: true },
    { pubkey: accounts.support, isSigner: false, isWritable: true },
    { pubkey: accounts.supporter, isSigner: true, isWritable: true },
    {
      pubkey: accounts.supporterTokenAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([84, 25, 170, 81, 24, 117, 8, 154])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      amount: args.amount,
      transferType: args.transferType.toEncodable(),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
