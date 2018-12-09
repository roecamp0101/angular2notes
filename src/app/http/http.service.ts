import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//import module Http for http service.
//import Headers to add headers to the http requests
//import Observable to to watch for changes on http requests

@Injectable()
export class HttpService {
    //using the private keyword to assign the alias ' http ' to module Http
    //the built in Http module allows you to get and post requests to differnt servers or external JSON files
    constructor(private http: Http) { }
    
    
   /*
    //method used to ' post ' information from a server.
    //info is the data being sent to the server (ie. array, string, number, boolean)
    postServers(info:any){
        
        //variable ' header '  being assigned to the ' Headers ' object in angular to identify what type of data is being sent. This is optional if your server requires headers.
        const header = new Headers ({'Content-Type': 'application/json'}); 
        
        
        //first argument from a post request is the address, second argument is the information (ie. any array, a string, a number), third is the type of data being sent to the server (ie. json, xml, html ect...stored within the headers)
         return this.http.post('https://teamtreehouse.com/roeroe.json', info, {headers:header}); 
     
       
    }
    
    */
    
    
    //method used to ' get ' information from a server. (A better way to get data from the sever)
    getServers(){
        
        //return the ' http ' alias with the method ( get() ) to extract data from the server
      //return  this.http.get('https://teamtreehouse.com/roeroe.json');
        
        
        //used to extract server data onto the template
        return  this.http.get('https://teamtreehouse.com/roeroe.json')
            //the map function transforms the data the observable omits
            //map is usually used to extract data from the observable into the template
            .map(
                (response: Response) =>{
                    //variable data assigned to the server data in json form
                    const data = response.json();
                    //return data from the server request
                    //**badges is a keyword on treehouse server request**
                    return data.badges;
                }
        
                )
                //catch method is used to catch any error that occur on the http request.
                .catch((error:Response) => {
            
                    console.log(error)
                    return Observable.throw('there was an error')
                });
           
        }

//method used to ' get ' information from a server.
getData(){
    //used to extract server data onto the template
     return this.http.get('https://jsonplaceholder.typicode.com/photos')
         .map((response:Response) => response.json()); //using the map method to turn the ' response ' request into a json information 
            
 }

    }
