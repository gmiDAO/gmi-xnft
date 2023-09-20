import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "." // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface WaitingJSON {
  kind: "Waiting"
}

export class Waiting {
  static readonly discriminator = 0
  static readonly kind = "Waiting"
  readonly discriminator = 0
  readonly kind = "Waiting"

  toJSON(): WaitingJSON {
    return {
      kind: "Waiting",
    }
  }

  toEncodable() {
    return {
      Waiting: {},
    }
  }
}

export interface OpenJSON {
  kind: "Open"
}

export class Open {
  static readonly discriminator = 1
  static readonly kind = "Open"
  readonly discriminator = 1
  readonly kind = "Open"

  toJSON(): OpenJSON {
    return {
      kind: "Open",
    }
  }

  toEncodable() {
    return {
      Open: {},
    }
  }
}

export interface StartedJSON {
  kind: "Started"
}

export class Started {
  static readonly discriminator = 2
  static readonly kind = "Started"
  readonly discriminator = 2
  readonly kind = "Started"

  toJSON(): StartedJSON {
    return {
      kind: "Started",
    }
  }

  toEncodable() {
    return {
      Started: {},
    }
  }
}

export interface CompletedJSON {
  kind: "Completed"
}

export class Completed {
  static readonly discriminator = 3
  static readonly kind = "Completed"
  readonly discriminator = 3
  readonly kind = "Completed"

  toJSON(): CompletedJSON {
    return {
      kind: "Completed",
    }
  }

  toEncodable() {
    return {
      Completed: {},
    }
  }
}

export interface CancelledJSON {
  kind: "Cancelled"
}

export class Cancelled {
  static readonly discriminator = 4
  static readonly kind = "Cancelled"
  readonly discriminator = 4
  readonly kind = "Cancelled"

  toJSON(): CancelledJSON {
    return {
      kind: "Cancelled",
    }
  }

  toEncodable() {
    return {
      Cancelled: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.StatusKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Waiting" in obj) {
    return new Waiting()
  }
  if ("Open" in obj) {
    return new Open()
  }
  if ("Started" in obj) {
    return new Started()
  }
  if ("Completed" in obj) {
    return new Completed()
  }
  if ("Cancelled" in obj) {
    return new Cancelled()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.StatusJSON): types.StatusKind {
  switch (obj.kind) {
    case "Waiting": {
      return new Waiting()
    }
    case "Open": {
      return new Open()
    }
    case "Started": {
      return new Started()
    }
    case "Completed": {
      return new Completed()
    }
    case "Cancelled": {
      return new Cancelled()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Waiting"),
    borsh.struct([], "Open"),
    borsh.struct([], "Started"),
    borsh.struct([], "Completed"),
    borsh.struct([], "Cancelled"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
