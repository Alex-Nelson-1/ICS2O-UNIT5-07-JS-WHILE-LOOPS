// Created by: Alex Nelson
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-07-JS-WHILE-LOOPS/sw.js", {
    scope: "/ICS2O-UNIT5-07-JS-WHILE-LOOPS/",
  })
}

/**
 * This function runs an algorithm like factorial but with addtion instead of multiplication.
 */
function adding() { 
  //variables
  let numberOne = parseFloat(document.getElementById("numberOne").value)
  let sum = null
  //restart in number is negative
  if (numberOne < 0) {
  document.getElementById("restart").innerHTML = "Number is negative. Please reload the page."
  }
  //Factorial adding function
  else {
    while (numberOne > 0) {
      sum = sum + numberOne
      numberOne = numberOne - 1
    }
  }
  //output 
  document.getElementById("output").innerHTML = sum
}

