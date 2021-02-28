
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
for(i=0;i<course.length;i++){
    var first = prompt("your course # "+ (i+1), course[i]);
course.splice(i,1,first)
}


alert(course);
