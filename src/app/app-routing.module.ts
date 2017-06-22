import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //this is how routes are added

import { UserComponent } from './routes/user/user.component';
import { HomeComponent } from './routes//home/home.component';
import { ContactComponent } from './routes//contact/contact.component';
import { ServersComponent } from './routes//servers/servers.component';
import { ServerComponent } from './routes/servers/server/server.component';
import { ObservableComponent } from './observable/observable.component';


//alias routes links to the Routes angular structure
const routes: Routes = [
    
      //path represents the url, and the component represents the page you want shown
    {path: '', component: HomeComponent},
    //to pass static data to route we use the ' data ' property
    {path: 'user', component: UserComponent, data: {message: 'The users page'}},
    {path: 'contact', component: ContactComponent},
    //:id allows for the dynamic loading of parameters in a path
    {path: 'contact/:id1/:id2', component: ContactComponent},
    {path: 'observable/:id', component: ObservableComponent},
    //To add child routes to a path use children 
    {path: 'servers', component: ServersComponent, children: [
      {path: '', component: ServerComponent}
    ]},
    {path: 'servers/:id3/:id4', component: ServersComponent},
    //In order to catch all routes that are not part of your navigation add the wild card ' ** '
    //redirectTo allow you to redirect to the page you want whenever a wrong link is reached.
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //RouterModule is used to register the routes (routes)
    exports: [RouterModule], 
    providers: []
})
export class AngularNotesRoutingModule { }
