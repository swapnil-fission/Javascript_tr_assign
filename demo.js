const a= {
    name: "Swapnil",
    Lname:"Dhoble",
    age:24,
    city:"Nagpur"
};
//console.log(a);

const b={name: "Akash",
no:123,
id:4}

const c= Object.create(b);
//console.log(a);
console.log(c);
console.log(c.id);
const d= Object.assign(a,b);
console.log(d);
console.log(d.name);