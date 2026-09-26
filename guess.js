const btn = document.querySelector("#btn");
const input = document.querySelector("#inp");
const answer = document.querySelector(".result");
let count = 0;
btn.addEventListener("click", () => {
  if (input.value == "" || input.value > 100) {
    alert("please guess the number");
  } else {
    answer.innerHTML = "";
    count++;
    let random = Math.floor(Math.random() * 100);
    console.log(random);
    if (random == input.value) {
      const result = document.createElement("div");
      // result.classList.add()
      result.innerHTML = `
      
      <div>yippie you win</div>
      <p>The number was: ${input.value}</p>
      <p>you guessed it in ${count} </p>
      
      `;
      answer.appendChild(result);
    } else {
      const result = document.createElement("div");
      // result.classList.add()
      result.innerHTML = `
      
      <div>guess correct number</div>
      <p>The number was: ${input.value}</p>
      <p>you guessed it in ${count} </p>
      
      `;
      answer.appendChild(result);
    }
  }
});
