var inputvalue = prompt("convert content into Capitalized" , "cloud native computing")
var inputsliced= inputvalue.split(" ");
var msg2="";


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




var num = prompt("Fictorialize number" , "e.g. 4")
    var val=1;
    while(num>1){

      val= val * num;
      num=num-1;
      
    }
    console.log(val);