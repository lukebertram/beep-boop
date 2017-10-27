//back-end business

//accepts a number and returns a string of numbers and messages separated by commas
var halProcess = function(inputNum){
  var outputArray = [];
  for (var i = 1; i <= inputNum; i++) {
    var newElement;
    // if this integer is divisible by 3
    if (divisibleBy(i,3)) {
      //... set new element to "I'm sorry, Dave. I'm afraid I can't do that."
      newElement = "I'm sorry, Dave. I'm afraid I can't do that."

    // if this integer contains a zero...
    } else if (containsNumber(i, 0)) {
      //... set new element to "Beep!"
      newElement = "Beep!"

    // if this integer contains a one...
    } else if (containsNumber(i, 1)) {
      // ... set new element to "Boop!"
      newElement = "Boop!";

    // otherwise set new element to the index integer
    } else {
      newElement = i;
    };
    // add the new element to the array
    outputArray.push(newElement);
  }
  // convert the arra to a string of messages separated by commas
  return outputArray.join(", ");
};

var containsNumber = function(element, compare){
  var testStr = element.toString();
  var number = compare.toString();
  for (var i = 0; i < testStr.length; i++) {
    if (testStr.charAt(i) === number){
      return true
    }
  }
  return false;
};

var divisibleBy = function(dividend, divisor){
  if (dividend % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

//returns true if the string is a positive non-zero int, false otherwise
var isPositiveInteger = function(string){
  var int = Math.floor(Number(string));
  return String(int) === string && int > 0;
}

//front-end foolery
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = $("#numberEntry").val();
    if (isPositiveInteger(input)){
      input = parseInt(input);
      var output = halProcess(input);
      $("div#result").text(output)
    } else {
      $("div#result").text("Please enter a positive integer greater than 0.")
    }
  });
});
