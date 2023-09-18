
var date_future = new Date(2003, 7, 5, 10, 40);

var date_now = new Date();

var delta = Math.abs(date_future - date_now) / 1000;

var days = Math.floor(delta / 86400);
delta -= days * 86400;

var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

var seconds = Math.round(delta % 60);

window.onload = function () {
   updateCountdown();
   setInterval(function () {
      updateCountdown();
   }, 1000)
};



function updateCountdown() {

   date_now = new Date();
   delta = Math.abs(date_future - date_now) / 1000;
   days = Math.floor(delta / 86400);
   delta -= days * 86400;
   hours = Math.floor(delta / 3600) % 24;
   delta -= hours * 3600;
   minutes = Math.floor(delta / 60) % 60;
   delta -= minutes * 60;
   seconds = Math.round(delta % 60);

   document.getElementById("lblDay").innerHTML = days + ' Days';
   if (hours > 1)
      document.getElementById("lblHours").innerHTML = hours + ' Hours';
   else
      document.getElementById("lblHours").innerHTML = hours + ' Hour';
   if (minutes > 1)
      document.getElementById("lblMinute").innerHTML = minutes + ' Minutes';
   else
      document.getElementById("lblMinute").innerHTML = minutes + ' Minute';
   document.getElementById("lblSecond").innerHTML = seconds + ' Seconds';
}