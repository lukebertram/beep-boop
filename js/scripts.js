//backend
var halProcess = function(inputNum){
  var outputArray = [];
  for (var i = 1; i <= inputNum; i++) {
    outputArray.push(i);
  }
  return outputArray.join(", ");
};

//front-end
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numberEntry").val());
    var output = halProcess(input);
    $("div#result").text(output)
  });
});
