// *Object and Oops*
/*
// q01 Given an array of objects of student's marks:
const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 52,
		science: 56,
		english: 75,
		computer: 85,
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];


// 1.Print the name and total marks of each student.
 let nameMarks = studentDetails.map((student) => {
        
       return `${student.name} has ${student.maths + student.english + student.science + student.computer} Marks`
 });
 console.log(nameMarks);

// 2.Print the name of student whose total marks is highest. 
// 3.Print the name of student whose total marks is highest. 
let max = 0;
let min = Infinity;
let maxstudent;
let minstudent;
let highestMarks = studentDetails.map((student) => {
	score = student.maths + student.english + student.science + student.computer
	max = Math.max(max,score);
	min = Math.min(min,score);
   
	if(score == max){
		maxStudent = student.name;
	}
	if(score == min){
		minStudent = student.name;
	}

});
console.log(`${maxStudent} has maximum marks`);
console.log(`${minStudent} has minimum marks`);

//3.Print the average marks of the class in computer subject.
let avrageOfcomp = studentDetails.reduce((average,marks) => {
	return average + marks.computer / studentDetails.length;
},0);
console.log(` avrage marks in computer ${avrageOfcomp}`);

// 4.Print the grades of all students.
let percentage;

let grades = studentDetails.map((student) =>{
	 
	percentage = (student.maths+ student.english + student.computer +student.science) * 100 / 400;
  
   if(percentage >=75){
	   console.log(`${student.name} has Grade A`)
   }
	if(percentage >=60){
		console.log(`${student.name} has GradeB`);
	}
	if(percentage >=35 && percentage <=60){
		console.log(`${student.name} has Grade C`);
	}
	if(percentage <=35){
		console.log(`${student.name} has Grade D`);
	}
 });

// 5.Print the total number of students passed and their names. Pass when total marks is greater than 35%.
let count = 0;
let passStudent = studentDetails.map((student) => {
	
	percentage = (student.maths+ student.english + student.computer +student.science) * 100 / 400;
	if(percentage > 35){
		console.log(`${student.name}  are pass`)
        count++;
	}
});
console.log(`${count} student pass.`);
*/

/*
//q02 *Salary calculation using OOPS concept.*

class Employee {
     constructor (name,id,basicSallery,HRA,allowances){
		 this.name = name;
		 this.id = id;
		 this.basicSallery = basicSallery;
		 this.HRA = HRA;
		 this.allowances = allowances
	 }

	 getSallery(){
		return `${this.name} has ${this.basicSallery + this.HRA + this.allowances} sallery`;
		
	 }
}


let employee1 = new Employee('jay',101,35000,2500,2000);
console.log( employee1.getSallery());

let employee2 = new Employee('abhi',120,35000,6000,2000);
console.log(employee2.getSallery());

*/
/*
//**q03
// Bank Account (Object Oriented Programming in JavaScript)

class BankAccount{
	constructor(name,bankAccountNumber,accountBalance,accountType,ifscCode,){
		this.name = name;
		this.bankAccountNumber = bankAccountNumber;
		this.accountBalance = accountBalance;
		this.accountType = accountType;
		this.ifscCode = ifscCode;
	}
    bankBalance(){
		return `${this.name}, ${this.accountBalance}`
	}

	getAverage(){
		return this.accountBalance;
	}
	
}
let customer1 = new BankAccount('jay',9062236564585,50000,'saving','BkId5269');
console.log(customer1.bankBalance());

let customer2 = new BankAccount('abhi',61258658656,60000,'current','BkId56223');
console.log(customer2.bankBalance());


let customer3 = new BankAccount('Pavan',265612333,50000,'saving','Bkid5622');
console.log(customer3.bankBalance());

let average = (customer1.getAverage() + customer2.getAverage() + customer3.getAverage())/3;
console.log(average);

*/

/*
//q04 Given an array of objects of items in cart, print:
const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

//1.the total No. of items

let totalItems = cartItems.length;
console.log(` Total Items are ${totalItems}`);

// 2.the total cart value
let totalCartValue = cartItems.reduce((total,item) =>  { return total + item.price},0);
console.log(` total cart value is ${totalCartValue}`);

//3.the total discounted value(sum of dicounted values on each item) based on the given discount
let discountSum = cartItems.reduce((sum,item) => {return sum + item.discount},0);
console.log(` total discont ${discountSum}`);

//4.total tax amount (18% tax, calculated on total cart value)
let tax = totalCartValue*100/500;
console.log(` tax is ${tax}`);
*/








