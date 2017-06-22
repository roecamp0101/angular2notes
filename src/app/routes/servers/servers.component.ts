import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   
    constructor(private activeroute: ActivatedRoute) { }
    

    ngOnInit() {
        
        //retreiving queryParams
        console.log(this.activeroute.snapshot.queryParams);
        //retreiving queryParams
        console.log(this.activeroute.snapshot.fragment);
        
        //retreiving queryParams by subscribing to the change within the parameters
        console.log(this.activeroute.queryParams.subscribe());
        //retreiving queryParams by subscribing to the change within the parameters
        console.log(this.activeroute.fragment.subscribe());
        
        //queryParamsHandeling: 'preserve' preservers the query link parameters for the next navigation
    }

}
