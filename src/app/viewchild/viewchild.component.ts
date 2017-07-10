import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ViewchildChildcomponentComponent} from './viewchild-childcomponent/viewchild-childcomponent.component'; //import viewchild child component module

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
    
    /*@Viewchild gives access to local methods and properties. ElementRef provides access to native DOM element */
    
    /* The ViewChild decorator is used to gain access to a child components properties and methods. */
    @ViewChild('locref') locref: ElementRef;

    /*method for local variable*/
    /*method for local variable*/
    onlocalinfo(){
        //accessing locref nativeElement value for the DOM
        this.locref.nativeElement.value
    }
    
    
    /* @ViewChild being used to get information from from the child component */
    
    @ViewChild(ViewchildChildcomponentComponent) ccInfo: ViewchildChildcomponentComponent


    constructor() { }

    
    ngOnInit() {
       
    }
    
    //Method update() is being used to call the child component method * childData() *
    update(){
        //this.alias.childcomponent method *childData()*
        this.ccInfo.childData();
    }
    
    
    

}
