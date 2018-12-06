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
      
      //This will create an Observable from scratch; and will go through the three steps of an observable (success, error, and complete)
       
      const intro = Observable.create( //create observable from scratch
      (observer: Observer<string>)=>{ // Observer with the type Observer
          setTimeout(()=> { //success step
             observer.next('so this ah di first ting') 
          }, 2000);
          setTimeout(()=> { //error step
             observer.next('so this ah di second ting') 
          }, 4000);
          setTimeout(()=> { //complete step
             observer.next('so this ah di third ting') 
          }, 7000);
          
         });
      
       intro.subscribe( //subscribe to the changes within each step of the observable (success, error, and complete)
        (data: string) =>{  //success at 2000 (2 seconds)
              console.log(data)
          },
              
        (error: string) =>{ //error at 4000 (4 seconds)
               console.log(error)
              
          },
         () =>{ //complete at 7000 (7 seconds)
              console.log('complete')
          }
                
      )
        
    }
    
    ngOnDestroy(){
        //in order to unsubscribe to an subscription
        this.numberSubscription.unsubscribe();
        this.custerSubscription.unsubscribe();
    }

    }
