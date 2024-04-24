let engine = null;

let countdown = 0;
let countmin = 0;
let maxmin = 0;
let counthour = 0;

const watch = (maxminute) => {
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");
  let hour = document.getElementById("hour");

  const clock = () => {
    countdown++;
    if (countdown < 10) {
      sec.innerHTML = `0${countdown}`;
    } else if (countdown == 60) {
      sec.innerHTML = "00";
    } else {
      sec.innerHTML = countdown;
    }

    if (countdown == 60) {
      countmin++;
      if (countmin < 10) {
        min.innerHTML = `0${countmin}`;
      } else if (countmin == 60) {
        min.innerHTML = "00";
      } else {
        min.innerHTML = countmin;
      }
      maxmin++;
      countdown = 0;
    }

    if (maxmin === Number.parseInt(maxminute)) {
      clearInterval(clockengine);
      document.querySelector("#dispaly-timeout").style.display = "grid";
    }

    if (countmin == 59) {
      counthour++;
      if (counthour < 10) {
        hour.innerHTML = `0${counthour}`;
      } else {
        hour.innerHTML = counthour;
      }
      countmin = 0;
    }
  };

  const clockengine = setInterval(clock, 1000);
  engine = clockengine;
};


const start = () => {
  let val = document.querySelector("#timmer").dataset.bool
  let setTime = document.querySelector("#timmer").value;
  let contaner = document.querySelector("#main-con");
  if (setTime == ""){
    document.querySelector("#timmer").style.border = "solid 2px red"
  }
  
  if (val == "false"){
    contaner.style.display = "none";
    watch(setTime);
  }
  else if (val == "true"){
    contaner.style.display = "none";
    watch("infinite");
  }
};

const rs = () => {
  document.querySelector("#main-con").style.display = "grid";
  document.querySelector("#dispaly-timeout").style.display = "none";
  countdown = 0;
  countmin = 0;
  maxmin = 0;
  counthour = 0;
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");
  let hour = document.getElementById("hour");
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
};

const stopwatch = () => {
  document.querySelector("#main-con").style.display = "none";
  let val = document.querySelector("#timmer").dataset.bool = true
  document.querySelector("#timmer").value = 1
  watch("it will never end");
};

const pause = () => {
  let ps = document.querySelector("#ps");

  if (ps["data-z"] == false) {
    ps.innerHTML = "||";
    // console.log("if");
    ps["data-z"] = true;
    start();
  } else {
    ps.innerHTML = "|>";
    clearInterval(engine);
    // console.log("else");
    ps["data-z"] = false;
  }
};

const over = () => {
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");
  let hour = document.getElementById("hour");
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  countdown = 0;
  countmin = 0;
  maxmin = 0;
  counthour = 0;
  let ps = document.querySelector("#ps");
  ps.innerHTML = "|>";
  ps["data-z"] = false;
  clearInterval(engine); 
};
