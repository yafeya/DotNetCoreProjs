import { Person } from './person';

export class Teacher extends Person{
    expertise:string;

    say(){
        console.log("I am a Teacher");
    }
}