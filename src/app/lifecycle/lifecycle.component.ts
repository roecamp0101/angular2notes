import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  /*Life cylce hooks are all the phases angular goes through when creating a new component*/
  
    constructor() { }

    /*all life cycle hooks*/
    ngOnChanges(){
        console.log('OnChanges');
    }
    ngOnInit() {
        console.log('OnInit');

    }
    ngDoCheck(){
        console.log('DoCheck');

    }
    ngAfterContentInit(){
        console.log('AfterContentInit');

    } 
    ngAfterContentChecked(){
        console.log('AfterContentChecked');
    } 
    ngAfterViewInit(){
        console.log('AfterViewinit');
       
    } 
    ngAfterViewChecked(){
        console.log('AfterViewChecked')
    }
    ngOnDestroy(){
        console.log('OnDestroy')
    }

}
