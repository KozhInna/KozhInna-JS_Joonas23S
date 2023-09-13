// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ["David", "Ann", "Leia", "Mathew", "Mark"];

// 1) printing to the console
/* function printNames() {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
printNames(); */

// 2) printing to the console
/* names.forEach((item) => {
  console.log(item);
}); */

/* printing array to the browser */
document.getElementById("task1").textContent = names;
//document.getElementById("task1").textContent = names.join(", ");
//document.getElementById("task1").innerHTML = names;

// Task 2
// Print the second item of the array from the task 1.
document.getElementById("task2").textContent = names[1];

// Task 3
// Print the length of the array.
document.getElementById("task3").textContent = names.length;

// Task 4
// Print the last item of the array
document.getElementById("task4").textContent = names[names.length - 1];

// Task 5
// Add Peter as the last item to the array and print the whole array
//names.push("Peter");
document.getElementById("task5").textContent = names;

// Task 6
// Print the array with spaces, not commas
document.getElementById("task6").textContent = names.join(" ");

// Task 7
// Replace Mathew in the array with Lisa and Abraham
names.splice(3, 1, "Lisa", "Abraham");
document.getElementById("task7").textContent = names;

// Task 8
// Sort the array in the alphabetical order and print it
document.getElementById("task8").textContent = names.sort();

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
const numbers = [1, 7, 45, 32, 27, 86];
document.getElementById("task9").textContent = numbers.sort((a, b) => b - a);

// Task 10
// Randomize the numbers array.
document.getElementById("task10").textContent = numbers.sort(
  (a, b) => 0.5 - Math.random()
);

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
const newArray = [];
const biggest = numbers.sort((a, b) => b - a);
newArray.push(biggest[0]);
newArray.push(biggest[biggest.length - 1]);

document.getElementById("task11").textContent = newArray;
