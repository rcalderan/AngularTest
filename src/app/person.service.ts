import { Injectable } from '@angular/core';

import {Person} from './person/person'
import { DataPerson } from './person/mock-person';
//observable from RxJS library
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  All(): Observable<Person[]>{
    const persons=of(DataPerson)
    return persons;
  }
}
