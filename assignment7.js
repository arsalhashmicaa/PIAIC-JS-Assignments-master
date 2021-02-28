
var number=prompt("Enter the number","e.g. 2.7");
number= Math.ceil(number);
alert(number);
var text="Baby i love you";
var sliced= text.slice(0,15);
alert(sliced);
var msg="";
var msg2="";


for(i=sliced.length ; i>0 ; i--)
{
    msg = msg + sliced[i-1];
    
}
alert(msg);


var inputvalue = prompt("enter desire word" , "Cloud Native Computing")
var inputsliced= inputvalue.split(" ");


for(i=0 ;i<inputsliced.length ;i++){


    var tem=inputsliced[i];
    var temp2=tem.split("");
    for(j=0 ;j<temp2.length;j++){
        if(j==0){
msg2= msg2 +" "+ temp2[j].toUpperCase();
        }
        else{
            msg2=msg2 + temp2[j];
        }
        
        
    }
}
console.log(msg2);
