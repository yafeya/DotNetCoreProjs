import { Person } from './person';

export class Student extends Person{
    studentNum:number;

    say(){
        console.log("I am a student");
    }
}