import { Component, OnInit,Input } from '@angular/core';
import {Person} from '../person/person'
import { PersonService } from '../person.service';

//for routing
import { ActivatedRoute } from '@angular/router';//holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL (like id)
import { Location } from '@angular/common';// use it later to navigate back to the view that navigated here
 

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  //no longer used
  //@Input() person?: Person;
  person:Person | undefined
  route:ActivatedRoute;
  loc:Location;

  constructor(
    private personService:PersonService,
    private activatedRoute: ActivatedRoute,
    private location :Location
    ) {
      this.route = activatedRoute
      this.loc = location
     }

  ngOnInit(): void {
    this.getPerson()
  }
  

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id)
      .subscribe(response => {
        alert(JSON.stringify(response))
        if( response){
          this.person =response.results[0]
          this.person.id = id+1 //necessary workarround, cose swapi doenst return id...
        }else this.person=undefined
      });
  }
  goBack():void{
    this.loc.back();
  }

}
