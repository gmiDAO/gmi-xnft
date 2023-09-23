// TBC: Add create event instruction
import { PublicKey } from '@solana/web3.js'
import { CreateEventArgs, CreateEventAccounts, createEvent } from './client-s2e/instructions/createEvent'
import { CreateEventParamsFields } from './client-s2e/types/CreateEventParams'

export interface CommitEventParams{


}

export function CommitEvent(
    commitArgs: CommitEventParams
){
    // prepare accounts for the event

    const event_name = "gmi-test"

    const MINT = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU")

    const params:  CreateEventParamsFields = {
        hoursToOpen: 1,
        hoursToStart: 2,
        participantFee: 100000,
        publisherFee: 100000
    }

    const args: CreateEventArgs = {
        name: event_name,
        params: params
    }


    /*  WIP
    const accounts: CreateEventAccounts = {
        tokenMint: MINT
        event: PublicKey
        eventEscrow: PublicKey
        publisher: PublicKey
        systemProgram: PublicKey
        tokenProgram: PublicKey
        rent: PublicKey

    }


    const ix = createEvent(args, accounts)*/

}






