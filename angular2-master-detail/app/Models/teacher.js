"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('./person');
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.apply(this, arguments);
    }
    Teacher.prototype.say = function () {
        console.log("I am a Teacher");
    };
    return Teacher;
}(person_1.Person));
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map