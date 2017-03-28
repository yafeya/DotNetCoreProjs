import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule, HttpModule }          from '@angular/http';
import { AppComponent }  from './app.component';
import { PeopleService } from './app.peopleService';
import { ToDoItemsService } from './todoItemsService';
import { DynamicComponent } from './dynamic-component';
import * as details from './DetailsComponents/index';
import * as models from './Models/index';

@NgModule({
  imports:      [ BrowserModule, JsonpModule, HttpModule ],
  declarations: [ 
                  AppComponent, 
                  DynamicComponent,
                  details.StudentDetailComponent, 
                  details.TeacherDetailComponent, 
                  details.MusicianDetailComponent 
                ],
  providers:    [ PeopleService, ToDoItemsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
