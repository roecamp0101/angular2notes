import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    /*variable for interperlation*/
    title:string = 'app works, Yeeeaahh!';

    /*variable for method interperlation*/
    singer:string = 'I can sing!';

    /*method interperlation*/
    getInfo(){
        return this.singer;
    }
  
  //The text that will change on click
 change: any = "Change This Text On click";
  
 //Two-way binding variable (changeInfo)
 changeInfo: any = "";

//Method used to change the text of change variable
 changeMethod(){
        this.change = this.changeInfo;
    }
  
}
