//1
// 1. Swaping values
let array = [1, 2, 3, 4, 5];

// temp variable
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// array destructuring
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

let a = 1;
let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// math
b = a + (a = b) - b;
console.log(a, b);

//       2

//2
// 2. copy to clipboard

function copyToClipBoard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

function handleClick() {
  let text = document.querySelector("#text");
  copyToClipBoard(text.innerText);
}

//      3
//3
// 3. destructuring aliases

const language = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: createrName } = language;

console.log(languageName, createrName);
