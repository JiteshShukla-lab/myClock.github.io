setInterval(() => {
  let date = new Date();

  let minute = date.getMinutes() * 6;
  let second = date.getSeconds() * 6;
  let hour = date.getHours() * 30 + Math.round(minute / 12);

  

  moveHourhand(hour);
  moveminutehand(minute);
  movesecondhand(second);
}, 1000);

function moveHourhand(hour) {
  document.querySelector(".hourhandContainer").style =
    "transform:rotate(" + Number(hour + 90) + "deg)";
}

function moveminutehand(minute) {
  document.querySelector(".minutehandContainer").style =
    "transform:rotate(" + Number(minute + 90) + "deg)";
}

function movesecondhand(second) {
  document.querySelector(".secondhandContainer").style =
    "transform:rotate(" + Number(second + 90) + "deg)";
}

setInterval(() => {
  let date = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let second = date.getSeconds();
  let sec = second < 10 ? "0" + second : second;
  let minute = date.getMinutes();
  let min = minute < 10 ? "0" + minute : minute;
  let hour = date.getHours();
  let hours = hour % 12;
  let hr = hours < 10 ? "0" + hours : hours;
  let ampm = hour >= 12 ? "Pm" : "Am";
  let day = weekday[date.getDay()];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let d = date.getDate();
  let ltTen = d < 10 ? "0" + d : d;
  document.querySelector(".digitalContainer").innerHTML = `
    <div class='digital'>
     <span><p style="font-size:30px;">${ltTen}&nbsp;|&nbsp;${month}&nbsp;|&nbsp;${year}<br/>
     <hr style="margin-right:10px; color:#0000dd;"/>
     ${day}&nbsp;|&nbsp;${hr} : ${min} : ${sec} &nbsp;| &nbsp;<b>${ampm}</b>
     <p></span>
    </div>`;
});
