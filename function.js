//Fonksiyon oluşturma ve kullanımı
// function GetNum(num1,num2)
// {
//     return num1+num2;
// }
// console.log(GetNum(3,5));
// function sayHello(strName:string='Default Name',Age:number=10)
// {
//     return "Hello: "+strName+" Ande Your Age Is :"+Age;
// }
// console.log(sayHello('Rami',31));
// console.log(sayHello('☻',14));
// console.log(sayHello());
function myMethod() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < num.length; i++) {
        result += num[i];
    }
    return "Result: " + result;
}
console.log(myMethod(2, 12, 4, 7, 8, 5));
