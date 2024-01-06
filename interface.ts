//  Interface tanımlama ve kullanımı 
interface IPerson
{
    
    PersonName:string;
    PersonPhone:number;
    PersonStatus:boolean;
    GetFunc(y:number,x:number):number;
}

class Customer implements IPerson
{
    PersonName: string;
    PersonPhone: number;
    PersonStatus: boolean;
    GetFunc(y:number,x:number) {
        return x*y;
    }

}

class Employee implements IPerson
{
    PersonName: string;
    PersonPhone: number;
    PersonStatus: boolean;
    GetFunc(y:number,x:number) {
       return x+y;
    }

}

let emp = new Employee();
let cus = new Customer();
emp.PersonName="Cemal";
emp.PersonPhone=12345;
emp.PersonStatus=true;
cus.PersonName="Rami";
cus.PersonPhone=123;
cus.PersonStatus=false;

let mesage1=emp.GetFunc(2,3)+"\nName: "+emp.PersonName+"\nPhone: "+emp.PersonPhone
+"\nStatus: "+emp.PersonStatus;
console.log(mesage1);
console.log("----------------");
let mesage2=cus.GetFunc(2,3)+"\nName: "+cus.PersonName+"\nPhone: "+cus.PersonPhone
+"\nStatus: "+cus.PersonStatus;
console.log(mesage2);