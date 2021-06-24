import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirrr',
  templateUrl: './mirrr.component.html',
  styleUrls: ['./mirrr.component.css']
})
export class MirrrComponent implements OnInit {

  sayMir = "MIIIRRRRRR!!!!"
  constructor() { }

  ngOnInit(): void {
    alert("Mirr Init!!")
  }

}
