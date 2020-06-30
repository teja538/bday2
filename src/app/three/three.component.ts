import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { 
    // this.playAudio();
  }
  

  ngOnInit(): void {
  }
  show=false
  btn1=true
  public audio;

  showfun()
  {
    this.show=true;
    this.btn1=false;
    this.audio = new Audio();
    this.audio.src = "../assets/aud/behti.mp3";
    this.audio.load();
    this.audio.play();
  }
  ngOnDestroy() {
    // destroy audio here
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }


  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "../../../assets/aud/frnd.mp3";
  //   audio.load();
  //   audio.play();
  // }


  }
}
