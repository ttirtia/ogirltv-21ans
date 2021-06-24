$(document).ready(function (e) {
  // ---------
  // COUNTDOWN
  // ---------

  // Set the date we're counting down to
  var countDownDate = new Date("2021-06-28T19:00:00+02:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML =
      days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time-header").innerHTML = "";
      document.getElementById("countdown").innerHTML =
        "Joyeux anniversaire de stream !";
    }
  }, 1000);

  // -------------
  // MOVING EMOTES
  // -------------

  emotes = [
    "caline.png",
    "cc.gif",
    "flag.gif",
    "gg.png",
    "lite.png",
    "love.png",
    "subgift.gif",
  ];

  function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  function moveImage(imgElement) {
    var horizontalPosition = getRandomInterval(30, $(document).width() - 30);
    imgElement.style.left = horizontalPosition + "px";
    imgElement.classList.add("emote");
    imgElement.hidden = false;
    setTimeout(function () {
      imgElement.style.top = "10%";
    }, 300);
    setTimeout(function () {
      imgElement.remove();
    }, 10000);
  }

  setInterval(function () {
    var imgIndex = Math.round(getRandomInterval(0, emotes.length - 1));
    var imgElement = document.createElement("img");
    imgElement.src = "assets/img/emotes/" + emotes[imgIndex];
    imgElement.hidden = true;
    document.getElementById("page-top").appendChild(imgElement);
    moveImage(imgElement);
  }, 2000);
});
