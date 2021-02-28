
var course=[];



var first = prompt("Please enter first course name", "abc");
course.push(first);
var second = prompt("Please enter second course name", "abc");
course.push(second);
var third = prompt("Please enter third course name", "abc");
course.push(third);
var forth = prompt("Please enter forth course name", "abc");
course.push(forth);
var fifth = prompt("Please enter fifth course name", "abc");
course.push(fifth);

alert(course);
var first = prompt("your first course = ", course[0]);
course.splice(0,1,first)
var second = prompt("your second course = ", course[1]);
course.splice(1,1,second)
var third = prompt("your third course = ", course[2]);
course.splice(2,1,third)
var forth = prompt("your forth course = ", course[3]);
course.splice(3,1,forth)
var fifth = prompt("your fifth course = ", course[4]);
course.splice(4,1,fifth)

alert(course);
