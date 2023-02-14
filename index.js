const displayer = document.getElementById("current-time");
const inp = document.getElementById("timeCount");
inp.addEventListener("keypress", start);
let initialValue;
let recall;
let parseinitialvalue;

function start(e) {
  if (e.key === "Enter") {
    clearInterval(recall);
    initialValue = inp.value;

    if (!isNaN(inp.value)) {
      parseinitialvalue = parseInt(initialValue);
      recall = setInterval(() => {
        if (parseinitialvalue >= 0) displayer.innerText = parseinitialvalue;
        else clearInterval(recall);
        parseinitialvalue--;
      }, 1000);
    } else {
      displayer.innerText = "0";
    }
  }
}
