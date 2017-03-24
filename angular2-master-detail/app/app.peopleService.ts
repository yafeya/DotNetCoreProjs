import { Injectable } from '@angular/core';
import * as models from './Models/index';

@Injectable()
export class PeopleService { 

 persons:models.Person[];
 
 constructor(){
   console.log("People Component");
   
   this.persons=[
     this.createStudent("student1",1),
     this.createStudent("student2",2),
     this.createStudent("student3",3),
     this.createTeacher("teacher1","Match"),
     this.createTeacher("teacher2","Music"),
     this.createTeacher("teacher3","Physical"),
     this.createMusician("musician1","French Horn"),
     this.createMusician("musician2","Trumpet"),
     this.createMusician("musician3","Trombone"),
     ];
 }

 private createStudent(name:string, num:number):models.Student{
   let student = new models.Student();
   student.name = name;
   student.studentNum = num;
   return student;
 }

 private createTeacher(name:string, expertise:string):models.Teacher{
    let teacher = new models.Teacher();
    teacher.name = name;
    teacher.expertise = expertise;
    return teacher;
 }

 private createMusician(name:string, instrument:string):models.Musician{
     let musician = new models.Musician();
     musician.name = name;
     musician.instrument = instrument;
     return musician;
 }
}