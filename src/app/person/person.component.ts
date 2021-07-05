import { Component, OnInit } from '@angular/core';
import {Person} from './person'
import { PersonService } from '../person.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  //all prsons
  all:Person[] = [];
  
  //when added route, this no longer used
  //selectedPerson?: Person;
  
  //To Inject service, must declare a private a service attribute  to constructor of the required class
  constructor(private personService:PersonService, private messageService : MessageService) {

   }

  //calls when component loaded
  ngOnInit(): void {
    //alert('Persons loaded')
    this.getPerson()
  }
  //to be called on click: when added route, this no longer used
  /*
  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.messageService.add(`Person Component: Selected person ${person.id}`)
  }*/

  //get all person in database by Service created by ng generate PeopleService
  getPerson():void{
    this.personService.All().subscribe(all => {
      this.all = all.results
      for (let index = 0; index < this.all.length; index++) {
        this.all[index].id =index+1
      }
    })
  }

}
