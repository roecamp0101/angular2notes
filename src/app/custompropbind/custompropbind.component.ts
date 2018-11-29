import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custompropbind',
  templateUrl: './custompropbind.component.html',
  styleUrls: ['./custompropbind.component.css']
})
export class CustompropbindComponent implements OnInit {
  
  /*Remember the Information for @Input() gets passed down from parent componenet to child component. And the child component 
  inherits the @Input() method to reference the parent components properties.
  */
  
  /*The information from the Output() gets passed from child component to parent component. And the child component inherits the 
  @Output() method with the EventEmitter method.*/

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
