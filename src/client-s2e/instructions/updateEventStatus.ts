import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UpdateEventStatusArgs {
  newStatus: types.StatusKind
}

export interface UpdateEventStatusAccounts {
  event: PublicKey
  publisher: PublicKey
  systemProgram: PublicKey
}

export const layout = borsh.struct([types.Status.layout("newStatus")])

/**
 * Updates the status of an Event.
 *
 * This can only be invoked by the publisher of the event.
 *
 * Once this is invoked, the event's status is updated to the new status given.
 */
export function updateEventStatus(
  args: UpdateEventStatusArgs,
  accounts: UpdateEventStatusAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.publisher, isSigner: true, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([181, 237, 172, 72, 61, 132, 77, 247])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      newStatus: args.newStatus.toEncodable(),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
