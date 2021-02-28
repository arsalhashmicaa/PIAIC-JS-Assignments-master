var f_tm = prompt("Please enter first course total marks", "0");
var f_om = prompt("Please enter first course obtain marks", "0");

var s_tm = prompt("Please enter second course total marks", "0");
var s_om = prompt("Please enter second course obtain marks", "0");

var t_tm = prompt("Please enter third course total marks", "0");
var t_om = prompt("Please enter third course obtain marks", "0");

var fo_tm = prompt("Please enter forth course total marks", "0");
var fo_om = prompt("Please enter forth course obtain marks", "0");

var fi_tm = prompt("Please enter five course total marks", "0");
var fi_om = prompt("Please enter five course obtain marks", "0");

var first_tm = parseInt(f_tm);
var first_om =parseInt (f_om);

var second_om =parseInt (s_om);
var second_tm = parseInt(s_tm);

var third_om =parseInt (t_om);
var third_tm = parseInt(t_tm);

var forth_om =parseInt (fo_om);
var forth_tm = parseInt(fo_tm);

var fifth_om =parseInt (fi_om);
var fifth_tm = parseInt(fi_tm);

var total_om= first_om+ second_om + third_om + forth_om + fifth_om;

var total_tm = first_tm+ second_tm + third_tm + forth_tm + fifth_tm;

var avg= (total_om * 100) / total_tm;

alert("your average marks are =" + avg);

