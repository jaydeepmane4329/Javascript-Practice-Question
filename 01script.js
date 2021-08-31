// Operators_Branching_loops
/*


// **EASY**
01.Programm to add given five numbers
let num = [5,13,7,21,48] 
let sum = 0;
for(let i=0;i<num.length;i++){
    sum = sum + num[i];
}
console.log(sum);//94


//02.Take a input from user and determine whether the number is even or odd
let num = prompt('enter a number');
    if(num%2==0){
        console.log(` ${num} is even number`);
    }else{
        console.log(`${num} is odd number`);
    }


// 03.determine max  between two numbers
let num1 = 129;
let num2 = 251;


if(num1>num2){
    console.log(`${num1} is max number`);
    console.log(`${num2} is min number`);
}
else{
    console.log(`${num2} is max number`);
    console.log(`${num1} is min number`);
}



// 04.Determine the max between three
let num1 = 8;
let num2 = 23;
let num3 = 17;

if(num1>num2 && num1>num3){
    console.log(`${num1} is max number`);
}else if(num2>num1 && num2>num3){
    console.log(`${num2} is max number`);
}else{
    console.log(`${num3} is max number`);
}



// 05.Detrmine the min between three
let num1 = 35 ;
let num2 = 29 ;
let num3 = 46 ;

if(num1<num2 && num1<num3){
    console.log(`${num1} is min number`);
}else if(num2<num1 && num2<num3){
    console.log(`${num2} is min number`);
}else{
    console.log(`${num3} is min number`);
}


// 06.Take month as a input and determine whether the number has 31 days or not;
let month = prompt('enter a month').toLocaleLowerCase();
if(month == 'january' || month == 'march' || month == "may" || month =='july'  || month == 'august' || month == 'october' || month == 'december'){
    console.log(` month ${month} has 31 days in it.`);
}
else if(month == 'february' || month == 'april' || month == 'june' || month =='september' || month=='november'){
    console.log(`month ${month} has not 31 days in it`);
}else{
    console.log(`month ${month} is not valid month`)
}





// **INTERMIDIATE**

// 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

var a = [];
for(var i=0;i<=100;i++){
    a.push(i);
}
for(var i=3;i<=a.length;i++){

    if(a[i]%5==0 && a[i]%3==0){
        a.splice(a[i],1,'FizzBuzz');
          }

    if(a[i]%3==0){
        a.splice(a[i],1,'Fizz');
    }
    if(a[i]%5==0){
       a.splice(a[i],1,'Buzz');
    }
    }
console.log(a);




// 2.pattern program
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
    document.write('*');
    }
    document.write('<br>');
    
}


// 3.Write a program to take a number input from user and print multiplication table 12 times for that number.
 let num = prompt('Enter a number');
 for(let i=1;i<=12;i++){
     let mul = num * i;
     console.log(mul);
 }


// 4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...
 let fibonacci;
 let temp;
 let a=0;b=1;
 let n = prompt('enter a number');
 for(let i=0;i<n;i++){
     temp = a + b;
     console.log(" "+temp);
     a = b;
     b = temp;
 }
 

// 5.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
let num = prompt('Enter a number');
let fact =1;
for(let i=1;i<=num;i++){
    fact = fact *i;
}
console.log(fact);


//6.Write a Program to take a number input from user and find if the number is Prime or not.
let num = prompt('enter a number');
if(num==1){
    console.log(`${num} is neither a prime or nor composite `);
}
else if(num <=2){
   console.log(`${num} is not a prime number`);
}
else{
    for(var i=2;i<num;i++){
        if(num%i ==0){
           var res = (`${num} is not prime number`);
           break;
        }else{
           var res = (`${num} is a prime number`);
        }
    }
   console.log(res);
}


//7.Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
let  day = prompt('enter a day').toLowerCase();

 
if(day == 'monday' || day =='tuesday' || day =="wednesday" || day =='Thursday' || day =="Friday"){
    console.log('weekday');
}else if(day == 'sunday' || day == 'saturday'){
    console.log('weekend');
}else{
    console.log('Enter valid day');
}
*/
