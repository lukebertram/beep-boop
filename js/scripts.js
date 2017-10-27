//backend


//front-end
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numberEntry").val());
    var output = input;
    $("div#result").text(output)
  });
});
