"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var models = require('../Models/index');
var TeacherDetailComponent = (function () {
    function TeacherDetailComponent(injector) {
        this.injector = injector;
        this.person = this.injector.get('person');
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models.Teacher)
    ], TeacherDetailComponent.prototype, "person", void 0);
    TeacherDetailComponent = __decorate([
        core_1.Component({
            selector: 'instrument-detail',
            template: "<h3>{{person.name}}</h3>\n               <h4>{{person.expertise}}</h4>"
        }), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], TeacherDetailComponent);
    return TeacherDetailComponent;
}());
exports.TeacherDetailComponent = TeacherDetailComponent;
//# sourceMappingURL=teacher.detail.component.js.map