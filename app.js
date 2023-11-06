const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const btnDice = document.getElementById("btnDice");

async function adviceGenerator() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advices = await response.json();
  adviceId.innerHTML = advices.slip.id;
  advice.innerHTML = advices.slip.advice;
}

btnDice.addEventListener("click", () => {
  adviceGenerator();
});
