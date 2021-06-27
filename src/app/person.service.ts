import { Injectable } from '@angular/core';

import {Person} from './person/person'
import { DataPerson } from './person/mock-person';
//observable from RxJS library
import { Observable, of } from 'rxjs';
//messages
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private messageService:MessageService) { 

  }

  All(): Observable<Person[]>{
    const persons=of(DataPerson) 
    this.messageService.add('PersonService: fetched all persons');
    return persons;
  }
}
