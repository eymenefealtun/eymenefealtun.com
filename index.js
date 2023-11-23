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


var mainPage = document.getElementById("mainPhoto");
var isPhotoclicked = false
var rotationAngle = 0;

function handleMusic(isStarted) {


   if (isStarted == false) {

      // rotationAngle = getCurrentRotation(3)
      isPhotoclicked = true;

      //mainPage.removeAttribute("class", "mainProfilePhotoClickAfterFirstOne");
      document.getElementById('player').play();
      mainPage.setAttribute("class", "mainProfilePhoto");
      document.getElementById("mainPhoto").style.transform = "rotate("+rotationAngle+"deg)";

   console.log("1:  "+rotationAngle)

      
   }
   else if (isStarted == true) {

      rotationAngle = getCurrentRotation(mainPage)
      isPhotoclicked = false;

      mainPage.removeAttribute("class", "mainProfilePhoto");
      document.getElementById('player').pause();
      mainPage.setAttribute("class", "mainProfilePhotoClickAfterFirstOne");

      mainPage.style.transform = "rotate("+rotationAngle+"deg)";
      console.log("2:  "+rotationAngle)

   }


}

function getCurrentRotation(el){
  var st = window.getComputedStyle(el, null);
  var tm = st.getPropertyValue("-webkit-transform") ||
           st.getPropertyValue("-moz-transform") ||
           st.getPropertyValue("-ms-transform") ||
           st.getPropertyValue("-o-transform") ||
           st.getPropertyValue("transform") ||
           "none";
  if (tm != "none") {
    var values = tm.split('(')[1].split(')')[0].split(',');
    var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
    return (angle < 0 ? angle + 360 : angle); 
  }
  return 0;
}

// mainPage.addEventListener("mouseover", (event) =>{
mainPage.addEventListener("click", (event) => {
   handleMusic(isPhotoclicked,rotationAngle);
   //mainPage.setAttribute("class", "mainProfilePhoto");
})

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
   xmlHttp.open("GET", "https://camo.githubusercontent.com/d31dad30b174a78e4a6f317e422c93e7f8e0adb4d62161cf4648c29820df54b8/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d65796d656e656665616c74756e266c6162656c3d566965777326636f6c6f723d433131343838267374796c653d666c61742d737175617265", false); // false for synchronous request
   xmlHttp.send(null);
   return xmlHttp.responseText;
}



