import { Injectable } from '@angular/core';

@Injectable() /*You use the @Injectable() method when you want to inject a service within a service. ie. 
if you create service called 'singing.service.ts' and you want to inject the 'Http' service within the singing service. */
export class Logger {
    
    /*a method that the service has, returing some text 'Some Information from A Service!'*/
   log() {
        return 'Some Information from A Service!';
    }
}

