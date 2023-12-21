let app = angular.module("demo", []);
app.controller("myCtrl", [
  "$scope",
  function (s) {
    s.islogged = true;
    s.arr = [];
    s.change = function () {
      s.arr = [{ num: 4 }, { num: 2 }, { num: 3 }, { num: 3 }];
      s.islogged=false;
    };
    s.name;
    s.show=function(){
        console.log(s.name);
    }
    s.isRed=true;
    s.changeColor=function(){
        s.isRed=false;
    }
  },
]);
