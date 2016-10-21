var deciding = function(type, creative, prefer, whatDoYouThink, flavor) {
  if (creative === "totally" && prefer === "numbers" && whatDoYouThink === "front") {
    return "PHP";
  } else if (creative === "totally" && prefer === "art" && whatDoYouThink === "front") {
    return "Design";
  } else if (type === "type-a" && creative === "totally" && whatDoYouThink === "back") {
    return "Ruby";
  } else if (creative === "sorta" && prefer === "numbers" && whatDoYouThink === "back") {
    return "C#";
  } else if (creative === "totally" && prefer === "art" || creative === "sorta" && prefer === "numbers") {
    return "Android";
  } else if (creative === "sorta" && prefer === "art" || creative === "totally" && prefer === "numbers") {
    return "Python";
  }
};



$(document).ready(function() {
  $("#work form").submit(function(event) {

    var type = $("#typeab").val();
    var creative = $("#creative").val();
    var prefer = $("#prefer").val();
    var whatDoYouThink = $("#whatdoyouthink").val();
    var flavor = $("#flavor").val();

    var whichToReveal = deciding(type, creative, prefer, whatDoYouThink, flavor);
    $(".answer").text(whichToReveal);

    event.preventDefault();

  });
});
