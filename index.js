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
var musicSign = document.getElementById("musicSign");
var isPhotoclicked = false

mainPhoto.addEventListener("click", (event) => {
   handleMusic(isPhotoclicked);
})

function handleMusic(isStarted) {
   if (isStarted == false) {
      isPhotoclicked = true;
      document.getElementById('player').play();
      mainPhoto.setAttribute("class", "mainProfilePhoto");
      musicSign.setAttribute("class", "imageRecordMasterHidden");
   }
   else {
      isPhotoclicked = false;
      document.getElementById('player').pause();
      mainPhoto.setAttribute("class", "mainProfilePhoto paused");
   }
}


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
   xmlHttp.open("GET", "https://camo.githubusercontent.com/0a723fc0a2a18ff3129ba5d94f06cb9812283ad9360af72d71bf6c0ea9c3c742/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d65796d656e656665616c74756e267374796c653d666c61742d737175617265", true); // false for synchronous request
   xmlHttp.send(null);
}

