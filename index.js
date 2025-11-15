// input variables
const theName = document.querySelector(".main__name");
const age = document.querySelector(".main__age");
const email = document.querySelector(".main__email");
const hobby = document.querySelector(".main__hobby");
const date = document.querySelector(".main__date");
const button = document.querySelector(".main__button");
const input = document.querySelectorAll(".input");
const clear = document.querySelector(".clear");
const realDate = document.querySelector(".footer__date");

// events
button.addEventListener("click", (buttonEvent) => {
  buttonEvent.preventDefault();
  const theNameFirst = theName.value.charAt(0).toUpperCase();
  const theNameSecond = theName.value.slice(1).toLowerCase();
  const theNameValue = (theNameFirst + theNameSecond).trim();
  const ageValue = Number(age.value.trim());
  const emailValue = email.value.trim();
  const hobbyValue = hobby.value.trim();
  const dateValue = date.value.trim();

  if (theNameValue && ageValue && emailValue && hobbyValue && dateValue) {
    console.log(theNameValue);
    console.log(ageValue);
    console.log(emailValue);
    console.log(hobbyValue);
    console.log(dateValue);
  } else {
    alert("Empty!");
  }
});


realDate.innerHTML = new Date();

// clear.addEventListener("click", (clearEvent) => {
//   theNameValue = "";
//   ageValue = "";
//   emailValue = "";
//   hobbyValue = "";
//   dateValue = "";
// });

// functions