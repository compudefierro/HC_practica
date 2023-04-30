x = "2";
try {
  if (x.trim() == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  console.log("Input is " + err);
}
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[3].pop();
console.log("🚀 ~ file: try.js:19 ~ myData:", myData);

function arrayMap() {
  // Imperativo:
  let n = [-9, 87, 72, 452, 32, -9];
  let z = [];
  let doubleMinusOne = (x) => x * 2 - 1;
  for (let i = 0; i < n.length; i++) {
    z[i] = doubleMinusOne(n[i]);
  }
  // Declarativo:
  let zd = n.map((v) => v * 2 - 1);

  console.log("🚀 ~ file: try.js:24 ~ z:", z);
  console.log("🚀 ~ file: try.js:30 ~ zi:", zd);
}

function arrayFilter() {
  let n = [-9, 87, 72, 452, 32, -9];
  let z = [];

  let lessThanFifty = (v) => v < 50;
  for (let i = 0; i < n.length; i++) {
    lessThanFifty(n[i]) && z.push(n[i]);
  }
  // Declarativo:
  let zd = n.filter((v) => v < 50);

  console.log("🚀 ~ file: try.js:40 ~ arrayFilter ~ z:", z);
  console.log("🚀 ~ file: try.js:47 ~ arrayFilter ~ zd:", zd);
}

function arrayReduce() {
  let n = [-9, 87, 72, 452, 32, -9];
  let s = 0;

  for (let i = 0; i < n.length; i++) {
    s += n[i];
  }

  // Declarativa:
  let sd = n.reduce((acc, v) => acc + v);

  console.log("🚀 ~ file: try.js:56 ~ arrayReduce ~ s:", s);
  console.log("🚀 ~ file: try.js:63 ~ arrayReduce ~ sd:", sd);
}
arrayMap();
arrayFilter();
arrayReduce();
