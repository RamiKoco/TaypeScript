var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.GetFunc = function (y, x) {
        return x * y;
    };
    return Customer;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.GetFunc = function (y, x) {
        return x + y;
    };
    return Employee;
}());
var emp = new Employee();
var cus = new Customer();
emp.PersonName = "Cemal";
emp.PersonPhone = 12345;
emp.PersonStatus = true;
cus.PersonName = "Rami";
cus.PersonPhone = 123;
cus.PersonStatus = false;
var mesage1 = emp.GetFunc(2, 3) + "\nName: " + emp.PersonName + "\nPhone: " + emp.PersonPhone
    + "\nStatus: " + emp.PersonStatus;
console.log(mesage1);
console.log("----------------");
var mesage2 = cus.GetFunc(2, 3) + "\nName: " + cus.PersonName + "\nPhone: " + cus.PersonPhone
    + "\nStatus: " + cus.PersonStatus;
console.log(mesage2);
