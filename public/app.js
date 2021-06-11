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

function submit() {
  var name_input = document.querySelector(".name_input");
  var email_input = document.querySelector(".email_input");
  var subject_input = document.querySelector(".subject_input");
  var message_input = document.querySelector(".message_input");
  var data = {
    name: name_input.value,
    email: email_input.value,
    subject: subject_input.value,
    message: message_input.value,
  };
  if (
    data.name === "" &&
    data.email === "" &&
    data.subject === "" &&
    data.message === ""
  ) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").innerHTML =
      "name, email, subject and message are required";
    setTimeout(
      () => (document.querySelector(".error").style.display = "none"),
      3000
    );
  } else {
    document
      .querySelector(".contact_buttons")
      .setAttribute("disabled", "disabled");
    const id = firebase.firestore().collection("results").doc().id;
    firebase
      .firestore()
      .collection("portfolio_form")
      .doc(id)
      .set(data)
      .then(() => {
        document.querySelector(".success").style.display = "block";
        document.querySelector(".success").innerHTML = "message has been sent";
        name_input.value = "";
        email_input.value = "";
        subject_input.value = "";
        message_input.value = "";
        setTimeout(
          () => (document.querySelector(".success").style.display = "none"),
          3000
        );
        document.querySelector(".contact_buttons").removeAttribute("disabled");
      })
      .catch((err) => {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").innerHTML = err.message;
        setTimeout(
          () => (document.querySelector(".error").style.display = "none"),
          3000
        );
      });
  }
}

window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".container").style.backgroundColor = "#dc143c";
  } else {
    document.querySelector(".container").style.background = "none";
  }
};

function toggle() {
  document.querySelector(".nav_list").classList.toggle("toggle");
  document
    .querySelector(".toggle_button")
    .classList.toggle("toggle_close_button");
}
