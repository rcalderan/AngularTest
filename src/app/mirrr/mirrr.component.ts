import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mirrr',
  templateUrl: './mirrr.component.html',
  styleUrls: ['./mirrr.component.css']
})
export class MirrrComponent implements OnInit {
  
  @Input() str?:string;
  sayMir = "mirrr!!!!"
  price = 15.5
  constructor() { }

  ngOnInit(): void {
  }

}
