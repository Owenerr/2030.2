console.clear();
const sad = document.getElementById("sad");
var c = 1;
var t;
var timer_is_on = 0;


function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  let theScore = Number($("#score").text());
  $("#adjScore").text(theScore / c);
  t = setTimeout(timedCount, 5000);
}

function startCount() {
  if (!timer_is_on) {
    timerOn = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timerOn = 0;
}

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();

  console.log(md5(response));
  if (correct == md5(response)) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    let theScore = Number($("#score").text());
    theScore = theScore + 1;
    $("#score").text(theScore);
  } else {
    if (Math.random() > 3000) {
      sad.play();
    }
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}