const pobj=new Promise((resolve,reject)=>{
setTimeout(()=>{
    let rollno=[1,2,3,4,5]
    resolve(rollno);
    //reject('Error');
},2000);
});

const bd=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let emp={
                name:"Swapnil",
                age:24
            };
            resolve(`My name is ${emp.name} and I am ${emp.age} year old and rollno is ${indexdata}`)
        },2000,indexdata)
    });
}

pobj.then((rollno)=>{
    console.log(rollno);
    return bd(rollno[1])
        }).then((hello)=>{
            console.log(hello);
        }).catch((error)=>{
                console.log(error);
            });