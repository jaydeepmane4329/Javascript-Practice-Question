// NUMBERS
/*
//1.Write a program to input 2 numbers and display the sum of the numbers to the console.
let num1 = +prompt('enter a number');
let num2 = +prompt('enter a number');

let sum = num1 +  num2;
console.log(sum);


//2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.
//  Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

let P=100;
let R=6; 
let T=2;

let SI = (P * T * R) / 100;
console.log(SI); //12


// 3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
let m = 10;
let v = 5;

let KE = 0.5 * m * v * v;
console.log(KE);


//4.Write a program to convert Fahrenheit to Celsius.
// For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.
 
let T = 56;

   T = (56-32)*5/9;
   console.log(T.toFixed(5));



//5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
  let side = 10;

  let squareArea = side * side;
  console.log(`Area of Square is  ${squareArea}`);

  let perimterOfSquare = 4 * side;
  console.log(`Perimeter of Square is ${perimterOfSquare}`);

  let surfaceAreaOfCube = 6 * side * side;
  console.log(`Surface area of cube ${surfaceAreaOfCube}`);

  let volumeOfCube = side**3;
  console.log(`volume of cube is ${volumeOfCube}`);

  

  //6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

  let costprice = +prompt('enter a number');
  let sellingPrice = +prompt('enter a  number');

  if(costprice < sellingPrice){
      console.log(` ${sellingPrice - costprice} Profit`)
  }
  else if(costprice > sellingPrice){
      console.log(`${costprice -sellingPrice } loss`);
  }else{
      console.log('No Loss No Profit');
  }

  


// 7.Write a program to calculate sum of N natural digits, as input by the users?

let num = +prompt('enter a number')
let sum = 0;
for(let i=0;i<=num;i++){
     sum = sum + i;
}
console.log(` sum = ${sum}`);//5050



//8.Write a Program to Print N Odd Number in Descending Order.
let num = +prompt('enter a number');
 
for(i=num;i>=0;i--){
    if(i%2!=0){
        console.log(i)
    }
}


// 9.Write a JavaScript program to compute the sum of all digits that occur in a given string.
 let computeSum = 0;
let string = '12345';
for(let i=0;i<=string.length;i++){
   computeSum += +string.charAt(i);
}
console.log(`computeSum of ${string} is ${computeSum}` ); //15



//10.Write a JavaScript program that reverses a number.
let num = +prompt('enter a number');
let rev=0;
while(num > 0){
    rev = rev * 10 + num%10; 
    num = Math.floor(num/10);
    
}
console.log(rev);



//11.Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

let num = prompt('enter a number');//[1,2,3,4,5]
let rotation = prompt('enter a rotation');
let arr = Array.from(num);

function rotate(string,n){
    const rotatedArray = string.concat();

let newarr = [];

   for(let i=0;i<n;i++){
       const frontword = rotatedArray.shift();
       rotatedArray.push(frontword);
   }

    return rotatedArray.join('');
}
console.log(rotate(arr,rotation));



// 12.Write a Program to convert Decimal to Binary.

let num = prompt('enter a number');
let temp = num;
let binary = " ";
let  rev = 0;

while(temp > 0){
    rev = temp%2;
    temp = Math.floor(temp/2);
    binary = rev + binary;
}
console.log(binary);
*/






 











