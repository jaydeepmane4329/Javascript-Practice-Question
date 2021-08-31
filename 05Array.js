// *ARRAY*
/*
// 1.Find sum of an array and display the output . Example [10,4,5,2,5,6,9]
  
  let a =  [10,4,5,2,5,6,9];
  let sum =0;
  for(let i=0;i<a.length;i++){
     sum = sum + a[i];
  }
  console.log(sum); //41
  

//2.Find average of an array and display the output.

 let a =[10,4,5,2,5,6,9];
 let sum = 0;
 for(let i=0;i<a.length;i++){
     sum+=a[i];
 }
 let average = sum / a.length;

 console.log(average);

 

// 3.Find maximum and minimum of an array.

let a = [10,4,5,20,5,6,9];
let max = 0;
let min = a[0];
 for(let i=0;i<a.length;i++){
     if(a[i] > max){
         max = a[i];
     }
 }
 for(let i=1;i<a.length;i++){
     if(a[i] < min){
         min = a[i];
     }
 }
 console.log(max);
 console.log(min);



// 4.Find Median and Mode of an array.

// median of an Array

function median(array){
let sortedArray = array.sort((a,b) => a - b);
return sortedArray.length %2 === 0 ? sortedArray[sortedArray.length/2 -1] + sortedArray[sortedArray.length/2] : sortedArray[Math.floor(sortedArray.length/2)]
}
console.log(median([10,4,5,2,5,6,9]));


// Mode of an Array
function mode(array){
 let arrayObj = {};
 
 array.forEach((element) => {
     if(!arrayObj[element]){
         arrayObj[element] = 0;
     }
      arrayObj[element]++;
 });
 let max = 0;
 let result = [];

 for(let key in arrayObj){
     if(arrayObj[key] > max){
         result = [key];
         max = arrayObj[key];
     }else if(arrayObj[key] === max){
         result.push(key);
     }
 }
 if(Object.keys(arrayObj).length === result.length){
     result = [];
 }
    return result;
;}
console.log(mode( [10,4,5,2,5,6,9]));


// 5.Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

let array = [3,5,2,9,4];
let array2 = [6,2,8,1,3];

let mainArray = array.concat(array2);
let sum = mainArray.reduce((sum,element) => {return sum + element},0);
console.log(sum); //43



6.Find number of constants and vowels in a string.
 let a = ['a','e','i','o','u','A','E','I','O','U'];
 let consonant=0;
 let vowel = 0;
 let string = 'jaydeep mane';

  for(let i=0;i<string.length;i++){
      if(a.includes(string[i])){
       vowel++;
      }
      if(!a.includes(string[i]) && string[i] != " "){
          consonant++;
      }
  }
  console.log(vowel);
  console.log(consonant);


// 7.Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
// Advanced
  
function arrayShift(array,x){
    let res = [];
    let index = 0;

    for(let i=x;i<array.length;i++){
        res[i] = array[index];
        index++;
    }
    for(let i=0;i<x;i++){
        res[i] =array[index];
        index++
    }
  
 return res;
}
console.log(arrayShift([1,2,3,4,5],1));



// *Advanced*
// 1.Find the sum of two matrix.
 
let array1 = [[1, 2 ,3],
              [2, 3, 5],
              [5, 5, 5],
            ];

 let array2 = [[1, 2, 3],
              [2, 3, 5] , 
              [5, 5, 6],];          

 for(let i=0;i<array1.length;i++){
     for(let j=0;j<array2.length;j++){
         array1[i][j] = array1[i][j] +  array2[i][j] ;
     }
 }
 console.log(array1);
 


2. Display transpose of matrix.

let array = [[1,2,3],
             [2,3,4],
             [5,6,7],
            ];

for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        //assiging values of coloumn in rows
      array[i][j] = array[j][i]  
    }
    
}
console.log(array);


// 3.Find Identity matrix.
 let matrix = [[1,2,3],
               [2,3,4],
               [5,6,7],];

 let newMatrix = [];              

          for(let i=0;i<matrix.length;i++){
             for(let j=0;j<matrix.length;j++){
                 matrix[2][2] =1;
                 matrix[1][1] = 1;
                 matrix[0][0] = 1;
                 matrix[0][1] = 0;
                 matrix[0][2] = 0;
                 matrix[1][0] = 0;
                 matrix[1][2] = 0;
                 matrix[2][0] = 0;
                 matrix[2][1] = 0;
                 }
          }     
          console.log(matrix)
*/






