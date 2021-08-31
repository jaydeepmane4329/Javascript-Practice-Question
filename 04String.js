// **String**
/*
// 1.Write a program that converts the string into uppercase

 let string = prompt("enter a string");
 let str =string.toUpperCase();
 console.log(str);
 

// 2. Write a program that reads two strings and append first string to the second.
//  So if first string is Good second string is Morning , the program should print MorningGood

function string(str1,str2){
   let message = str2 + str1;
   console.log(message);
}
string('good','morning')


//3.Program that reads string and count number of characters present in the string
let string = prompt('enter a string');
let count = 0;

for(let i=0;i<string.length;i++){
    if(string.charAt(i) != " "){
    count++;
}
}
console.log(count);



//4.Write a program that converts string like "124" to 124
let num = +prompt('enter a number');
console.log(num);



//5.Write a program to delete all vowels from a string. Assume string is not more than 80 characters long.
function replaceVowel(string){
    let a =['a','e','i','o','u','A','E','I','O','U'];
    let result = "";

    for(let i=0;i<string.length;i++){
        if(!a.includes(string[i])){
        result += string.charAt(i);
    }    
    }
    return result;

}
console.log(replaceVowel("Lorem Ipsum is simply dummy text of the printing and typesetting industry"));


//6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
  let exp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
  let string = prompt('Enter a string');

  if(string.match(exp)){
      console.log('alphanumeric');
  }else{
      console.log('Non-alphanumeric');
  }



//7.A program that reads three strings and prints the longest and smallest one.

let string1 = prompt('enter a string');
let string2 = prompt('enter a string');
let string3 = prompt('enter a string');

if(string1.length > string2.length && string1.length > string3.length){
    console.log(string1);
}else if(string2.length > string1.length && string2.length >  string3.length){
    console.log(string2);
}else{
    console.log(string3);
}
if(string1<string2 && string1 < string3){
    console.log(string1)
}else if(string2 < string1 && string2 < string3){
    console.log(string2);
}
else{
     console.log(string3);
}


// 8.A program that counts number of vowels and consonants in a String?

let string = "Javascript is a very interesting language."
let consonant = 0;
let vowels = 0;
let a = ['a','e','i','o','u','A','E','I','O','U'];
for(let i=0;i<string.length;i++){
    if(a.includes(string[i])){
        vowels++;
    }
    if(!a.includes(string[i]) && string[i]!=" "){
        consonant++;
    }
}
console.log(vowels);
console.log(consonant);



//9.Write a program which receives a string str 
// that calculates the length of a string and return true if the length is greater than 7 without using strlen()

function strLen(string){
let length = 0; 
for(let item of string){
    length++;
}

if(length > 7)
console.log('true');
}
strLen(prompt('enter a string'));



// 10.Write a program that takes two strings and copies smaller string into bigger string
let string1 = prompt('enter a string');
let string2 = prompt('enter a string');

if(string1.length > string2.length){
   string1 =string2;
} 
if(string2.length > string1.length){
    string2 = string1;
}



// 11.Given a string, determine if it is a palindrome, considering only alphanumeric characters

let string = prompt('enter a string').toLowerCase();
let reverse = "";
for(let i = string.length-1;i>=0;i--){
     reverse = reverse + string[i];
}
if(string == reverse){
    console.log('Palindrome');
}else{
    console.log('not palindrome');
}


//12.For a given input string(str), write a function to print all the possible substrings.Without using substr method
let string = prompt('enter a string')
for(let i=0;i<string.length;i++){
    for(let j=0;j<string.length;j++){
        for(let k=i;k<=j;k++){
         console.log((string[k]));
        }
    console.log('\n')
    }
}

// 13.Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.
   
let date = new Date('04-15-1998 07:00:00');

   console.log(date.toDateString()); 



//14. Write a program that masks all but last four characters of the string "5565534276455423" to '#'

//  let string =  "5565534276455423";
function replaceString(string){
 let string1 = string.substring(0,string.length-4);
var  string2 = string.substr(string.length-4,4);
let repl = "";

 for(let i=0;i<string2.length;i++){
     repl += string2.replace(string2,'#');
 }
 
 let result = string1+repl;
 console.log(result);
}
replaceString(prompt('enter a string'));
 
 


//15 .Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
   let string = 'tic tae toe is fun game'
   let res = string.replace(/\s/g, '').substring(0,6).toUpperCase() + string.slice(7).toLowerCase();
   console.log(res);


/*
// **ADVANCE**
//1. Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

function replaceWord(string,c1,c2){
    let res = "";
     for(let i=0;i<string.length;i++){
         if(string.includes(c1)){
          res += string[i].replace(c1,c2);
         }
     }
     return res;
}
console.log(replaceWord(prompt('enter a string'),prompt('enter firstWord'),prompt('enter a second word')));


//2.Given an input string S that contains multiple words, you need to remove all the spaces present in the input string.
//  There can be multiple spaces present after any word

let string = "skill safari teaching us   javascript   now days "
str = string.replace(/\s/g, '');
console.log(str);


//3.A program that counts the value of each character and prints the most repeated character?
  
function countLetters(string){
    let a = string.split('');
    let res = [];
    let count = 1;
    let max = 0;

    for(let i=0;i<a.length;i++){
        if(a[i] === a[i + 1]){
            count++;
        }else{
            let value = `${count} ${a[i]}`
            res.push(value);
            count=1;
        }
    }
    return res.join();

}
console.log(countLetters(prompt('enter a string')));


// 4.Write a program to toggle case of each character of the string "good afternoon" (example: "skillsafari" ⇒ "sKiLlSaFaRi" )
 let string = "good afteroon"
 var str =" ";
 for(let i=0;i<string.length;i++){
     if(i%2==0){
          str+= string[i].toLowerCase();
     }else{
         str+= string[i].toUpperCase();
     }
 }
 console.log(str);
 

// 5.Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. 
// ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")
  function removeWord(string,word){
     let res ="";
     let str = string.split(' ');
     for(let i=0;i<str.length;i++){
         if(str[i]!=word){
            res+= str[i] + " ";
         }else{
             continue;
         }
     }
     console.log(res);
  }
  removeWord('programming camp are amazing','camp');
  */

