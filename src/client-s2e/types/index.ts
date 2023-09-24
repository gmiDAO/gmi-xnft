import * as Status from "./Status"
import * as TransferType from "./TransferType"

export { CreateEventParams } from "./CreateEventParams"
export type {
  CreateEventParamsFields,
  CreateEventParamsJSON,
} from "./CreateEventParams"
export { Status }

export type StatusKind =
  | Status.Waiting
  | Status.Open
  | Status.Started
  | Status.Completed
  | Status.Cancelled
export type StatusJSON =
  | Status.WaitingJSON
  | Status.OpenJSON
  | Status.StartedJSON
  | Status.CompletedJSON
  | Status.CancelledJSON

export { TransferType }

export type TransferTypeKind = TransferType.FromEscrow | TransferType.ToEscrow
export type TransferTypeJSON =
  | TransferType.FromEscrowJSON
  | TransferType.ToEscrowJSON
