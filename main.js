var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


//~~~~~~~ exercise 1. ~~~~~~~~~~\\

//  md 25 27 32 24 18

// function age(students){
// 	for(var i=0;i<students.length;i++){
// 	console.log(students[i].age)
// 	}
// }
// age(students);

//~~~~~~~ exercise 2. ~~~~~~~~~~~\\

//   Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver


// function nameLoc(students){
// 	for(var i=0; i<students.length;i++){

// 		console.log(students[i].name + ', ' + students[i].city)
// 	}

// }
// nameLoc(students)


//~~~~~~~ exercise 3. ~~~~~~~~~~\\

//  md Liz is from Boulder Trent is from Boulder Chelsea is from Boulder


// function personIsFrom(students){
// 		for(var i=0; i<students.length;i++){

// 		console.log(students[i].name + ' is from ' + students[i].city)
// 	}
// }
// personIsFrom(students);




//~~~~~~~ exercise 4. ~~~~~~~~~~\\

//  md Meghan is older than 25 Trent is older than 25

function whoseOlder(students){
	for(var i=0; i < students.length; i++){
		if(students[i].age > 25){
			console.log(students[i].name + ' is older than ' + 25)
		}
	}
}
whoseOlder(students);






















