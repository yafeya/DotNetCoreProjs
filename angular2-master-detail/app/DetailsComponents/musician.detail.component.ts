import { Component, OnInit, Input, Injector}     from '@angular/core';
import * as models from '../Models/index';

@Component({
    selector: 'instrument-detail',
    template: `<h3>{{person.name}}</h3>
               <h4>{{person.instrument}}</h4>`

})
export class MusicianDetailComponent {

    @Input() person: models.Musician;

    constructor(private injector: Injector) {
        this.person = this.injector.get('person');
     }
}