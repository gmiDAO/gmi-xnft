export type CustomError =
  | CannotClaim
  | AlreadyClaimed
  | InvalidStatusChange
  | InvalidEndTs
  | NameTooLong
  | ZeroHoursToStart
  | InvalidFees
  | CannotParticipateInEvent
  | CannotSupportEvent
  | WrongTokenMint
  | WrongParticipant
  | WrongAssociatedTokenAccount
  | WrongOwner

export class CannotClaim extends Error {
  static readonly code = 6000
  readonly code = 6000
  readonly name = "CannotClaim"
  readonly msg = "Cannot claim"

  constructor(readonly logs?: string[]) {
    super("6000: Cannot claim")
  }
}

export class AlreadyClaimed extends Error {
  static readonly code = 6001
  readonly code = 6001
  readonly name = "AlreadyClaimed"
  readonly msg = "Already claimed"

  constructor(readonly logs?: string[]) {
    super("6001: Already claimed")
  }
}

export class InvalidStatusChange extends Error {
  static readonly code = 6002
  readonly code = 6002
  readonly name = "InvalidStatusChange"
  readonly msg = "Invalid status change."

  constructor(readonly logs?: string[]) {
    super("6002: Invalid status change.")
  }
}

export class InvalidEndTs extends Error {
  static readonly code = 6003
  readonly code = 6003
  readonly name = "InvalidEndTs"
  readonly msg = "Invalid end timestamp."

  constructor(readonly logs?: string[]) {
    super("6003: Invalid end timestamp.")
  }
}

export class NameTooLong extends Error {
  static readonly code = 6004
  readonly code = 6004
  readonly name = "NameTooLong"
  readonly msg = "Name too long."

  constructor(readonly logs?: string[]) {
    super("6004: Name too long.")
  }
}

export class ZeroHoursToStart extends Error {
  static readonly code = 6005
  readonly code = 6005
  readonly name = "ZeroHoursToStart"
  readonly msg = "Hours to start must be greater than 0."

  constructor(readonly logs?: string[]) {
    super("6005: Hours to start must be greater than 0.")
  }
}

export class InvalidFees extends Error {
  static readonly code = 6006
  readonly code = 6006
  readonly name = "InvalidFees"
  readonly msg = "Player and publisher fees must not add up to more than 100%."

  constructor(readonly logs?: string[]) {
    super("6006: Player and publisher fees must not add up to more than 100%.")
  }
}

export class CannotParticipateInEvent extends Error {
  static readonly code = 6007
  readonly code = 6007
  readonly name = "CannotParticipateInEvent"
  readonly msg = "Cannot participate in event with status other than Waiting."

  constructor(readonly logs?: string[]) {
    super("6007: Cannot participate in event with status other than Waiting.")
  }
}

export class CannotSupportEvent extends Error {
  static readonly code = 6008
  readonly code = 6008
  readonly name = "CannotSupportEvent"
  readonly msg = "Cannot support an event with status other than Open."

  constructor(readonly logs?: string[]) {
    super("6008: Cannot support an event with status other than Open.")
  }
}

export class WrongTokenMint extends Error {
  static readonly code = 6009
  readonly code = 6009
  readonly name = "WrongTokenMint"
  readonly msg = "The given token mint does not match the event's token mint."

  constructor(readonly logs?: string[]) {
    super("6009: The given token mint does not match the event's token mint.")
  }
}

export class WrongParticipant extends Error {
  static readonly code = 6010
  readonly code = 6010
  readonly name = "WrongParticipant"
  readonly msg = "The participant does not belong to the given event"

  constructor(readonly logs?: string[]) {
    super("6010: The participant does not belong to the given event")
  }
}

export class WrongAssociatedTokenAccount extends Error {
  static readonly code = 6011
  readonly code = 6011
  readonly name = "WrongAssociatedTokenAccount"
  readonly msg =
    "The given associated token account to fund does not match the event's token mint."

  constructor(readonly logs?: string[]) {
    super(
      "6011: The given associated token account to fund does not match the event's token mint."
    )
  }
}

export class WrongOwner extends Error {
  static readonly code = 6012
  readonly code = 6012
  readonly name = "WrongOwner"
  readonly msg = "Supporter does not own the given associated token account."

  constructor(readonly logs?: string[]) {
    super("6012: Supporter does not own the given associated token account.")
  }
}

export function fromCode(code: number, logs?: string[]): CustomError | null {
  switch (code) {
    case 6000:
      return new CannotClaim(logs)
    case 6001:
      return new AlreadyClaimed(logs)
    case 6002:
      return new InvalidStatusChange(logs)
    case 6003:
      return new InvalidEndTs(logs)
    case 6004:
      return new NameTooLong(logs)
    case 6005:
      return new ZeroHoursToStart(logs)
    case 6006:
      return new InvalidFees(logs)
    case 6007:
      return new CannotParticipateInEvent(logs)
    case 6008:
      return new CannotSupportEvent(logs)
    case 6009:
      return new WrongTokenMint(logs)
    case 6010:
      return new WrongParticipant(logs)
    case 6011:
      return new WrongAssociatedTokenAccount(logs)
    case 6012:
      return new WrongOwner(logs)
  }

  return null
}
