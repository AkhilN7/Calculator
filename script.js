"use strict";
const ans = document.querySelector(".output");
let arr = [];
let answer = 0;
document.querySelector(".one").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "1";
});

document.querySelector(".two").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "2";
});

document.querySelector(".three").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "3";
});

document.querySelector(".four").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "4";
});

document.querySelector(".five").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "5";
});

document.querySelector(".six").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "6";
});

document.querySelector(".seven").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "7";
});

document.querySelector(".eight").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "8";
});

document.querySelector(".nine").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "9";
});

document.querySelector(".zero").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "0";
});

document.querySelector(".add").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "+";
});

document.querySelector(".division").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "/";
});

document.querySelector(".multiply").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "*";
});

document.querySelector(".subtract").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + "-";
});

document.querySelector(".dot").addEventListener("click", function () {
  console.log("Hi");
  ans.textContent = ans.textContent + ".";
});

document.querySelector(".equal").addEventListener("click", function () {
  //   let ans_str = ans.textContent;
  //   const operators = /([+\-*/])/;
  //   arr = ans_str.split(operators).filter(Boolean);
  //   console.log(arr);
  //   answer = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === "+") {
  //       let num1 = Number(arr[i - 1]);
  //       let num2 = Number(arr[i + 1]);
  //       answer = answer + num1 + num2;
  //       console.log(answer);
  //     } else if (arr[i] === "*") {
  //       let num = Number(arr[i + 1]);
  //       answer *= num;
  //       console.log(answer);
  //     } else if (arr[i] === "/") {
  //       let num = Number(arr[i + 1]);
  //       answer /= num;
  //       console.log(answer);
  //     } else if (arr[i] === "-") {
  //       let num1 = Number(arr[i - 1]);
  //       let num2 = Number(arr[i + 1]);
  //       answer = answer + num1 - num2;
  //       console.log(answer);
  //     }
  //     ans.textContent = `${answer}`;
  //   }
  ans.textContent = eval(ans.textContent);
});

document.querySelector(".AC").addEventListener("click", function () {
  ans.textContent = "";
  arr = [];
  //answer = 0;
  console.log(arr);
});

document.querySelector(".DEL").addEventListener("click", function () {
  ans.textContent = ans.textContent.slice(0, -1);
});
