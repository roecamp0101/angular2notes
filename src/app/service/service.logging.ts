import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
    
    /*a method that the service has, returing some text 'Some Information from A Service!'*/
   log() {
        return 'Some Information from A Service!';
    }
}

