const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle("answer-displayed");
    const icon = event.currentTarget.querySelector(".icon");

    if (answer.classList.contains("answer-displayed")) {
      // If the answer is displayed, set the icon to a minus
      icon.innerHTML = `<i class="fa-solid fa-circle-minus" style="color: hsl(292, 42%, 14%)"></i>`;
      event.target.style.fontSize = "1.4rem";
    } else {
      // If the answer is hidden, set the icon to a plus
      icon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
      event.target.style.fontSize = "1.2rem";
    }
  });
});
