import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; //HttpService included from http.service
import { Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

    //private keyword being used to attach ' httpservice ' alias to HttpService module
    constructor(private httpservice: HttpService ) { }
    


    //onGet method used to load request from the servers
    onGet(){
        this.httpservice.getServers() //getting the getServers() method from the httpservice service service.
            .subscribe((response: Response) => {  //subscribing to the changes in getServers() method.
                const data = response.json(); // variable 'data' holds the data from the server ('response'). The .json() method makes it easy to access/extract the data you get from the server
                },
                (error) => { 
                console.log(error); //error method
                }
                      
            );
    }

    
    
    

//variable used to add info from the server ( getData() method ) to the template    
items: any[];
data: any[];

//variable used to add info from the server ( getServers() method ) to the template       
infos: any[];
datas: any[];
    
    ngOnInit() {
        
            //For putting server info on dom ( getServers() ) 
            this.httpservice.getServers().subscribe(
              (datas: any) => {
                const myArray = [];
                for (let key in datas) {
                  myArray.push(datas[key]);
                }
                this.infos = myArray;
              });      
        
        
            //For putting server info on dom ( getData() method )  
            this.httpservice.getData().subscribe(
              (data: any) => {
                const myArray = [];
                for (let key in data) {
                  myArray.push(data[key]);
                }
                this.items = myArray;
              });         
    }

}
