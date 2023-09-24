import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface SupportFields {
  /** The pubkey of the supporter (32). */
  supporter: PublicKey
  /** The pubkey of the participation the supporter is supporting(32). */
  participation: PublicKey
  /** The bump nonce for the Support's PDA (1). */
  bump: number
  /** Amount of funds transferred to the Participation (8). */
  amount: BN
  /** The unix timestamp of account creation (8). */
  createdTs: BN
  /** The unix timestamp of last account update (8). */
  updatedTs: BN
  /** Boolean flag to indicate if the supporter claimed their fee (1). */
  claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export interface SupportJSON {
  /** The pubkey of the supporter (32). */
  supporter: string
  /** The pubkey of the participation the supporter is supporting(32). */
  participation: string
  /** The bump nonce for the Support's PDA (1). */
  bump: number
  /** Amount of funds transferred to the Participation (8). */
  amount: string
  /** The unix timestamp of account creation (8). */
  createdTs: string
  /** The unix timestamp of last account update (8). */
  updatedTs: string
  /** Boolean flag to indicate if the supporter claimed their fee (1). */
  claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export class Support {
  /** The pubkey of the supporter (32). */
  readonly supporter: PublicKey
  /** The pubkey of the participation the supporter is supporting(32). */
  readonly participation: PublicKey
  /** The bump nonce for the Support's PDA (1). */
  readonly bump: number
  /** Amount of funds transferred to the Participation (8). */
  readonly amount: BN
  /** The unix timestamp of account creation (8). */
  readonly createdTs: BN
  /** The unix timestamp of last account update (8). */
  readonly updatedTs: BN
  /** Boolean flag to indicate if the supporter claimed their fee (1). */
  readonly claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  readonly reserved: Array<number>

  static readonly discriminator = Buffer.from([
    247, 108, 3, 111, 84, 51, 217, 107,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("supporter"),
    borsh.publicKey("participation"),
    borsh.u8("bump"),
    borsh.u64("amount"),
    borsh.i64("createdTs"),
    borsh.i64("updatedTs"),
    borsh.bool("claimed"),
    borsh.array(borsh.u8(), 32, "reserved"),
  ])

  constructor(fields: SupportFields) {
    this.supporter = fields.supporter
    this.participation = fields.participation
    this.bump = fields.bump
    this.amount = fields.amount
    this.createdTs = fields.createdTs
    this.updatedTs = fields.updatedTs
    this.claimed = fields.claimed
    this.reserved = fields.reserved
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Support | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[],
    programId: PublicKey = PROGRAM_ID
  ): Promise<Array<Support | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(programId)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): Support {
    if (!data.slice(0, 8).equals(Support.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Support.layout.decode(data.slice(8))

    return new Support({
      supporter: dec.supporter,
      participation: dec.participation,
      bump: dec.bump,
      amount: dec.amount,
      createdTs: dec.createdTs,
      updatedTs: dec.updatedTs,
      claimed: dec.claimed,
      reserved: dec.reserved,
    })
  }

  toJSON(): SupportJSON {
    return {
      supporter: this.supporter.toString(),
      participation: this.participation.toString(),
      bump: this.bump,
      amount: this.amount.toString(),
      createdTs: this.createdTs.toString(),
      updatedTs: this.updatedTs.toString(),
      claimed: this.claimed,
      reserved: this.reserved,
    }
  }

  static fromJSON(obj: SupportJSON): Support {
    return new Support({
      supporter: new PublicKey(obj.supporter),
      participation: new PublicKey(obj.participation),
      bump: obj.bump,
      amount: new BN(obj.amount),
      createdTs: new BN(obj.createdTs),
      updatedTs: new BN(obj.updatedTs),
      claimed: obj.claimed,
      reserved: obj.reserved,
    })
  }
}
