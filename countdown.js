// Set the date we're counting down to
var countdownDate = new Date("June 28, 2023 00:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countdownDate - now;

  // Calculate the days, hours, minutes and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown on the page
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
    document.getElementById("message").innerHTML = "Tarkov has wiped!";}
}, 1000);
