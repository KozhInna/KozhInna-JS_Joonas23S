// Loop Assignments (Don’t use arrays)

// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)

/*for (let i = 1; i <= 100; i++) {
  console.log(i);
  i++;
}*/

/* for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}*/

// 2.  Make a program that prints all positive numbers that are smaller than
//     100 and even, in this order: 2 98 4 96 6 94... Print result in one line.

/* function task2() {
  let res = "";

  for (let i = 2; i <= 50; i += 2) {
    res += i + " ";
    if (i != 50) {
      res += 100 - i + " ";
    }
  }
  return res;
}
console.log(task2()); */

// different from Joonas's solving
let anser = "";
let end = 98;
for (let i = 0; i < 100; i += 2) {
  anser += " " + i + " ";
  anser += " " + end + " ";
  end -= 2;
}
console.log(anser);

// 3.  Make a program that asks repeatedly from the user the distance (km) and
//     time (h) and calculates average speed. The program ends when user gives
//     0 for the distance. (After getting 0, the program does not ask anything
//     from the user.)

/* function task3() {
 
  do {
    let dist = Number(prompt("Tell me any distanse in km"));
    if (dist != 0) {
      let time = Number(prompt("Tell me any time in hours"));
      let averageSpeed = (dist / time).toFixed(2);
      console.log(averageSpeed);
      break;
    }
  } while (dist !== 0);
}
task3(); */

// 4.  Make a program that asks 20 numbers from user. After that the program
//     prints out how many of those numbers where even.

/* function task4() {
  let evenNum = 0;
  
  for (let i = 0; i < 20; i++) {
    let num = Number(prompt("Enter a number"));
    if (num % 2 === 0) {
      //evenNum += 1;
      evenNum++;
    }
  }
  console.log(evenNum);
}
task4(); */

// 5.  Make a program that asks numbers from the user, until user gives 0 and
//     then program ends. In the end program prints out average of the numbers.

/* function task5() {
  let num;
  let sum = 0;
  let average;
  let counter = 0;

  do {
    num = Number(prompt("Give me any number"));
    if (num !== 0) {
      sum += num;
      counter += 1;
    }
  } while (num !== 0);
  average = sum / counter;
  console.log(average);
}
task5(); */

// to initiate WHILE declare variable
/* let input;
let sum = 0;
let count = 0;

while (input != 0) {
  input = Number(prompt("Give me any number"));
  sum += input;
  counter++;
}
console.log(sum / count - 1); */

// 6.  Make a program that asks 25 numbers form the user. In the end program
//     printsout average of the numbers.
/* function task6() {
  let num;
  let sum = 0;
  // let counter = 0;
  let average;
  for (let i = 0; i < 25; i++) {
    num = Number(prompt("Write any number"));
    sum += num;
    // counter += 1;
  }
  average = sum / 25;
  console.log(average);
}
task6(); */

// 7.  Make a program that ask first one number from the user. After that the
//     program asks: "Do you want to continue giving numbers?(y/n)". If user
//     answers y, the program continues to ask another number. If user answers
//     n, program ends. In the end program prints out average of the numbers.

/* function task7() {
  let num = 0;
  let answer;
  let counter = 0;
  do {
    num += Number(prompt("Give me a number"));
    counter += 1;
    answer = prompt("Do you want to continue giving numbers? (y/n)");
    if (answer === "n") {
      console.log(num / counter);
    }
  } while (answer !== "n");
}
task7(); */

// 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.

/* function task8() {
  let quantity = Number(prompt("How many numbers you are going to write."));
  let smallestNum;

  let nums = Number(prompt("Tell me your number 1"));
  smallestNum = nums;
  for (let i = 0; i < quantity - 1; i++) {
    nums = Number(prompt(`Tell me your number ${i + 2}`));
    if (nums < smallestNum) {
      smallestNum = nums;
    }
  }
  console.log(smallestNum);
}
task8(); */

// 9.  Make a program that asks ten numbers and in the end prints out two biggest numbers.

/* function twoBiggest() {
  let biggest;
  let secondBiggest;

  let num = Number(prompt("Tell me your number 1"));
  biggest = num;
  num = Number(prompt("Tell me your number 2"));
  if (num > biggest) {
    secondBiggest = biggest;
    biggest = num;
  } else {
    secondBiggest = num;
  }

  for (let i = 0; i < 3; i++) {
    num = Number(prompt(`Tell me your number ${i + 3}`));
    if (num > biggest) {
      secondBiggest = biggest;
      biggest = num;
    } else if (num > secondBiggest) {
      secondBiggest = num;
    }
  }
  console.log(biggest, secondBiggest);
}
twoBiggest(); */

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.

/* function task10() {
  let num;
  let sum = 0;
  let average;
  let smallest;
  let biggest;

  num = Number(prompt(`Tell me your number 1`));
  sum += num;
  smallest = num;
  biggest = num;
  for (let i = 0; i < 10 - 1; i++) {
    num = Number(prompt(`Tell me your number ${i + 2}`));
    sum += num;
    if (num < smallest) {
      smallest = num;
    } else if (num > biggest) {
      biggest = num;
    }
  }
  average = sum / 10;

  console.log(
    `this is sum ${sum}, this is average - ${average}, the smallest - ${smallest} and the biggest - ${biggest}`
  );
}
task10(); */
