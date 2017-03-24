import { Person } from './person';

export class Musician extends Person{
    instrument:string;

    say(){
        console.log("I am a Musician");
    }
}