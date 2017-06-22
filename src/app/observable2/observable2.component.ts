import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable'; //use Observable import to build an observable
import 'rxjs/Rx'; // this is used when you work with observable operators
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit, OnDestroy {
    
    //variable used to hold observable object 
    myNumbers;
    //variable for numberSubscription
    numberSubscription;
    //variable for custerSubscription
    custerSubscription;
    
    constructor() { }

    ngOnInit() {
    //variable myNumbers assigned to the Object Observable with method interval that will operate every 1000 seconds
      //const myNumbers = Observable.interval(1000);
        
      /*myNumbers.subscribe(
          (number: number) => {
              //console.log(number);
          }
      
      );*/
       
        
    }
    
    ngOnDestroy(){
        //in order to unsubscribe to an subscription
        this.numberSubscription.unsubscribe();
        this.custerSubscription.unsubscribe();
    }

    }
