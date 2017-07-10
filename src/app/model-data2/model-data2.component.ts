import { Component, OnInit } from '@angular/core';
import { Person } from './model.info2';

@Component({
  selector: 'app-model-data2',
  templateUrl: './model-data2.component.html',
  styleUrls: ['./model-data2.component.css']
})
export class ModelData2Component implements OnInit {
    //person is instance of Person model class
    person: Person[] = [
        //added values to new instance of Person model class
        new Person('John Billy', 45, 'hungry'),
        new Person('Jane Manning', 33, 'full'),
        new Person('Chris Manking', 40, 'no feeling')
    ];
    constructor() { }

    ngOnInit() {
    }

}
