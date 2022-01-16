import { Session } from "./session.model";

export interface Room {
    name: string
    types: string[][]
    sessions: Session[]
}