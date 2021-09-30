var birthdayInput = document.getElementById("birthday");
var luckyNoInput = document.getElementById("luckyNo");
var checkBtn = document.getElementById("checkBtn");
var output = document.getElementById("output");
var image = document.getElementById("image");

checkBtn.addEventListener("click", () => {
  var birthdayValue = birthdayInput.value;
  var luckyValue = luckyNoInput.value;
  if (birthdayValue !== "" || luckyValue !== "") {
    outputHandler(birthdayValue, luckyValue);
  } else {
    alert("Please Enter Correct Information!");
  }
});

function outputHandler(birthday, lucky) {
  var resultArray = [];
  var sum = 0;

  for (var i = 0; i < birthday.length; i += 1) {
    resultArray.push(birthday.charAt(i));
  }

  for (var i = 0; i < resultArray.length; i++) {
    if (resultArray[i] !== "-") {
      sum = sum + Number(resultArray[i]);
    }
  }

  if (sum % lucky === 0) {
    output.innerText = "You are lucky!";
    image.src = "./assets/lucky.svg";
  } else {
    output.innerText = "You are not lucky!";
    image.src = "./assets/unlucky.svg";
  }
}