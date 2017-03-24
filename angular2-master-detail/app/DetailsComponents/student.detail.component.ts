import { Component, OnInit, Input, Injector }     from '@angular/core';
import * as models from '../Models/index';

@Component({
    selector: 'instrument-detail',
    template: `<h3>{{person.name}}</h3>
               <h4>{{person.studentNum}}</h4>`

})
export class StudentDetailComponent {

    @Input() person: models.Student;

    constructor(private injector: Injector) {
        this.person = this.injector.get('person');
     }
}