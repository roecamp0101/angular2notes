import { Component, OnInit } from '@angular/core';
import { Person } from './modelclass.component';

@Component({
    selector: 'app-model-data',
    templateUrl: './model-data.component.html',
    styleUrls: ['./model-data.component.css']

})
export class ModelDataComponent implements OnInit {
    
    person: Object[];

    constructor() { 
        this.person = [
            new Person('John', 'Billy', 'Banker'),
            new Person('Sara', 'Jane', 'Delivery'),
            new Person('Eric', 'Gooding', 'Song Writer'),
        ];
    
    }

    ngOnInit() {
    }

}
