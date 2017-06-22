import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
    
    //variable for the switch case statement
    value:number = 15;

    constructor() { }

    ngOnInit() {
    }

}
