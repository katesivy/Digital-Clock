


function currentTime() {
  let d = new Date ();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return `${h} : ${m} : ${s}`;
}

function updateTime() {
const y = currentTime();
const x = document.getElementById('clock');
x.textContent = y;
}

setInterval(updateTime, 1000);