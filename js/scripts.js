var decidingForYou = function(type, creative, prefer, whatDoYouThink, flavor) {
  if (type === "Type B" && creative === "Totally" && prefer === "Art" && whatDoYouThink === "Front End for sure" && flavor === "chocolate") {
    return results1;
  } else if (type === "Type A" && creative === "Totally" && prefer === "Numbers" && whatDoYouThink === "Front End for sure" && flavor === "chocolate") {
    return results4;
  } else if (type === "Type A" && creative === "Totally" && prefer === "Numbers" && whatDoYouThink === "Back End is where the real challange is at" && flavor === "vanilla") {
    return  results3;
  } else if (type === "Type B" && creative === "Sort of" && prefer === "Numbers" && whatDoYouThink === "Back End is where the real challange is it" && flavor === "chocolate") {
    return results2;
  }
};


$(document).ready(function() {
  $("#workPlease form").submit(function(event) {
    var type = $("#typeab").val();
    var creative = $("#creative").val();
    var prefer = $("#prefer").val();
    var whatDoYouThink = $("#whatdoyouthink").val();
    var flavor = $("#flavor").val();

    var whichToReveal = decidingForYou(type, creative, prefer, whatDoYouThink, flavor);

    if (whichToReveal === results1) {
      $("#results1").show();
    } else if (whichToReveal === results2) {
      $("#results2").show();
    } else if (whichToReveal === results3) {
      $("#results3").show();
    } else if (whichToReveal === results4) {
      $("#results4").show();
    }
    alert("hey");

    event.preventDefault();

  });
});
