import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //this is how routes are added

import { UserComponent } from './routes/user/user.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { ServersComponent } from './routes/servers/servers.component';
import { ServerComponent } from './routes/servers/server/server.component';
import { ExtraserversComponent } from './routes/extraservers/extraservers.component';
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
    {path: 'extra', component: ExtraserversComponent},
    //In order to catch all routes that are not part of your navigation add the wild card ' ** '
    //redirectTo allow you to redirect to the page you want whenever a wrong link is reached.
    {path: '**', redirectTo: '', pathMatch: 'full'} // pathMatch allows you to redirect only if the full path is fullfilled. ie. '/' will only redirect if router will apply the redirect if and only if navigating to '/'


  //loadChildren will enable lazy loading in your app. You should use lazy loading on the component that has the most code.
    /* ./recipes/recipes.module is a feature module #RecipesModule is the name of the Exported Module */
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }


  
  
 /*Ahead of time compelation is the basic complation of the template to javascript before going into production.
You have the JIT (Just In Time) compelation which the regular way things run the browser

JIT
(1)Development
(2)Production (same as running 'ng serve')
(3)App Download To Browser (Bootstrap the app)
(4)Angular Parses & Complies Template to Javascript

AOT
(1)Development
(2)Angular Parses & Complies Template to Javascript
(3)Production (same as running 'ng serve')
(4)App Download To Browser (Bootstrap the app)

To use ng build --prod --aot
*/ 
  
  
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //RouterModule is used to register the routes (routes)
    //imports: [RouterModule.forRoot(routes, {useHash: true})] //The useHash Adds a # in the middle of a link. ie. localhost:4200/#/ or localhost:4200/#/contact
    exports: [RouterModule], 
    providers: []
})
export class AngularNotesRoutingModule { }
