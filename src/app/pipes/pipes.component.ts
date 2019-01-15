import { Component, OnInit } from '@angular/core';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
    
    //variable used for built in pipe example
    info:{} = {
        name: 'Max', //uppercase pipe
        name2: 'JOHNNY', // lowercase pipe
        time: new Date(8, 4, 2017), //date pipe
        money: 100, //currency pipe
        longname: 'thisisreallyreallyalongstringifyoureallythinkaboutit' //custom pipe
        
    }
    
    //variable used for filter pipe
    datainfo:any;

    constructor() { 
        //datainfo is assigned to an array
       this.datainfo = ['couple','orange','apple']
    }
    
    //async pipe
    //appStatus assigned to a promise
    appStatus = new Promise((resolve, reject) => { // This is how you assign a promise in Angular, the information get put out later (3 seconds in this case)
        setTimeout(() => {
            resolve('stable');
        }, 3000);
    
    });
  
    //variable used for array object pipe (pipe used to loop through an array of objects
    rewardList = [
      {name:'Finn the human', age: 25},
      {name:'skirt the human', age: 45},
      {name:'john the human', age: 55},
      {name:'man the human', age: 55},
      {name:'wo the human', age: 65},
      {name:'cool the human', age: 995}
  ]


    ngOnInit() {
  }

}
