import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  constructor() {
    this.startTimer();
   }
   title = 'ecom';
  public audio;
  public val=true;
  public time;
  public interval;
  public c;
  public d=-1;
    public timeLeft: number = 20;
  startTimer() {
    this.audio = new Audio();
    this.audio.src = "../assets/five/Sir.mp3";
    this.audio.play();
    console.log(this.timeLeft)
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.time=  this.timeLeft
        console.log(this.timeLeft)
        this.c++;
        this.d++;
      } 
      if(this.c===this.d-1)
      {
        let x=this.c;
      }
      if(this.timeLeft==7)
      {
        this.audio.pause();
        this.val=false;
        console.log(this.timeLeft)
        this. timeLeft = 20;
        clearInterval(this.interval);
        console.log(this.timeLeft)
        
      }
    },1000)
  }

  ngOnInit(): void {
  }

}
