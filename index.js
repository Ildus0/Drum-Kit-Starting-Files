"use strict";


let sound = document.querySelectorAll("audio");
let buttonNum = document.querySelectorAll('.drum').length;

for (let i = 0; i < buttonNum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";
       sound[i].play();

  });
}

document.addEventListener("keypress", press);

function press(event) {
  console.log(event.key);
    switch (event.key) {
    case "w":
      sound[0].play();
      break;
    case "a":
      sound[1].play();
      break;
    case "s":
      sound[2].play();
      break;
    case "d":
      sound[3].play();
      break;
    case "j":
      sound[4].play();
      break;
    case "k":
      sound[5].play();
      break;
    case "l":
      sound[6].play();
      break;
  }
  
}

