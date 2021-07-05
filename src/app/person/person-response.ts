/*
represents a response from swapi.dev
*/

import { Person } from "./person";

export interface PersonResponse {
    count:number
    next:string|undefined
    page:number
    previous:string|undefined
    results:Person[]
}
   