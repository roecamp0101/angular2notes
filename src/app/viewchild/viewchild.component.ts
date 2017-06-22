import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
    
    /*@Viewchild gives access to local methods and properties. ElementRef provides access to native DOM element */
    @ViewChild('locref') locref: ElementRef;

    /*method for local variable*/
    /*method for local variable*/
    onlocalinfo(){
        //accessing locref nativeElement value for the DOM
        this.locref.nativeElement.value
    }

    constructor() { }

    ngOnInit() {
  }

}
