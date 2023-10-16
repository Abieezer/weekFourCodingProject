//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
//  a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.//
//     -Do not use numbers to reference the last element, find it programmatically.//
//     -ages[7] - ages[0] is not allowed!//


var ages = [3, 9, 23, 64, 2, 8, 28, 93];

var firstElement = ages[0];
var lastElement = ages[ages.length - 1];

var difference = lastElement - firstElement;

console.log("The difference between the first and last elements is: " + difference);

//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).//

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Add a new age to the array
ages.push(42);

var firstElement = ages[0];
var lastElement = ages[ages.length - 1];

var difference = lastElement - firstElement;

console.log("The difference between the first and last elements is: " + difference);

//c. Use a loop to iterate through the array and calculate the average age.//

var ages = [3, 9, 23, 64, 2, 8, 28, 93, 42]; // Updated array with a new age

var sum = 0;

for (var i = 0; i < ages.length; i++) {
    sum += ages[i];
}

var average = sum / ages.length;

console.log("The average age is: " + average);


//2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.//
//  a. Use a loop to iterate through the array and calculate the average number of letters per name.//
//  b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.//

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
var totalLetters = 0;

for (var i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

var averageLetters = totalLetters / names.length;

console.log("Average number of letters per name: " + averageLetters);

// Concatenate all the names together, separated by spaces
var concatenatedNames = '';

for (var i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}

console.log("Concatenated names: " + concatenatedNames.trim());


//3. How do you access the last element of any array?//

var myArray = [1, 2, 3, 4, 5];
var lastElement = myArray[myArray.length - 1];


//4. How do you access the first element of any array?

var myArray = [1, 2, 3, 4, 5];
var firstElement = myArray[0];


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];

for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths); // This will display the array containing the lengths of the names


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

var nameLengths = [3, 5, 3, 5, 4, 3]; // Assuming you already have the nameLengths array

var sum = 0;

for (var i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("The sum of all elements in nameLengths is: " + sum);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
    //(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

    function repeatWord(word, n) {
        var result = '';
        for (var i = 0; i < n; i++) {
            result += word;
        }
        return result;
    }
    
    // Example usage:
    var repeatedWord = repeatWord('Hello', 3);
    console.log(repeatedWord); // This will output 'HelloHelloHello'


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
    //The full name should be the first and the last name separated by a space.

    function getFullName(firstName, lastName) {
        var fullName = firstName + ' ' + lastName;
        return fullName;
    }
    
    // Example usage:
    var first = 'John';
    var last = 'Doe';
    
    var fullName = getFullName(first, last);
    console.log(fullName); // This will output 'John Doe'


    
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

// Example usage:
var numberArray = [30, 40, 35, 25];

var isGreaterThan100 = isSumGreaterThan100(numberArray);
console.log(isGreaterThan100); // This will output 'true' because the sum is 130

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Return 0 for an empty array to avoid division by zero.
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}

// Example usage:
var numberArray = [30, 40, 35, 25];

var average = calculateAverage(numberArray);
console.log(average); // This will output the average, which is 32.5 in this case.

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array//
    //is greater than the average of the elements in the second array.//

    function isAverageGreaterThan(arr1, arr2) {
        function calculateAverage(numbers) {
            if (numbers.length === 0) {
                return 0; // Return 0 for an empty array to avoid division by zero.
            }
            var sum = 0;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum / numbers.length;
        }
    
        var average1 = calculateAverage(arr1);
        var average2 = calculateAverage(arr2);
    
        return average1 > average2;
    }
    
    // Example usage:
    var array1 = [30, 40, 35, 25];
    var array2 = [10, 20, 15, 30];
    
    var result = isAverageGreaterThan(array1, array2);
    console.log(result); // This will output 'true' because the average of array1 is greater.


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
    //and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    function willBuyDrink(isHotOutside, moneyInPocket) {
        return isHotOutside && moneyInPocket > 10.50;
    }
    
    // Example usage:
    var isHotOutside = true;
    var moneyInPocket = 15.00;
    
    var willBuy = willBuyDrink(isHotOutside, moneyInPocket);
    console.log(willBuy); // This will return 'true' if it's hot outside and moneyInPocket is greater than 10.50.


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function calculateRequiredWorkersByHours(totalWorkHours, hoursAvailable) {
    // Calculate the number of workers needed to complete the job in the given time frame.
    return totalWorkHours / hoursAvailable;
}

// Example usage:
var totalWorkHours = 1000; // Total work hours required for the job
var hoursAvailable = 40; // Number of hours available per worker
var requiredWorkers = calculateRequiredWorkersByHours(totalWorkHours, hoursAvailable);
console.log("Required workers to meet the deadline: " + requiredWorkers);