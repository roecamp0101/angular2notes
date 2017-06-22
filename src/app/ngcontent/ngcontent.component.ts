import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  template: `
    <p>Something good...</p>
    <!-- ng-content shows content between selector tags -->
    <ng-content></ng-content>
                `,
  styleUrls: ['./ngcontent.component.css']
})
export class NgcontentComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
