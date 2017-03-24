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
var models = require('./Models/index');
var PeopleService = (function () {
    function PeopleService() {
        console.log("People Component");
        this.persons = [
            this.createStudent("student1", 1),
            this.createStudent("student2", 2),
            this.createStudent("student3", 3),
            this.createTeacher("teacher1", "Match"),
            this.createTeacher("teacher2", "Music"),
            this.createTeacher("teacher3", "Physical"),
            this.createMusician("musician1", "French Horn"),
            this.createMusician("musician2", "Trumpet"),
            this.createMusician("musician3", "Trombone"),
        ];
    }
    PeopleService.prototype.createStudent = function (name, num) {
        var student = new models.Student();
        student.name = name;
        student.studentNum = num;
        return student;
    };
    PeopleService.prototype.createTeacher = function (name, expertise) {
        var teacher = new models.Teacher();
        teacher.name = name;
        teacher.expertise = expertise;
        return teacher;
    };
    PeopleService.prototype.createMusician = function (name, instrument) {
        var musician = new models.Musician();
        musician.name = name;
        musician.instrument = instrument;
        return musician;
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=app.peopleService.js.map