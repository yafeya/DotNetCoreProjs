"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('./person');
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.apply(this, arguments);
    }
    Student.prototype.say = function () {
        console.log("I am a student");
    };
    return Student;
}(person_1.Person));
exports.Student = Student;
//# sourceMappingURL=student.js.map