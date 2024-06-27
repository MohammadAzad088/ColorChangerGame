const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (element) {
    console.log(element);
    console.log(element.target);

    if (element.target.id === "Grey") {
      body.style.backgroundColor = element.target.id;
    }
    if (element.target.id === "White") {
      body.style.backgroundColor = element.target.id;
    }
    if (element.target.id === "Blue") {
      body.style.backgroundColor = element.target.id;
    }
    if (element.target.id === "Yellow") {
      body.style.backgroundColor = element.target.id;
    }
  });
});
