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

  person : Person = {
    id:1,
    name:'Ting Ling',
    height: 1111.58
  }

  constructor() { }

  ngOnInit(): void {
  }

}
