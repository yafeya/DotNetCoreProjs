import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PeopleService } from './app.peopleService';
import { DynamicComponent } from './dynamic-component';
import * as details from './DetailsComponents/index';
import * as models from './Models/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                  AppComponent, 
                  DynamicComponent,
                  details.StudentDetailComponent, 
                  details.TeacherDetailComponent, 
                  details.MusicianDetailComponent 
                ],
  providers:    [ PeopleService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
