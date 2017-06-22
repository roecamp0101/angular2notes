import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-custompropbind2',
  templateUrl: './custompropbind2.component.html',
  styleUrls: ['./custompropbind2.component.css']
})
export class Custompropbind2Component implements OnInit {

    //alias for partent data (information)
    @Input() information: string[];
    
    //alias for partent data (emp)
    @Input('emp') employees: string[];
    
    
    /*Ouput alias for custom events, with new event emitter method*/
    @Output() emitButtonfinfo = new EventEmitter();
     
    /*method used for click event*/
    buttonInfo(){
        /*emit event added to alias for Output method*/
        this.emitButtonfinfo.emit('Output information from event emitter');
    };
     

    constructor() { }

    ngOnInit() {
    }

}
