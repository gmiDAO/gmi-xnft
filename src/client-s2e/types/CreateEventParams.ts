import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "." // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface CreateEventParamsFields {
  hoursToOpen: number
  hoursToStart: number
  participantFee: number
  publisherFee: number
}

export interface CreateEventParamsJSON {
  hoursToOpen: number
  hoursToStart: number
  participantFee: number
  publisherFee: number
}

export class CreateEventParams {
  readonly hoursToOpen: number
  readonly hoursToStart: number
  readonly participantFee: number
  readonly publisherFee: number

  constructor(fields: CreateEventParamsFields) {
    this.hoursToOpen = fields.hoursToOpen
    this.hoursToStart = fields.hoursToStart
    this.participantFee = fields.participantFee
    this.publisherFee = fields.publisherFee
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u16("hoursToOpen"),
        borsh.u16("hoursToStart"),
        borsh.u16("participantFee"),
        borsh.u16("publisherFee"),
      ],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new CreateEventParams({
      hoursToOpen: obj.hoursToOpen,
      hoursToStart: obj.hoursToStart,
      participantFee: obj.participantFee,
      publisherFee: obj.publisherFee,
    })
  }

  static toEncodable(fields: CreateEventParamsFields) {
    return {
      hoursToOpen: fields.hoursToOpen,
      hoursToStart: fields.hoursToStart,
      participantFee: fields.participantFee,
      publisherFee: fields.publisherFee,
    }
  }

  toJSON(): CreateEventParamsJSON {
    return {
      hoursToOpen: this.hoursToOpen,
      hoursToStart: this.hoursToStart,
      participantFee: this.participantFee,
      publisherFee: this.publisherFee,
    }
  }

  static fromJSON(obj: CreateEventParamsJSON): CreateEventParams {
    return new CreateEventParams({
      hoursToOpen: obj.hoursToOpen,
      hoursToStart: obj.hoursToStart,
      participantFee: obj.participantFee,
      publisherFee: obj.publisherFee,
    })
  }

  toEncodable() {
    return CreateEventParams.toEncodable(this)
  }
}
