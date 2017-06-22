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

    constructor() { }

    ngOnInit() {
    }

}
