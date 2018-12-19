import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import 'rxjs/Rx'; //this is no longer needed
import { Observable } from 'rxjs/Observable';
//import module Http for http service.
//import Headers to add headers to the http requests
//import Observable to to watch for changes on http requests



//The new way of doing things
import { map, catchError } from 'rxjs/operators'; //before using the map/catchError function you have to import it from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs'; //this is the new way to call an observable/of/throwError. You import it from 'rxjs'.

//The new HttpClient Module
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http'; //HttpClient, HttpHeaders, HttpRequest is imported from the @angular/common/http



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
    
    
    //method used to ' get ' information from a server. **(A better way to get data from the sever)**
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
  
  
  
  
  
  
  
  
  
  
  //The New HttpClient Code
 constructor(private httpclient: HttpClient, private httpheaders: HttpHeaders, private httpparams: HttpParams ) { }

  getData(){

       return this.httpclient.get('https://jsonplaceholder.typicode.com/photos',
        /*with the HttpClient module you can 'observe' the data your get back
        and you can specify what kind of data you get back with 'responseType'.

            {observe: "response", responseType:'json'} //this will log the default json data to you
            {observe: "response", responseType:'text'} // this will log the json data to you but will give you it back in a text form
            {observe: "body", responseType:'text'} // this will log the body of the 'json' back to you but in a text form.
            {observe: "body", responseType:'arraybuffer'} //this will log the body back as an array type
        */
            {observe: "events" , responseType:'arraybuffer', params:this.httpparams.set('auth', 'author'), headers: this.httpheaders.set('Content-Type', 'application/json')
        },

          )
           .map((response) => {
             //return response;
             console.log(response);
             //reportProgress will report the progress of the http request
             const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {reportProgress: true});

           });

   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  //This is the new way to do the map function with the pipe method
      getInfoFromServer(){
  return  this.http.get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow')
        .pipe(map(
            (response) =>{
              return response;
            }
        ), //end of map

        catchError(
            (error) =>{
              return throwError('something went terriably wrong' + error);
            }
        )



      );

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

    }
