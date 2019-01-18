import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent implements OnInit {
    /*variable for event binding*/
    Eventbindinginfo = "Event binding information";
    /*variable for passing info*/
    Eventpassinginfo = '';
  
    //variable used for toggling information.
    showinfo = true;

    /*method for event binding*/
    getEventInfo(){
        alert (this.Eventbindinginfo);
    }

    /*passing data through event binding*/
    passingInfo(event){
        this.Eventpassinginfo = (<HTMLInputElement>event.target).value;
    }
  
    //Method used for toggling display
    showInfoMethod(){
      this.showinfo = !this.showinfo;
    }
  
  
    //variable for incrementing number (counter)
    counter:number = 0;
    
    //Method for incrementing number
    increment(){
      this.counter += 1;
    }
    
   //Method for decrementing number
    decrement(){
      this.counter -= 1;
    }

    constructor() { }

    ngOnInit() {
    }

}
