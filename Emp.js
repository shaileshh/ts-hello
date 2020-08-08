"use strict";
exports.__esModule = true;
exports.Emp = void 0;
//we declare class as export so that we can access it out side the file
var Emp = /** @class */ (function () {
    function Emp(_name) {
        this._name = _name;
    }
    Emp.prototype.getName = function () {
        return 'Employee name is ' + this._name;
    };
    return Emp;
}());
exports.Emp = Emp;
