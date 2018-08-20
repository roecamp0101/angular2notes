import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
    /*array variable for looping*/
    items: string[] = ['apple', 'orange', 'car'];
    
    /*array for looping with index*/
    cars: any[] = ['nissan', 'buggati', 'fararri', 'bmw', 854545];
    
    
    /*two-way variable ('grocery')*/
    grocery: any = '';

    /*array to hold the two-way variable input ('grocery') */
    grocerylist: any[] = [];

    /*method used to add items to the array grocerylist*/
    addItems(){
      
      //Pushing items from the input of the Two-way varible ('grocery') onto the Array ('grocerylist')
        this.grocerylist.push(this.grocery);
    }
  
  
    /*Array used to add numbers while clicking*/
    addNumbersArray = [];
    
    /*Method used to add numbers while clicking button*/
    seeming(){
        //the array method push used to log the lenght of the Array
        this.addNumbersArray.push(this.addNumbersArray.length + 1)
    }
    
    
    constructor() { }

    ngOnInit() {
    }

}
