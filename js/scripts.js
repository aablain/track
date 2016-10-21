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

    if (whichToReveal === "PHP") {
      $("body").removeClass();
      $("body").addClass("blue");
    } else if (whichToReveal === "Design") {
      $("body").removeClass();
      $("body").addClass("teal");
    } else if (whichToReveal === "Ruby") {
      $("body").removeClass();
      $("body").addClass("red");
    } else if (whichToReveal === "C#") {
      $("body").removeClass();
      $("body").addClass("grey");
    } else if (whichToReveal === "Android") {
      $("body").removeClass();
      $("body").addClass("orange");
    } else if (whichToReveal === "Python") {
      $("body").removeClass();
      $("body").addClass("green")
    }

    event.preventDefault();

  });
});
