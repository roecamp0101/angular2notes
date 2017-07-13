/*import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
 // selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

    //Render2 is used to access the dom directly but in some cases there is no dom and that is why renderer is used
    //constructor(private render: Renderer2, private elRef: ElementRef) { }
    
   // ngOnInit(){
        //the Renderer2 has method set setStyle method
        //setStyle takes 4 arguements, one is the element (this.elRef.nativeElement), style you want to set (background-color), the value (red), and lastly flag declarations (!important)//
        //this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue',);
    }


    //In order to react to events the element sits on we use the @HostListener decorator
    //we add the @HostListener() and then some method you want to execute ( mouseover() )
    //the 'mouseover' within *HostListener('mouseenter')* is a string represenation of the method you want to create
    
    @HostListener('mouseenter') mouseover(eventData: Event){
    //This HostListener represents the mouseenter event
        //this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); *Instead of using this you can use the @HostBinding() property*
        
        this.backgroundColor = 'blue';
    }
    
    
    @HostListener('mouseleave') mouseleave(eventData: Event){
    //This HostListener represents the mouseleave event
        //this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); *Instead of using this you can use the @HostBinding() property*
        
        this.backgroundColor = 'transparent';
    }
    
    
    //To change the dom element without using the Renderer method (nothing wrong with it) we can use the @Hostbinding() method
    
    
    //we add the @HostBinding() and then some property you want to change ( backgroundColor )
    //the 'style.backgroundColor' within *HostBinding('style.backgroundColor')* is a string represenation of which property of the host element you want to bind. In this case style.backgroundColor are properties of the host element
    
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

}*/