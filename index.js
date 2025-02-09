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


var mainPhoto = document.getElementById("mainPhoto");
var isPhotoclicked = false





function handleMusic(isStarted) {
   if (isStarted == false) {
      isPhotoclicked = true;
      document.getElementById('player').play();
      mainPhoto.setAttribute("class", "mainProfilePhoto");
   }
   else {
      isPhotoclicked = false;
      document.getElementById('player').pause();
      mainPhoto.setAttribute("class", "mainProfilePhoto paused");
   }
}

window.onload = function () {


   mainPhoto.addEventListener("click", (event) => {
      handleMusic(isPhotoclicked);
   })
   
   document.body.onkeyup = function (e) {
      if (e.keyCode == 32) {
         handleMusic(isPhotoclicked);
      }
   }


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
      document.getElementById("lblHours").innerHTML = hours + ' H';
   else
      document.getElementById("lblHours").innerHTML = hours + ' H';
   if (minutes > 1)
      document.getElementById("lblMinute").innerHTML = minutes + ' M';
   else
      document.getElementById("lblMinute").innerHTML = minutes + ' M';
   document.getElementById("lblSecond").innerHTML = seconds + ' S';

}


function increaseView() {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open("GET", "https://camo.githubusercontent.com/f5bf40c9fca8e695fa98f4c311036c71bdcbde576a248d551a2a427add964923/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d65796d656e656665616c74756e", true); // false for synchronous request
   xmlHttp.send(null);
}

