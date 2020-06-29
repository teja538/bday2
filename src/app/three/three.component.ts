import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=false
  btn1=true

  showfun()
  {
    this.show=true;
    this.btn1=false;
  }

}
