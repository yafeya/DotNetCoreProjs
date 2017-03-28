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
var app_peopleService_1 = require('./app.peopleService');
var todoItemsService_1 = require('./todoItemsService');
var details = require('./DetailsComponents/index');
var models = require('./Models/index');
var AppComponent = (function () {
    function AppComponent(peopleService, todoItemsService) {
        this.peopleService = peopleService;
        this.todoItemsService = todoItemsService;
        this.persons = this.peopleService.persons;
        this.currentPerson = this.persons[0];
        var func1 = function () { return new models.Musician(); };
        var message = typeof func1;
        console.log(message);
        var instance = func1();
    }
    AppComponent.prototype.createStudentDetail = function () {
        this.componentData = {
            component: details.StudentDetailComponent,
            inputs: {
                person: this.currentPerson
            }
        };
    };
    AppComponent.prototype.createTeacherDetail = function () {
        this.componentData = {
            component: details.TeacherDetailComponent,
            inputs: {
                person: this.currentPerson
            }
        };
    };
    AppComponent.prototype.createMusicianDetail = function () {
        this.componentData = {
            component: details.MusicianDetailComponent,
            inputs: {
                person: this.currentPerson
            }
        };
    };
    AppComponent.prototype.onSelectPerson = function (person) {
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
    };
    AppComponent.prototype.onGetAll = function () {
        this.todoItemsService.getAll();
    };
    AppComponent.prototype.onGetById = function () {
    };
    AppComponent.prototype.onPut = function () {
    };
    AppComponent.prototype.onPost = function () {
    };
    AppComponent.prototype.onDelete = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'views/home.html',
        }), 
        __metadata('design:paramtypes', [app_peopleService_1.PeopleService, todoItemsService_1.ToDoItemsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map