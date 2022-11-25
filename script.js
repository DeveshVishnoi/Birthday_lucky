/** @format */

const date = document.querySelector(".dinank");
const number = document.querySelector(".sankhya");
const button = document.querySelector(".button");
const output = document.querySelector("#outputmsg");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let d = date.value;
  console.log(d);
  let num = number.value;
  console.log(num);

  output.classList.remove("lucky");
  output.classList.remove("unlucky");
  output.classList.remove("error");

  if (d === "" || d === null || number === "" || number === null) {
    output.classList.add("error");
    output.innerText = "Enter valid Birth Date and Lucky Number";
  } else if (number < 1) {
    output.classList.add("error");
    output.innerText = "Lucky number should be greater than or equal to 1";
  } else {
    d = d.split("-");
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
      let num = parseInt(d[i]);
      sum = sum + adddigit(num);
    }
    console.log(sum);

    if (sum % num == 0) {
      output.classList.add("lucky");
      output.innerText = "Woohoo!!! Your Birth Date is lucky!";
    } else {
      output.classList.add("unlucky");
      output.innerText = "Oh no!!! Your Birth Date is not lucky!";
    }
  }
});

function adddigit(num) {
  let tot = 0;
  while (num != 0) {
    tot = tot + (num % 10);
    num = parseInt(num / 10);
  }
  return tot;
}
