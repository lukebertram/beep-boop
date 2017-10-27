//back-end business
var halProcess = function(inputNum){
  var outputArray = [];
  debugger
  for (var i = 1; i <= inputNum; i++) {
    var newElement;
    // if this integer contains a one...
    if (containsOne(i)){
      // ... set new element to "Boop!"
      newElement = "Boop!";
    } else {
      // otherwise set new element to the index integer
      newElement = i;
    }
    outputArray.push(newElement);
  }
  return outputArray.join(", ");
};

var containsOne = function(integer){
  var testStr = integer.toString();
  for (var i = 0; i < testStr.length; i++) {
    if (testStr.charAt(i) === "1"){
      return true
    }
  }
  return false;
}

//front-end foolery
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numberEntry").val());
    var output = halProcess(input);
    $("div#result").text(output)
  });
});
