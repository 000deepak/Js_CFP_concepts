
//----------------------------------IIFE-------------------------

(function (i) {
    console.log("hello mern", i);
  })(i);
  
  //--------------------------------Currying_Functions--------------
  
  function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
  }
  console.log(calculateVolume(4)(5)(1));