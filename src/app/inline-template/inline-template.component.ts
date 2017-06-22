import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  templateUrl: `<p>Hello this is an inline template, with inline styles/p>`,
  styles: [`p{color:red;}`]
})
export class InlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
