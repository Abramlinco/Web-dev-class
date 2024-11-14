const lightbulb = document.getElementById("lightbulb");
const bulbCntrl = document.getElementById("lightup");

let isOn = false;

lightup.addEventListener("click", () => {
  isOn = !isOn;
  
  if (isOn) {
    lightbulb.style.color = "#FFD700"; 
    lightup.textContent = "Turn On";
  } 
  
  else {
    lightbulb.style.color = "#444"; 
    lightup.textContent = "Turn off";
  }
});
