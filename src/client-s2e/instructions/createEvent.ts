import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CreateEventArgs {
  name: string
  params: types.CreateEventParamsFields
}

export interface CreateEventAccounts {
  tokenMint: PublicKey
  event: PublicKey
  eventEscrow: PublicKey
  publisher: PublicKey
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
}

export const layout = borsh.struct([
  borsh.str("name"),
  types.CreateEventParams.layout("params"),
])

/**
 * Creates an Event instance.
 *
 * * Event PDA associated with the publisher(payer) and event's name.
 *
 * Once this is invoked, an event exists with either Waiting or Open status.
 */
export function createEvent(
  args: CreateEventArgs,
  accounts: CreateEventAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.tokenMint, isSigner: false, isWritable: false },
    { pubkey: accounts.event, isSigner: false, isWritable: true },
    { pubkey: accounts.eventEscrow, isSigner: false, isWritable: true },
    { pubkey: accounts.publisher, isSigner: true, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([49, 219, 29, 203, 22, 98, 100, 87])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      name: args.name,
      params: types.CreateEventParams.toEncodable(args.params),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
