import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface EventFields {
  /** The pubkey of the Event publisher (32). */
  publisher: PublicKey
  /** The display name of the Event (MAX_NAME_LEN). */
  name: string
  /** The bump nonce for the Event's PDA (1). */
  bump: number
  /** The Mint of the token  used for the event (32). */
  tokenMint: PublicKey
  /** The `Status` enum variant describing the status of the Event (1). */
  status: types.StatusKind
  /** Total amount of funds allocated in the event(8). */
  totalSupportAmount: BN
  /** Number of supporters in the event (8). */
  numSupporters: BN
  /** The unix timestamp of account creation (8). */
  createdTs: BN
  /** The unix timestamp of last account update (8). */
  updatedTs: BN
  /** The unix timestamp of the end of the event, either on event completion or cancellation (8). */
  endTs: BN
  /**
   * The number of hours since event creation to open the event for support (1).
   * The event will be opened at `created_ts + hours_to_open * 3600`.
   * Should be greater than 0, to allow for participants to participate in the event.
   */
  hoursToOpen: number
  /**
   * The number of hours since opening the event to start the event (1).
   * The event will start at `created_ts + (hours_to_open + hours_to_start) * 3600`.
   * Must be greater than 0, to allow for supporters to support the event.
   */
  hoursToStart: number
  /** The fee percentage in basis points that the winner participant takes from the total support amount (2). */
  participantFee: number
  /** The fee percentage in basis points that the publisher takes from the total support amount (2). */
  publisherFee: number
  /** Boolean flag to indicate if the publisher claimed their fee (1). */
  claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export interface EventJSON {
  /** The pubkey of the Event publisher (32). */
  publisher: string
  /** The display name of the Event (MAX_NAME_LEN). */
  name: string
  /** The bump nonce for the Event's PDA (1). */
  bump: number
  /** The Mint of the token  used for the event (32). */
  tokenMint: string
  /** The `Status` enum variant describing the status of the Event (1). */
  status: types.StatusJSON
  /** Total amount of funds allocated in the event(8). */
  totalSupportAmount: string
  /** Number of supporters in the event (8). */
  numSupporters: string
  /** The unix timestamp of account creation (8). */
  createdTs: string
  /** The unix timestamp of last account update (8). */
  updatedTs: string
  /** The unix timestamp of the end of the event, either on event completion or cancellation (8). */
  endTs: string
  /**
   * The number of hours since event creation to open the event for support (1).
   * The event will be opened at `created_ts + hours_to_open * 3600`.
   * Should be greater than 0, to allow for participants to participate in the event.
   */
  hoursToOpen: number
  /**
   * The number of hours since opening the event to start the event (1).
   * The event will start at `created_ts + (hours_to_open + hours_to_start) * 3600`.
   * Must be greater than 0, to allow for supporters to support the event.
   */
  hoursToStart: number
  /** The fee percentage in basis points that the winner participant takes from the total support amount (2). */
  participantFee: number
  /** The fee percentage in basis points that the publisher takes from the total support amount (2). */
  publisherFee: number
  /** Boolean flag to indicate if the publisher claimed their fee (1). */
  claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  reserved: Array<number>
}

export class Event {
  /** The pubkey of the Event publisher (32). */
  readonly publisher: PublicKey
  /** The display name of the Event (MAX_NAME_LEN). */
  readonly name: string
  /** The bump nonce for the Event's PDA (1). */
  readonly bump: number
  /** The Mint of the token  used for the event (32). */
  readonly tokenMint: PublicKey
  /** The `Status` enum variant describing the status of the Event (1). */
  readonly status: types.StatusKind
  /** Total amount of funds allocated in the event(8). */
  readonly totalSupportAmount: BN
  /** Number of supporters in the event (8). */
  readonly numSupporters: BN
  /** The unix timestamp of account creation (8). */
  readonly createdTs: BN
  /** The unix timestamp of last account update (8). */
  readonly updatedTs: BN
  /** The unix timestamp of the end of the event, either on event completion or cancellation (8). */
  readonly endTs: BN
  /**
   * The number of hours since event creation to open the event for support (1).
   * The event will be opened at `created_ts + hours_to_open * 3600`.
   * Should be greater than 0, to allow for participants to participate in the event.
   */
  readonly hoursToOpen: number
  /**
   * The number of hours since opening the event to start the event (1).
   * The event will start at `created_ts + (hours_to_open + hours_to_start) * 3600`.
   * Must be greater than 0, to allow for supporters to support the event.
   */
  readonly hoursToStart: number
  /** The fee percentage in basis points that the winner participant takes from the total support amount (2). */
  readonly participantFee: number
  /** The fee percentage in basis points that the publisher takes from the total support amount (2). */
  readonly publisherFee: number
  /** Boolean flag to indicate if the publisher claimed their fee (1). */
  readonly claimed: boolean
  /** Unused reserved byte space for additive future changes.  (32). */
  readonly reserved: Array<number>

  static readonly discriminator = Buffer.from([
    125, 192, 125, 158, 9, 115, 152, 233,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("publisher"),
    borsh.str("name"),
    borsh.u8("bump"),
    borsh.publicKey("tokenMint"),
    types.Status.layout("status"),
    borsh.u64("totalSupportAmount"),
    borsh.u64("numSupporters"),
    borsh.i64("createdTs"),
    borsh.i64("updatedTs"),
    borsh.i64("endTs"),
    borsh.u16("hoursToOpen"),
    borsh.u16("hoursToStart"),
    borsh.u16("participantFee"),
    borsh.u16("publisherFee"),
    borsh.bool("claimed"),
    borsh.array(borsh.u8(), 32, "reserved"),
  ])

  constructor(fields: EventFields) {
    this.publisher = fields.publisher
    this.name = fields.name
    this.bump = fields.bump
    this.tokenMint = fields.tokenMint
    this.status = fields.status
    this.totalSupportAmount = fields.totalSupportAmount
    this.numSupporters = fields.numSupporters
    this.createdTs = fields.createdTs
    this.updatedTs = fields.updatedTs
    this.endTs = fields.endTs
    this.hoursToOpen = fields.hoursToOpen
    this.hoursToStart = fields.hoursToStart
    this.participantFee = fields.participantFee
    this.publisherFee = fields.publisherFee
    this.claimed = fields.claimed
    this.reserved = fields.reserved
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Event | null> {
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
  ): Promise<Array<Event | null>> {
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

  static decode(data: Buffer): Event {
    if (!data.slice(0, 8).equals(Event.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Event.layout.decode(data.slice(8))

    return new Event({
      publisher: dec.publisher,
      name: dec.name,
      bump: dec.bump,
      tokenMint: dec.tokenMint,
      status: types.Status.fromDecoded(dec.status),
      totalSupportAmount: dec.totalSupportAmount,
      numSupporters: dec.numSupporters,
      createdTs: dec.createdTs,
      updatedTs: dec.updatedTs,
      endTs: dec.endTs,
      hoursToOpen: dec.hoursToOpen,
      hoursToStart: dec.hoursToStart,
      participantFee: dec.participantFee,
      publisherFee: dec.publisherFee,
      claimed: dec.claimed,
      reserved: dec.reserved,
    })
  }

  toJSON(): EventJSON {
    return {
      publisher: this.publisher.toString(),
      name: this.name,
      bump: this.bump,
      tokenMint: this.tokenMint.toString(),
      status: this.status.toJSON(),
      totalSupportAmount: this.totalSupportAmount.toString(),
      numSupporters: this.numSupporters.toString(),
      createdTs: this.createdTs.toString(),
      updatedTs: this.updatedTs.toString(),
      endTs: this.endTs.toString(),
      hoursToOpen: this.hoursToOpen,
      hoursToStart: this.hoursToStart,
      participantFee: this.participantFee,
      publisherFee: this.publisherFee,
      claimed: this.claimed,
      reserved: this.reserved,
    }
  }

  static fromJSON(obj: EventJSON): Event {
    return new Event({
      publisher: new PublicKey(obj.publisher),
      name: obj.name,
      bump: obj.bump,
      tokenMint: new PublicKey(obj.tokenMint),
      status: types.Status.fromJSON(obj.status),
      totalSupportAmount: new BN(obj.totalSupportAmount),
      numSupporters: new BN(obj.numSupporters),
      createdTs: new BN(obj.createdTs),
      updatedTs: new BN(obj.updatedTs),
      endTs: new BN(obj.endTs),
      hoursToOpen: obj.hoursToOpen,
      hoursToStart: obj.hoursToStart,
      participantFee: obj.participantFee,
      publisherFee: obj.publisherFee,
      claimed: obj.claimed,
      reserved: obj.reserved,
    })
  }
}
