//date
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const dayName = days[today.getDay()];
document.getElementById("day").innerText = dayName;

//time
const timeEl = document.getElementById("time");
function updateTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeEl.innerText = `${hours}:${minutes}`;
}
updateTime();
setInterval(updateTime, 1000);


//battery
const batteryFill = document.getElementById("batteryFill");
const batteryCharger = document.getElementById("batteryCharger");
function updateBatteryStatus(battery) {
    const batteryPercentage = battery.level * 100;
    batteryFill.setAttribute("width", (batteryPercentage * 0.88) - 6);
}
if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
    updateBatteryStatus(battery);
    battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
    });
} else {
    batteryFill.setAttribute("width", 172); 
}

//fullscreen
function goFullScreen() {
const doc = document.documentElement;
if (doc.requestFullscreen) {
    doc.requestFullscreen();
} else if (doc.mozRequestFullScreen) { 
    doc.mozRequestFullScreen();
} else if (doc.webkitRequestFullscreen) { 
    doc.webkitRequestFullscreen();
} else if (doc.msRequestFullscreen) {
    doc.msRequestFullscreen();
}
}
goFullScreen(); 
  
