var content = ["Muhammad Hashir", "Web developer", "Freelancer"];
var contentIndex = 0;
var i = 0;
var txt = content[contentIndex];
var speed = 250;

function typeWriter() {
  if (i <= txt.length) {
    document.querySelector(".change_name").innerHTML += txt.charAt(i);
    document.querySelector(".about_change_name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".change_name").innerHTML = "";
    document.querySelector(".about_change_name").innerHTML = "";
    i = 0;
    contentIndex++;
    txt = content[contentIndex];
    setTimeout(typeWriter, speed);
  }

  if (contentIndex === content.length) {
    contentIndex = 0;
    txt = content[contentIndex];
  }
}
typeWriter();

window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".container").style.backgroundColor = "#dc143c";
  } else {
    document.querySelector(".container").style.background = "none";
  }
};
