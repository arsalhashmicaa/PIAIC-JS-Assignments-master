
var First_o = parseInt(prompt("Enter First Course obtain Marks " , "90")) ;
var First_t = parseInt(prompt("Enter First Course Total Marks " , "100")) ;

var Second_o = parseInt(prompt("Enter Second Course obtain Marks " , "90")) ;
var Second_t =  parseInt(prompt("Enter Second Course Total Marks " , "100")) ;

var Third_o = parseInt(prompt("Enter Third Course obtain Marks " , "90")) ;
var Third_t = parseInt(prompt("Enter Third Course Total Marks " , "100")) ;

var Forth_o = parseInt(prompt("Enter Forth Course obtain Marks " , "90")) ;
var Forth_t = parseInt(prompt("Enter Forth Course Total Marks " , "100")) ;

var Fifth_o = parseInt(prompt("Enter Fifth Course obtain Marks " , "90")) ;
var Fifth_t = parseInt(prompt("Enter Fifth Course Total Marks " , "100")) ;

var Total_o= First_o + Second_o + Third_o + Forth_o + Fifth_o;
var total_marks= First_t + Second_t + Third_t + Forth_t + Fifth_t;
var average= (Total_o* 100)/ total_marks ;
console.log(average);

    switch(true){
        case (average >= 90):
            console.log(" Your grade is 'A+'");
            alert(" Your grade is 'A+'")
            break;

        case ( average >= 75):
            console.log("Your grade is 'A'");
            alert("Your grade is 'A'");
            break;
        
        case ( average >= 60):
            console.log("Your grade is 'B'");
            alert("Your grade is 'B'");
            break;

        case (average >= 45):
            console.log("Your grade is 'C'");
            alert("Your grade is 'C'");
            break;

        case (average >= 30):
            console.log("Your grade is 'D'");
            alert("Your grade is 'D'");
            break;

        case (average >= 0):
            console.log("Your grade is 'F'");
            alert("Your grade is 'F'");
            break;

            default:
                alert("Enter Valid Values");
                break;
        
    }
