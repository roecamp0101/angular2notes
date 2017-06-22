import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custompropbind',
  templateUrl: './custompropbind.component.html',
  styleUrls: ['./custompropbind.component.css']
})
export class CustompropbindComponent implements OnInit {

    //variable from parent component  
    info = ['apple', 'orange', 'pear'];
    
    /*variable from parent component*/
    employee = [{
        name: 'Billy',
        last: 'Sanders'
    },
    {
        name: 'Cindy',
        last: 'Keys'
    }];


    /*variable used to capture $event information*/
    value = '';

    /*buttonInfo method being used in parent component to capture value info ($event)*/
    buttonInfo (value){
       
        alert(value)
    }

    constructor() { }

    ngOnInit() {
    }

}
