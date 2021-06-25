import { Component, OnInit } from '@angular/core';
import {Person} from './person'
import { DataPerson } from './mock-person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  all = DataPerson;

  selectedPerson?: Person;
  

  constructor() { }

  //calls when component loaded
  ngOnInit(): void {
  }
  //to be called on click
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

}
