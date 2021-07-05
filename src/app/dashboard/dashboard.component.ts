import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons:Person[]=[]

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons(): void{
    this.personService.All().subscribe(swapiResponse => {
      this.persons = swapiResponse.results
      for (let index = 1; index <= this.persons.length; index++) {
        this.persons[index-1].id =index
      }
      //this.persons = p.slice(0,5)
    },(error)=>{
      alert(error)
    }
    )
  }

}
