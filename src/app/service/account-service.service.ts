import { Injectable } from '@angular/core';

@Injectable()
export class AccountServiceService {
    //accounts array of objects
     accounts = [
        {firstname: 'John', lastname: 'Bekker'},
        {firstname: 'Jane', lastname: 'Shicka'},
        {firstname: 'Peter', lastname: 'Tuns'}
      
    ];

    constructor() { }

}
