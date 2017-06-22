import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent implements OnInit {
    /*variable for event binding*/
    Eventbindinginfo = "Event binding information";
    /*variable for passing info*/
    Eventpassinginfo = ''

    /*method for event binding*/
    getEventInfo(){
        alert (this.Eventbindinginfo);
    }

    /*passing data through event binding*/
    passingInfo(event){
        this.Eventpassinginfo = (<HTMLInputElement>event.target).value;
    }

    constructor() { }

    ngOnInit() {
    }

}