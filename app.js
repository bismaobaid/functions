//                     ***********    FUNCTIONS   35 to 38     **********

// QUESTION NO: 1 Write a function that displays current date & time in your browser.

// ANSWER:

// function date(){
//     var a =new Date();
//     document.write(a);
// }
// date();

// QUESTION NO: 2 Write a function that takes first & last name and then it greets the user using his full name.

// ANSWER:

// function fullname(first_name,last_name){

//     return a.concat(b);
// }
// var a=prompt("enter your first name");
// var b=prompt("enter your second name");
// var c=fullname(a,b);
// document.write(" Welcome ! "+ c);

// QUESTION NO: 3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// ANSWER:

// function add(no1,no2){
//     return a+b;

// }
// var a=+prompt("enter the first number");
// var b=+prompt("enter the second number");
// var c=add(a,b);
// document.write("the first no is : "+a+"<br>");
// document.write("the second no is : "+b+"<br>");
// document.write("the addition of two no is "+ c);

// QUESTION NO: 4 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

// ANSWER:

// function operation(num1,num2,operator){
//     if(c==="+"){
//         return a+b;
//     }
//     else if(c==="-"){
//         return a-b;
//     }
//     else if(c==="*"){
//         return a*b;
//     }
//     else if(c==="/"){
//         return a/b;
//     }
//     else if(c==="%"){
//         return a%b;
//     }
//     else{
//         return "not valid oprerator";
//     }

// }
// var a=+prompt("enter the first number");
// var b=+prompt("enter the second number");
// var c=prompt("enter the operation u want to perform");
// var d=operation(a,b,c);
// document.write("the first no is : "+a+"<br>");
// document.write("the second no is : "+b+"<br>");
// document.write("the operator is : "+c+"<br>");
// document.write("the operation performed is : "+d+"<br>");

// QUESTION NO: 5 Write a function that squares its argument.

// ANSWER:

// function square(number){
//     return number*number;
// }
// var a=+prompt("enter the no u want to take square");
// var c=square(a);
// document.write("the enter no is  "+a+"<br>");
// document.write("the square of the no is : "+c);

// QUESTION NO: 6 Write a function that computes factorial of a number.

// ANSWER:

// function factorial(number){
//     var a=1;
//     for(i=number;i>=1;i--){
//         var a=i*a;
//     }
//     return a;
// }
// var no=+prompt("enter the no u want to take factorial ");
// var b=factorial(no);
// document.write("the enter no is "+no+"<br>");
// document.write("the factotrial of the no is  : "+b);

// QUESTION NO: 7  Write a function that take start and end number as inputs & display counting in your browser

// ANSWER:

// function counting(a,b){
//     for(i=a;i<=b;i++){
//         document.write(i+"<br>");

//     }

// }
// var a=+prompt("enter the first number");
// var b=+prompt("enter the second number");
// counting(a,b);

// QUESTION NO: 8 Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

//ANSWER: 08
// var b = prompt("Enter the base of the triangle: ");
// var p = prompt("Enter the perpendicular of the triangle: ");
// function calcHypotenuse(b,p){
//    h = Math.pow(b,2) + Math.pow(p,2);
//    return h;
// }
// function calculateSquare(){
//     var res;
//     res = calcHypotenuse(b,p)
//     var hypt = Math.sqrt(res);
//     return hypt;
//  }
// var z = calculateSquare();
// alert("The hypotenuse of a right angle triangle is: "+ z);

// QUESTION NO: 9

// Write a function that calculates the area of a rectangle.
//  A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// ANSWER:

// function areaoftriangle(width,height){

//     return width*height;
// }

// var a=+prompt("enter the width of the rectangle");
// var b=+prompt("enter the height of the rectangle");
// var c=areaoftriangle(a,b);
// var d=areaoftriangle(2,3);
// document.write("the area of rectangle is with variable is : "+ c+"<br>");
// document.write("the area of rectangle is with values  is : "+ d+"<br>");

// QUESTION NO: 10 Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// ANSWER: 

// function palindrome(a){
//     var b=a.length;
//     var c="";
//     for(i=b-1;i>=0;i--){
//         c+=a[i];
//     }
//     if (c===a){
//         alert("the input is palidrome");
//     }
//     else{
//         alert("the input is not palidrome");
//     }
// }
// var a =prompt("enter the input");
// palindrome(a);

// QUESTION NO: 11 :

// ANSWER:

// function Upper(){
//     var line = "freeCodeCamp is an awesome resource";
//     var words = line.split(" ");
    
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         console.log(words[i]);
//     }
    
//     words.join(" ");   
// }
// Upper();



// QUESTION NO : 12

// ANSWER:

// function longestword(str){
//     var a=str.split(" ");
//     var longest_word="";
//     var maxlength=0;
//     for(var i=0;i<a.length;i++){
//         if(a[i].length>maxlength){
//             maxlength=a[i].length;
//             longest_word=a[i];
//         }   
//     }
//     document.write("the longest word is : "+longest_word);
// }
// var string=prompt("enter the input");
// longestword(string);


// QUESTION NO: 13

// ANSWER: 

// function no_of_occurance_of_letter(a,b){

//     var length_of_string=a.length;
//     var c=0;
//     for(var i=0;i<length_of_string;i++){
//         if (a[i]==b){
//             c=c+1;
//         }
//     }
//     document.write("the occurance of letter "+ b +" is "+c);
// }
// no_of_occurance_of_letter("jsresources.com","o");

// QUESTION NO: 14

// ANSWER:

// function calcCircumference(radius){
//     var c=2*Math.PI*radius;
//     document.write("the circumference of circle is "+c+"<br>");
// }
// function calcArea(radius){
//     var a=Math.PI*radius*radius;
//     document.write("the area of circle is "+a);

// }
// var r=prompt("enter the radius");
// calcCircumference(r);
// calcArea(r);