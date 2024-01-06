//Abstract Class tanımlama ve kullanımı
abstract class Department
{
    deptName:string;
    getDeptName():void
    {
        console.log("Department Name: "+this.deptName);
    }

    abstract sayHello(str:string):void;
}
class Program extends Department
{
    sayHello(str: string): void {
        return console.log("Hello :"+str);
    }
    
}

let pg = new Program();
pg.deptName="IT";
pg.getDeptName();
pg.sayHello("Rami");
