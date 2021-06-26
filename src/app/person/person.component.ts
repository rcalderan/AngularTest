import { Component, OnInit } from '@angular/core';
import {Person} from './person'
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  //all prsons
  all:Person[] = [];

  selectedPerson?: Person;
  
  //To Inject service, must declare a private a service attribute  to constructor of the required class
  constructor(private personService:PersonService) {

   }

  //calls when component loaded
  ngOnInit(): void {
  }
  //to be called on click
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  //get all person in database by Service created by ng generate PeopleService

  getPerson():void{
    this.all = this.personService.All();
  }

}
