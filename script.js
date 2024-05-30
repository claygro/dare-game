function put() {
  let num = parseInt(document.querySelector(".input").value);
  if (num === 1) {
    document.querySelector("#any").innerHTML = "Dare:Do prank call someone";
  } else if (num === 2) {
    document.querySelector("#any").innerHTML =
      "Dare:Draw HTML,CSS and JAVASCRIPT logo and hang on wall";
  } else if (num === 3) {
    document.querySelector("#any").innerHTML = "Dare:Make tic tac toe game";
  } else if (num === 4) {
    document.querySelector("#any").innerHTML =
      "Dare:Make rock paper and scissor game";
  } else if (num === 5) {
    document.querySelector("#any").innerHTML = "Dare: Slap on your face";
  } else if (num === 6) {
    document.querySelector("#any").innerHTML =
      "Dare: Say 'hello friend' to your friend";
  } else if (num === 7) {
    document.querySelector("#any").innerHTML =
      "Dare: Pour water onto the floor";
  } else if (num === 8) {
    document.querySelector("#any").innerHTML = "Dare: Take a rest";
  } else if (num === 9) {
    document.querySelector("#any").innerHTML =
      "Dare:brake up with your girlfriend of boyfriend";
  } else if (num === 10) {
    document.querySelector("#any").innerHTML = "Dare:Send meems to your friend.";
  }
  if (num > 10) {
    document.querySelector("#any").innerHTML = "You cross the limit";
  }
}
