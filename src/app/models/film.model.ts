import { Room } from "./room.model";

export interface Film {
    id: string
    eventId: string
    name: string
    address: string
    addressComplement: string
    rooms: Room[]
}