var date_future = new Date(2003, 7, 5, 0, 0);
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
var profileImg = document.getElementById("profileImg");
var musicBadge = document.getElementById("musicBadge");
var player = document.getElementById('player');
player.autoplay = false;

var isPlaying = false;

function toggleMusicAndAnimation() {
   if (isPlaying === false) {
      profileImg.setAttribute("class", "imageProfilePhoto mainProfilePhoto");
      musicBadge.classList.add("playing");
      musicBadge.querySelector(".icon-play").style.display = "none";
      musicBadge.querySelector(".icon-pause").style.display = "";
      player.play();
      isPlaying = true;
   } else {
      profileImg.setAttribute("class", "imageProfilePhoto mainProfilePhoto paused");
      musicBadge.classList.remove("playing");
      musicBadge.querySelector(".icon-play").style.display = "";
      musicBadge.querySelector(".icon-pause").style.display = "none";
      player.pause();
      isPlaying = false;
   }
}

window.onload = function () {
   profileImg.setAttribute("class", "imageProfilePhoto mainProfilePhoto");

   mainPhoto.addEventListener("click", () => {
      toggleMusicAndAnimation();
   });

   document.body.onkeyup = function (e) {
      if (e.keyCode == 32) {
         toggleMusicAndAnimation();
      }
   }

   setInterval(function () {
      updateCountdown();
   }, 999);

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