import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import { PeopleService } from './app.peopleService';
import { ToDoItemsService } from './todoItemsService';
import * as details from './DetailsComponents/index';
import * as models from './Models/index';

@Component({
  selector: 'my-app',
  templateUrl: 'views/home.html',
})
export class AppComponent {
  persons: models.Person[];
  currentPerson: models.Person;
  componentData: any;

  constructor(private peopleService: PeopleService, private todoItemsService: ToDoItemsService) {
    this.persons = this.peopleService.persons;

    this.currentPerson = this.persons[0];

    let func1: () => models.Person = () => new models.Musician();
    let message = typeof func1;
    console.log(message);
    let instance = func1();
  }

  createStudentDetail() {
    this.componentData = {
      component: details.StudentDetailComponent,
      inputs: {
        person: this.currentPerson
      }
    };
  }

  createTeacherDetail() {
    this.componentData = {
      component: details.TeacherDetailComponent,
      inputs: {
        person: this.currentPerson
      }
    };
  }

  createMusicianDetail() {
    this.componentData = {
      component: details.MusicianDetailComponent,
      inputs: {
        person: this.currentPerson
      }
    };
  }

  onSelectPerson(person: models.Person): void {
    this.currentPerson = person;
    person.say();
    if (person instanceof models.Student) {
      this.createStudentDetail();
    }
    else if (person instanceof models.Teacher) {
      this.createTeacherDetail();
    }
    else {
      this.createMusicianDetail();
    }
  }

  onGetAll() {
    this.todoItemsService.getAll();
  }

  onGetById() {
  }

  onPut() {
  }

  onPost() {
  }

  onDelete() {
  }
}
