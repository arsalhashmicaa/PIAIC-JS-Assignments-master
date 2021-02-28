var f_no = prompt("Please enter first digit", "0");
var s_no = prompt("Please enter second digit", "0");
var sign = prompt("Please enter required operation", "+,-,*,/");
var first= parseInt(f_no);
var second =parseInt(s_no)

if(sign== '+'){
    var answer= first + second ;
    alert("Result = "+ answer);
}
else if (sign== '-'){
    var answer= first - second ;
    alert("Result = "+ answer);
}
else if(sign== '*'){
    var answer= first * second ;
    alert("Result = "+ answer);
}
else if(sign== '/'){
    var answer= first / second ;
    alert("Result = "+ answer);
}
else{
    alert("Enter a Valid symbol")
}
