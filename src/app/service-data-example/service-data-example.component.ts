import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../service/account-service.service'; //service class ( AccountServiceService ) imported in the component you want to use it in
@Component({
    selector: 'app-service-data-example',
    templateUrl: './service-data-example.component.html',
    styleUrls: ['./service-data-example.component.css'],
    providers: [AccountServiceService] //providers allow you to use the service class ( AccountServiceService ) in a particular component
})
export class ServiceDataExampleComponent implements OnInit {
    //accounting variable 
    accounting: {}[] = [];

     //private keyword used to link the alias ( account ) to the service class ( AccountServiceService )
    constructor(private account: AccountServiceService) { }

    ngOnInit() {
       //variable accouting is assigned to the array "accounts = []" within the service
        this.accounting = this.account.accounts;
    }

}
