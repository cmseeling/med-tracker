import { Medication } from "./medication";

export interface Timeslot {
    id: number;
    name: string;
    items: Medication[];
}