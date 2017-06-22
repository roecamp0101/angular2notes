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
}
