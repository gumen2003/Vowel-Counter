var vowelCountDisplay = document.getElementById("vowelCount");
const textArea = document.getElementById("textArea");

function vowelCount(event) {
  const str = event.target.value.toLowerCase();
  let vowArr = ["a", "e", "i", "o", "u"],
    counter = 0;

  for (let letter of str) {
    if (vowArr.includes(letter)) {
      counter++;
      vowelCountDisplay.classList.add("blink");
    } else {
      vowelCountDisplay.classList.remove("blink");
    }
  }
  vowelCountDisplay.innerHTML = counter;
}

textArea.addEventListener("keyup", vowelCount);