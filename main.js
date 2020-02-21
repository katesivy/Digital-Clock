

function currentTime() {
  let d = new Date ();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  var hh = twoDigits(h);
  var mm = twoDigits(m);
  var ss = twoDigits(s);
  var ampm = 'AM';
  if (h >= 12) {
    hh = h - 12;
    ampm = 'PM';
  }
  return `${hh} : ${mm} : ${ss} ${ampm}`;
} 

 function updateTime() {
    const y = currentTime();
    const x = document.getElementById('clock');
    x.textContent = y;
}

setInterval(updateTime, 1000);

function twoDigits(n) {
  if (n < 10) {
  n = '0' + n;
  return n;
  } else {
    return n;
  }
}
