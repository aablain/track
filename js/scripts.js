var deciding = function(type, creative, prefer, whatDoYouThink, flavor) {
  if (creative === "totally" && prefer === "numbers" && whatDoYouThink === "front" && flavor === "chocolate") {
    return "you should take php";
  } else if (creative === "totally" && prefer === "art" && whatDoYouThink === "front") {
    return "design";
  } else if (type === "typea" && creative === "totally" && whatDoYouThink === "back" && flavor === "vanilla") {
    return "ruby";
  } else if (type === "typea" && creative === "sorta" && prefer === "numbers" && whatDoYouThink === "back" && flavor === "chocolate") {
    return "c sharp";
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
