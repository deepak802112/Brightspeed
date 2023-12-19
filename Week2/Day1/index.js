// var app = angular.module("demo", []);

// // controller creating
// app.controller("myController", function () {
//   this.name = "deepak";
//   this.lastName = "kumar";
//   this.price = 54;
//   this.arr = ["deepak", "raghu", "durga", "rohit"];
// });

// //we can create more than one controller
// app.controller("productCtrl", function () {
//   this.name = "banana";
//   var a = 10;
//   var b = 20;
//   this.sum = function () {
//     return a + b;
//   };
// });

// redirecting to another page
// creating controller usin g$scope

var app = angular.module("myApp", []);
app.controller("myCtrl", [
  "$scope",
  "$window",
  function (s, w) {
    s.name = "deepak";
    // for array
    s.arr = [2, 3, 4, 5];
    // for object
    s.obj = {
      name: "rohit",
      age: 25,
      height: 55,
    };
    // for redirecting
    s.reDirect = function () {
      w.location.href = "https://www.google.com";
    };
    // for alert
    s.alarm = function () {
      alert("hello welcome to angular first version");
      console.log("hi");
    };
    // add function
    s.calculator = function () {
      var a = Number(prompt("Enter the first number"));
      var b = Number(prompt("Enter the second number"));
      document.write(`sum of two number is:${a + b}`);
    };
  },
]);
