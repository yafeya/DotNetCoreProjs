"use strict";
var Person = (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log("I am a Person");
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map