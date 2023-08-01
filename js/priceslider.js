
  // ==========================================  test   ===================================================

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// $(function() {
//   $('input[type=range]').change(getTotal);
//   getTotal(); 
// });

// function getTotal() {
//   var first = parseInt(slider.value) || 0;

//   var second  = Math.round((5/100)*first) ||0;

//   // var num = parseFloat(second)-parseInt(second);
  
//   var x = (19/100)*first ||0;
//   var num1 = (parseFloat(x)-parseInt(x))*5;
//   //var num1 =Math.round(y);

//   var third1  = (19/100)*first ||0; 
//   var third2  =(19/100)*first ||0;
//   var third3  = (19/100)*first ||0;
//   var third4  = (19/100)*first ||0;
//   var third5  = (19/100)*first ||0;

//   var sum =parseInt(third1)+ num1;
//   var total = sum.toFixed(2);

//   document.getElementById("sum").innerHTML = parseInt(second);
//   document.getElementById("total1").innerHTML = parseInt(total);
//   document.getElementById("total2").innerHTML = parseInt(third2);
//   document.getElementById("total3").innerHTML = parseInt(third3);
//   document.getElementById("total4").innerHTML = parseInt(third4);
//   document.getElementById("total5").innerHTML = parseInt(third5);
// }





 // ========================================== For 7 weak  ===================================================

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

$(function() {
  $('input[type=range]').change(getTotal);
  getTotal(); 
});

function getTotal() {
  var first = parseInt(slider.value) || 0;

  var second  = (5/100)*first ||0;

  var num = parseFloat(second)-parseInt(second);
  
  var x = (95/100)*first ||0;
  var num1 = parseFloat(x)-parseInt(x);

  var a = parseInt(x)/6 ;
  var num2 = (parseFloat(a)-parseInt(a))*6 ;


  var sum =parseInt(a) + num + num1 +num2;
  var total = sum.toFixed(2);

  document.getElementById("today").innerHTML =parseInt(second);
  document.getElementById("weak1").innerHTML = parseInt(total);
  document.getElementById("weak2").innerHTML = parseInt(a);
  document.getElementById("weak3").innerHTML = parseInt(a);
  document.getElementById("weak4").innerHTML = parseInt(a);
  document.getElementById("weak5").innerHTML = parseInt(a);
  document.getElementById("weak6").innerHTML = parseInt(a);
}


 // ========================================== For 6 weak  ===================================================

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// $(function() {
//   $('input[type=range]').change(getTotal);
//   getTotal(); 
// });

// function getTotal() {
//   var first = parseInt(slider.value) || 0;

//   var second  = (5/100)*first ||0;

//   var num = parseFloat(second)-parseInt(second);
  
//   var x = (19/100)*first ||0;
//   var num1 = (parseFloat(x)-parseInt(x))*5;

//   var third1  = (19/100)*first ||0; 
//   var third2  =(19/100)*first ||0;
//   var third3  = (19/100)*first ||0;
//   var third4  = (19/100)*first ||0;
//   var third5  = (19/100)*first ||0;

//   var sum =parseInt(third1) + num + num1;
//   var total = sum.toFixed(2);

//   document.getElementById("today").innerHTML = parseInt(second);
//   document.getElementById("weak1").innerHTML = parseInt(total);
//   document.getElementById("weak2").innerHTML = parseInt(third2);
//   document.getElementById("weak3").innerHTML = parseInt(third3);
//   document.getElementById("weak4").innerHTML = parseInt(third4);
//   document.getElementById("weak5").innerHTML = parseInt(third5);
// }



 // ========================================== For 7 weak  ===================================================
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// $(function() {
//   $('input[type=range]').change(getTotal);
//   getTotal(); 
// });

// function getTotal() {
//   var first = parseInt(slider.value) || 0;

//   var second  = (5/100)*first ||0;
//   var num = parseFloat(second)-parseInt(second) ||0;

//   var x = (95/100)*first ||0;
//   var num1 = parseFloat(x)-parseInt(x) ||0;
//   var a = parseInt(x)/6 ||0;//per weak value

//   var num3=2 = (parseFloat(a)-parseInt(a))*6||0 ; //separeted floting number additon

//   var sum =parseInt(a) + num + num1 +num3 ||0;
//   var total = sum.toFixed(2) ||0;

//   document.getElementById("today").innerHTML = parseInt(second);
//   document.getElementById("weak1").innerHTML = parseInt(total);
//   document.getElementById("weak2").innerHTML = parseInt(third2);
//   document.getElementById("weak3").innerHTML = parseInt(third3);
//   document.getElementById("weak4").innerHTML = parseInt(third4);
//   document.getElementById("weak5").innerHTML = parseInt(third5);
//   document.getElementById("weak6").innerHTML = parseInt(third5);
// }



// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// $(function() {
//   $('input[type=range]').change(getTotal);
//   getTotal(); 
// });

// function getTotal() {
//   var first = parseInt(slider.value) || 0;
  

//   var second  = (5/100)*first ||0;
  
//   var num1 = parseFloat(second)-parseInt(second);//dosomic alada
  
//   var x = ((95/100)*first) ||0;
//   var num2 = parseFloat(x)-parseInt(x);//dosomic alada
//   var a = parseInt(x)/6 ;
//   var num3 = parseFloat(x)-parseInt(x);
//   var num4 = parseFloat(x)-parseInt(x);
//   var num5 = parseFloat(x)-parseInt(x);
//   var num6 = parseFloat(x)-parseInt(x);
//   var num7 = parseFloat(x)-parseInt(x);
//   var num8 = parseFloat(x)-parseInt(x);


//   var sum =parseInt(third1) + num1 + num2 + num3 + num4 + num5 + num5 + num7 + num8;
//   var total = sum.toFixed(2);

//   document.getElementById("today").innerHTML = parseInt(fir);
//   document.getElementById("weak1").innerHTML = parseInt(total);
//   document.getElementById("weak2").innerHTML = parseInt(a);
//   document.getElementById("weak3").innerHTML = parseInt(a);
//   document.getElementById("weak4").innerHTML = parseInt(a);
//   document.getElementById("weak5").innerHTML = parseInt(a);
//   document.getElementById("weak6").innerHTML = parseInt(a);
// }



















