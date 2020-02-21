$(document).ready(function() {
  $("#transformer form").submit(function() {
    var transformer = ["question1", "question2", "demo"];

    transformer.forEach(function(blank){
      var userInput = $("input." + transformer).val();
      console.log(userInput);
      $("." + transformer).text(userInput).val();
    });

  $("#result").show();

  event.preventDefault();
  });
});