// function for the countdown while loop

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(10); //calling the function to countdown from 10

  // function for the for loop writeCards
  function writeCards(names, event) {
    let messages = []; // Create an empty array to hold the messages
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; // Return the array of messages
  }

  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday")); //testing the writeCards function