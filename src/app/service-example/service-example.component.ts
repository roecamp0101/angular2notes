import { Component } from '@angular/core';
import { Logger } from '../service/service.logging'; //service class ( Logger ) imported in the component you want to use it in

@Component({
    selector: 'app-service-example',
    templateUrl: './service-example.component.html',
    styleUrls: ['./service-example.component.css'],
    providers: [Logger] //providers allow you to use the service class ( Loggger ) in a particular component

})
export class ServiceExampleComponent {
    //variable title
    title: string;
    
    //private keyword used to link the alias ( logging ) to the service class ( Logger )
    constructor(private logging: Logger) {}

    
    ngOnInit() {
        //variable title is assigned  to the method "log()" witin service
        this.title = this.logging.log();
    }

}
