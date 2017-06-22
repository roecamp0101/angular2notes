import { Component, OnInit } from '@angular/core';
import { Logger } from '../service/service.logging'; //service class ( Logger ) imported in the component you want to use it in

@Component({
    selector: 'app-service-example2',
    templateUrl: './service-example2.component.html',
    styleUrls: ['./service-example2.component.css'],
    providers: [Logger] //providers allow you to use the service class ( Loggger ) in a particular component

})
export class ServiceExample2Component implements OnInit {

    //private keyword used to link the alias ( logs ) to the service class ( Logger )
    constructor(private logs: Logger) { }
    
   //LoggingMethod  
    LoggingMethod(){
        
        //alert the log() method from the service class
        alert(this.logs.log());  
    }


    ngOnInit() {
    }

}
