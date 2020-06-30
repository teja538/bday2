import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() {

   }

show=false;
before=true;
audio:any;
  ngOnInit(): void {


  }

songcond1(){
  this.before=false;
  this.show=true;
  this.audio = new Audio();
    this.audio.src = '../../assets/aud/frnd.mp3';
    this.audio.load();
    // auto-start
    this.audio.play();
}
  ngOnDestroy() {
    // destroy audio here
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }

  // songcond1()
  // {
  //  this.con=true;
  // }

  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "../../../assets/aud/behti.mp3";
  //   audio.load();
  //   audio.play();
    // if(this.con)
    // {
    //   console.log(this.con);
    //   audio.pause();
    // }
  
  }

}
