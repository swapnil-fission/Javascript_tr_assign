var a={
    name:"swapnil",
    Lname:"Dhoble",
    gender:"M",
    city:"Nagpur"
};


console.log(a);

function demo(name,Lname,gender,city){
    var b={};
    b.name=name;
    b.Lname=Lname;
    b.gender=gender;
    b.city=city;
    return b;

}
console.log(demo("Akash","Wadh","M","Pune"));

function demo2(name,Lname,gender,city){
this.name=name;
this.Lname=Lname;
this.gender=gender;
this.city=city;
}

console.log(new demo2("Rajesh","Zambre","M","indore"));