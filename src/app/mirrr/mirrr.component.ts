import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirrr',
  templateUrl: './mirrr.component.html',
  styleUrls: ['./mirrr.component.css']
})
export class MirrrComponent implements OnInit {

  sayMir = "mirrr!!!!"
  price = 15.5
  constructor() { }

  ngOnInit(): void {
    alert("Mirr Init!!")
  }

}
