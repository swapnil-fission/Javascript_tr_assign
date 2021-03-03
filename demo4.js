class Person{
constructor(name,age)
{
    this.name=name;
    this.age=age;
}
}
class Emp extends Person{
    constructor(name,age,empid)
    {
        super(name,age)
        this.empid=empid;
    }
    prnt()
    {
         console.log('My name is '+ this.name + ' My age is '+ this.age + ' employeeid is '+ this.empid); 
    }
}
let e= new Emp("Swapnil",24,1);
e.prnt();