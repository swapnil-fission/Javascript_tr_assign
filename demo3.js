var pr=new Promise((resolve,reject)=>{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200)
        {
            resolve("Success");
        }
        else
        {
            reject("Failed");
        }
    }
    xhr.open('GET','http://www.google.com',true);
    xhr.send();
 
});

pr.then(()=>{
    console.log("Success")
}).catch((error)=>{
    console.log(error);
});