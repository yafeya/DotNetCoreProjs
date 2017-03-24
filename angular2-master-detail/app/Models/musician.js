"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('./person');
var Musician = (function (_super) {
    __extends(Musician, _super);
    function Musician() {
        _super.apply(this, arguments);
    }
    Musician.prototype.say = function () {
        console.log("I am a Musician");
    };
    return Musician;
}(person_1.Person));
exports.Musician = Musician;
//# sourceMappingURL=musician.js.map