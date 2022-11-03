document.getElementById("btn").onclick = () => {
  let randomNumber = [Math.floor(Math.random() * 2000) + 1];

  document.getElementById("randomNumber").innerHTML = randomNumber;

  if (randomNumber > 1000) {
    alert("Too bad, You've Lost!");
  } else {
    alert("Congrats, You're a Winner!!");
  }
};
