import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "." // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface FromEscrowJSON {
  kind: "FromEscrow"
}

export class FromEscrow {
  static readonly discriminator = 0
  static readonly kind = "FromEscrow"
  readonly discriminator = 0
  readonly kind = "FromEscrow"

  toJSON(): FromEscrowJSON {
    return {
      kind: "FromEscrow",
    }
  }

  toEncodable() {
    return {
      FromEscrow: {},
    }
  }
}

export interface ToEscrowJSON {
  kind: "ToEscrow"
}

export class ToEscrow {
  static readonly discriminator = 1
  static readonly kind = "ToEscrow"
  readonly discriminator = 1
  readonly kind = "ToEscrow"

  toJSON(): ToEscrowJSON {
    return {
      kind: "ToEscrow",
    }
  }

  toEncodable() {
    return {
      ToEscrow: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.TransferTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("FromEscrow" in obj) {
    return new FromEscrow()
  }
  if ("ToEscrow" in obj) {
    return new ToEscrow()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.TransferTypeJSON): types.TransferTypeKind {
  switch (obj.kind) {
    case "FromEscrow": {
      return new FromEscrow()
    }
    case "ToEscrow": {
      return new ToEscrow()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "FromEscrow"),
    borsh.struct([], "ToEscrow"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
