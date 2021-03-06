import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ViewchildChildcomponentComponent} from './viewchild-childcomponent/viewchild-childcomponent.component'; //import viewchild child component module

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  
  /*The Viewchild is another way to get a local reference to your DOM elements or any element in the 
  DOM through the typescript code. Its like a shortcut for this #f. Remeber though #f can only be used in the template
  not in the typescript code*/
    
    /*@Viewchild gives access to local methods and properties. ElementRef provides access to native DOM element */
    

    /*Within the ('') is the name of the  local reference ***#f *** the second argument can be named anything */
    @ViewChild('locref') locref: ElementRef;

    /*method for local variable*/
    /*method for local variable*/
    onlocalinfo(){
        //accessing locref nativeElement value for the DOM
        //the locref in this case represents second argument that can be named anything.
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
