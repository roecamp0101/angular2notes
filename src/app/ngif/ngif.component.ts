import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

    /*conditional variable*/
    conditional:boolean = false;
    
    /*conditional variable for else statement*/
    shown:boolean = false;
    
    /*method for conditional statement*/
    showinfos(){
        /*conditional variable change*/
        this.conditional = true;
    }

    /*method for conditional else statement*/
    toggleResults(){
        /*conditional variable being toggled*/
       this.shown = !this.shown;
    }
    
    constructor() { }

    ngOnInit() {
    }

}
