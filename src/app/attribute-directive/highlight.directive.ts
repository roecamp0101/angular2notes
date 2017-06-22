import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    /*elementRef gives a reference to the element that you want to add your directive to*/
    /*private allows to use this reference everywhere in class it also assign the instance (elementRef) to the property (ElementRef)*/
    constructor(private elementRef: ElementRef) { 
    //element.nativeElement (better to put this in the OnInit method)
    }
    
    ngOnInit(){
        /*this gets access to the element the direct was placed on*/
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}
