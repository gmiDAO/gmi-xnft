import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ParticipationFields {
  /** The pubkey of the participant (32). */
  participant: PublicKey
  /** The pubkey of the event the participant is participating in (32). */
  event: PublicKey
  /** The bump nonce for the Participation's PDA (1). */
  bump: number
  /** Total amount of funds allocated in the participation(8). */
  totalSupportAmount: BN
  /** Number of supporters of this participation (8). */
  numSupporters: BN
  /** The unix timestamp of account creation (8). */
  createdTs: BN
  /** The unix timestamp of last account update (8). */
  updatedTs: BN
  /** Boolean flag to indicate if the participant claimed their fee (1). */
  claimed: boolean
  /** Boolean flag to indicate if the participant can claim their fee (1). */
  canClaim: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export interface ParticipationJSON {
  /** The pubkey of the participant (32). */
  participant: string
  /** The pubkey of the event the participant is participating in (32). */
  event: string
  /** The bump nonce for the Participation's PDA (1). */
  bump: number
  /** Total amount of funds allocated in the participation(8). */
  totalSupportAmount: string
  /** Number of supporters of this participation (8). */
  numSupporters: string
  /** The unix timestamp of account creation (8). */
  createdTs: string
  /** The unix timestamp of last account update (8). */
  updatedTs: string
  /** Boolean flag to indicate if the participant claimed their fee (1). */
  claimed: boolean
  /** Boolean flag to indicate if the participant can claim their fee (1). */
  canClaim: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export class Participation {
  /** The pubkey of the participant (32). */
  readonly participant: PublicKey
  /** The pubkey of the event the participant is participating in (32). */
  readonly event: PublicKey
  /** The bump nonce for the Participation's PDA (1). */
  readonly bump: number
  /** Total amount of funds allocated in the participation(8). */
  readonly totalSupportAmount: BN
  /** Number of supporters of this participation (8). */
  readonly numSupporters: BN
  /** The unix timestamp of account creation (8). */
  readonly createdTs: BN
  /** The unix timestamp of last account update (8). */
  readonly updatedTs: BN
  /** Boolean flag to indicate if the participant claimed their fee (1). */
  readonly claimed: boolean
  /** Boolean flag to indicate if the participant can claim their fee (1). */
  readonly canClaim: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  readonly reserved: Array<number>

  static readonly discriminator = Buffer.from([
    237, 154, 142, 46, 143, 63, 189, 18,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("participant"),
    borsh.publicKey("event"),
    borsh.u8("bump"),
    borsh.u64("totalSupportAmount"),
    borsh.u64("numSupporters"),
    borsh.i64("createdTs"),
    borsh.i64("updatedTs"),
    borsh.bool("claimed"),
    borsh.bool("canClaim"),
    borsh.array(borsh.u8(), 32, "reserved"),
  ])

  constructor(fields: ParticipationFields) {
    this.participant = fields.participant
    this.event = fields.event
    this.bump = fields.bump
    this.totalSupportAmount = fields.totalSupportAmount
    this.numSupporters = fields.numSupporters
    this.createdTs = fields.createdTs
    this.updatedTs = fields.updatedTs
    this.claimed = fields.claimed
    this.canClaim = fields.canClaim
    this.reserved = fields.reserved
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Participation | null> {
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
  ): Promise<Array<Participation | null>> {
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

  static decode(data: Buffer): Participation {
    if (!data.slice(0, 8).equals(Participation.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Participation.layout.decode(data.slice(8))

    return new Participation({
      participant: dec.participant,
      event: dec.event,
      bump: dec.bump,
      totalSupportAmount: dec.totalSupportAmount,
      numSupporters: dec.numSupporters,
      createdTs: dec.createdTs,
      updatedTs: dec.updatedTs,
      claimed: dec.claimed,
      canClaim: dec.canClaim,
      reserved: dec.reserved,
    })
  }

  toJSON(): ParticipationJSON {
    return {
      participant: this.participant.toString(),
      event: this.event.toString(),
      bump: this.bump,
      totalSupportAmount: this.totalSupportAmount.toString(),
      numSupporters: this.numSupporters.toString(),
      createdTs: this.createdTs.toString(),
      updatedTs: this.updatedTs.toString(),
      claimed: this.claimed,
      canClaim: this.canClaim,
      reserved: this.reserved,
    }
  }

  static fromJSON(obj: ParticipationJSON): Participation {
    return new Participation({
      participant: new PublicKey(obj.participant),
      event: new PublicKey(obj.event),
      bump: obj.bump,
      totalSupportAmount: new BN(obj.totalSupportAmount),
      numSupporters: new BN(obj.numSupporters),
      createdTs: new BN(obj.createdTs),
      updatedTs: new BN(obj.updatedTs),
      claimed: obj.claimed,
      canClaim: obj.canClaim,
      reserved: obj.reserved,
    })
  }
}
