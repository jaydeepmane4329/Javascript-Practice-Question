//FUNCTIONS*

// *EASY*
/*

// 1.Given a and b, your function should return the value of a**b;
 
function power(n1,n2){
 return   Math.pow(n1,n2);
}
console.log(power(2,3)); //8



// 2.Given length of a regular hexagon, your function should return area of the hexagon.
function hexagonArea(side){
    let area = (3*Math.sqrt(3)*side*side)/2;
    return  area.toFixed(2);
}
console.log(hexagonArea(10));//259.81



//3.Given a sentence, your functions should return the number of words in the sentence.
 let count = 1;
function noOfWords(sentence){
for(let i=1;i<sentence.length-1;i++){
if(sentence.charAt(i)==" "){
count++;
}
}
}
noOfWords('we are alchemyst'); //3
console.log(count);


// 4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
function findMin(...num){
  let min = Math.min(...num);
  console.log(min);
}
findMin(3,5,9,1,5,10,15,80,60) //1 is min 



//5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
function findMax(...num){
 let max = Math.max(...num);
 console.log(max);
}
findMax(1,5,8,9,4,5,6,7,78,5,4) //78 is max


//6.Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.
 function typeOfTriangle(angle1,angle2,angle3){
 if(angle1!=angle2 && angle2!=angle3 && angle1!=angle3){
    console.log('scalen');
 }
 if(angle1==angle2 && angle1!=angle3 || angle2==angle3 && angle2!=angle1 || angle1==angle3 && angle1!=angle2){
  console.log('isosceles');
 }
 if(angle1==angle2 &&angle2==angle3 && angle1 == angle3){
    console.log('equilateral')
 }
    
 }
 typeOfTriangle(30,60,90);


 
// **MEDIUM**
// 1.Given an array, your function should return the length of the array.
   function arrayLength(array){
       let len = array.length;
       console.log(len);
   }
   arrayLength([1,5,3,7,8,50,6,8,4]); //9

   

//2.Given an array and an item, your function should return the index at which the item is present.
function indexOfItem(array,num){
 let index =  array.indexOf(num);
 console.log(index);
}
indexOfItem([1,6,8,9,5,4,7],5); //4




//3.Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
   function replace(array,n1,n2){
      let replacedArray;
       for(let i=0;i<array.length;i++){
          if(array[i] ==n1){
             array[i]=n2;
          }
       }
       return array;
   }
   console.log(replace([1,5,3,5,6,8],5,10));//[1,10,3,10,6,8]






// 4.Given two arrays, your function should return single merged array.
function mergedArray(arr1,arr2){
   const array = arr1.concat(arr2);
   console.log(array);
}
mergedArray([1,2,3,4],[1,5,4,8]); //[1,2,3,4,1,5,4,8]



//5.Given a string and an index, your function should return the character present at that index in the string.
function findWord(string,index){
let word =string.charAt(index);
console.log(word);
}
findWord('SkillSfari',7);//a


//6. Given two dates, your function should return which one comes before the other.
let date1 = new Date('8-25-2000');
let date2 = new Date('4-24-2017');
function date(d1,d2){
   if(d1 > d2){
      console.log(d1);
   }else{
      console.log(d2);
   }

}
date(date1,date2);

 


// **ADVANCE**
//1.Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.

 function encoding(string,n){
 let shiftedStr = "";
  for(let i=0;i<string.length;i++){
   let  inputstr = string.charCodeAt(i) + n;
   shiftedStr += String.fromCharCode(inputstr);
  }
  return shiftedStr;
 }
 console.log(encoding('skill',2));

 

// 2.Given a sentence, return a sentence with first letter of all words as capital.
function toSentenceCase(sentence){
   let result = " ";
  let str = sentence.split(" ");
//   str.forEach((element) =>{
//       result = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     console.log(result);
//   });

str.map((element) => {
     result = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
     console.log(result);
});

}
toSentenceCase('we are alchemyst');



//3.Given an array of numbers, your function should return an array in the ascending order.
function compareNumber(a,b){
   if(a > b) return 1;
   if(a == b) return 0;
   if(a < b) return -1;
}

function sortArray(array){
array.sort(compareNumber);
console.log(array);
}
sortArray([100,83,32,9,45,61]); //[9,32,45,61,83,100]


// 4.given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
let res = "";
function reverseCharactersOfWord(string){
   let str =  string.split(" ")
   
   str.forEach((element) => {
      let rev = " ";
     for(let i=element.length-1;i>=0;i--){
        rev += element.charAt(i);
     }
     res += rev + " "; 
   });

   return res;
}

console.log(reverseCharactersOfWord('we are alchemyst'));
*/



















