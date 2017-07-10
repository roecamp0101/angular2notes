import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-viewchild-childcomponent',
    template: `
            <br><br>
            <p>viewchild child component</p>
                `

})
export class ViewchildChildcomponentComponent implements OnInit {
    
    //Child view method childData()
    childData() {alert('information from the child view component');}

    constructor() { }

    ngOnInit() {}

}
