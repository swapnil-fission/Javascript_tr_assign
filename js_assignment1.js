

function swap(a1,a2)
{
    var count=0;
    var i;
    if(a1.length==a2.length)
    {
    for(i=0;i<a1.length;i++)
    {
        if(a1[i]!=a2[i])
        count++;
    }
    return(count%2===0?count/2:"Not Possible");
   /* if(count%2===0)
    {
        return count/2;
    }
    else
    {
        return "Not Possible";
    }
    */
    }
    return "Not Posiible";
}

var a1="10011001";
var a2="01100110";
console.log(swap(a1,a2));
console.log(swap("110011", "010111"));
console.log(swap("1100", "1001"));