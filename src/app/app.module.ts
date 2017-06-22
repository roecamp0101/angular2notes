import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NesttingComponent } from './nestting/nestting.component';
import { Nestting2Component } from './nestting2/nestting2.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { VariationComponent } from './variation-selector/variation-selector.component';
import { VariationSelector2Component } from './variation-selector2/variation-selector2.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CustompropbindComponent } from './custompropbind/custompropbind.component';
import { Custompropbind2Component } from './custompropbind2/custompropbind2.component';
import { LocalrefComponent } from './localref/localref.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HighlightDirective } from './attribute-directive/highlight.directive';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ServiceExample2Component } from './service-example2/service-example2.component';
import { ServiceDataExampleComponent } from './service-data-example/service-data-example.component';
//import { BetterhighlightDirective } from './better_attribute-directive/betterhighlight.directive';
import { UserComponent } from './routes/user/user.component';
import { HomeComponent } from './routes//home/home.component';
import { ContactComponent } from './routes//contact/contact.component';
import { ServersComponent } from './routes//servers/servers.component';
import { ServerComponent } from './routes/servers/server/server.component';
import { AngularNotesRoutingModule } from './app-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { Observable2Component } from './observable2/observable2.component';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';
import { Shortenpipe } from './pipes/shortenpipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NesttingComponent,
    Nestting2Component,
    InlineTemplateComponent,
    VariationComponent,
    VariationSelector2Component,
    PropertyBindingComponent,
    EventBindingComponent,
    NgifComponent,
    NgstyleComponent,
    NgclassComponent,
    NgforComponent,
    CustompropbindComponent,
    Custompropbind2Component,
    LocalrefComponent,
    ViewchildComponent,
    NgcontentComponent,
    LifecycleComponent,
    HighlightDirective,
    NgswitchComponent,
    ServiceExampleComponent,
    ServiceExample2Component,
    ServiceDataExampleComponent,
    //BetterhighlightDirective
    UserComponent,
    HomeComponent,
    ContactComponent,
    ServersComponent,
    ServerComponent,
    ObservableComponent,
    Observable2Component,
    FormComponent,
    PipesComponent,
    Shortenpipe,
    FilterPipe,
    HttpComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularNotesRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
