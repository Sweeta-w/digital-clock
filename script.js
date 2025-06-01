const hour = document.getElementById("hour")
const minute = document.getElementById("min")
const sec = document.getElementById("sec")
const date = document.getElementById("date")

let now = new Date()

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const fullDate = now.toLocaleDateString('en-GB', options)

date.innerText = fullDate


function setTime() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()

  hour.innerText = h;
  minute.innerText = m;
  sec.innerText = s;
  setTimeout(() => {
    setTime()
  }, 1000)


}

setTime()

