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
   setInterval(function () {
      updateCountdown();
   }, 999)

   increaseView();
   updateCountdown();

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


function increaseView() {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open("GET", "https://camo.githubusercontent.com/f11907362bd64e699203a94db21a230430129046085099d1a485e0b3fd3a49eb/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d65796d656e656665616c74756e266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174", false); // false for synchronous request
   xmlHttp.send(null);
   return xmlHttp.responseText;
}