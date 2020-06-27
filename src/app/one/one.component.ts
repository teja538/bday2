import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  catimg=false;
  ibtn2=false;
  ibtn3=false;
  sk1=false;
  sk2=false;
  sk3=false;

showImage(){
   this.catimg=true
   this.ibtn2=true;
    // document.getElementById('loadingImage2').style.visibility="visible";
    // document.getElementById('ibtn2').style.visibility="visible";
}

showspk()
{
    // document.getElementById('loadingImage').style.visibility="visible";
    // document.getElementById('loadingImage1').style.visibility="visible";
    // document.getElementById('loadingImage3').style.visibility="visible";
    this.sk1=true;
    this.sk2=true;
    this.sk3=true;
    this.ibtn3=true;
    this.ibtn2=false;

    // document.getElementById('ibtn3').style.visibility="visible";
}

next1()
{
  

}

}
