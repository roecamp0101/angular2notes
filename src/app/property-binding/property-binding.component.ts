import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent implements OnInit {
    /*variable for property binding*/
    buttonProperty = false;

    constructor() {
        setTimeout(() => {
            /*change of variable for property binding*/
            this.buttonProperty = true;
        }, 2000)
    }
    
    /*variable for property binding*/
    propbind = 'information from property binding';

    ngOnInit() {
    }

}
