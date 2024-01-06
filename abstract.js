var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract Class tanımlama ve kullanımı
var Department = /** @class */ (function () {
    function Department() {
    }
    Department.prototype.getDeptName = function () {
        console.log("Department Name: " + this.deptName);
    };
    return Department;
}());
var Program = /** @class */ (function (_super) {
    __extends(Program, _super);
    function Program() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Program.prototype.sayHello = function (str) {
        return console.log("Hello :" + str);
    };
    return Program;
}(Department));
var pg = new Program();
pg.deptName = "IT";
pg.getDeptName();
pg.sayHello("Rami");
