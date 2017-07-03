import { Component, OnInit } from '@angular/core';
import { Person } from './modelclass.component'; //import Person model from modelclass.component

@Component({
    selector: 'app-model-data',
    templateUrl: './model-data.component.html',
    styleUrls: ['./model-data.component.css']

})
export class ModelDataComponent implements OnInit {
    //person variable used to hold new instance of
    person: Object[];

    constructor() { 
        //instance of person used to hold new instances of Person model
        this.person = [
            //filling out the new Person models parameters firstname, lastname, occ
            new Person('John', 'Billy', 'Banker'),
            new Person('Sara', 'Jane', 'Delivery'),
            new Person('Eric', 'Gooding', 'Song Writer')
        ];
    
    }

    ngOnInit() {
    }

}
