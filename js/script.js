// $(document).ready(function($) {
//     $("#slider-idade").slider({
//       range: "min",
//       value: 18,
//       min: 18,
//       max: 100,
//       step: 1,
//       animate: 200,
//       slide: function(event, ui) {
//             $("#valor-idade").val(ui.value);
//             }
//         });
//     $("#valor-idade").val($("#slider-idade").slider("value"));

//       $("#valor-idade").change(function(){
//           $("#slider-idade").slider("value", this.value)
//       });
//   });

//   // Enable Input Clear Field

//   $(function($){
//   $.fn.defaultValue = function(){

//            return this.each(function(){
//               var default_value = $(this).val();
//               var $this = $(this);

//               $this.focus( function() {

//                   if ($this.val() == default_value) $(this).val("");
//                   });
//               $this.blur( function() {
//                   if ($this.val().length == 0){
//                       $this.val(default_value);
//                   }
//               })
//            });
//            };
//   $('input[type=text], textarea, input[type=email], input[type=tel], input[type=number], input[type=password]').defaultValue();
//    });
// +++++++++++++++++++++++++++++===========================================================++++++++++++++++++++++++++++++++++++++++++++++++++++
// $( function() {
//     $( "#slider-range-min" ).slider({
//       range: "min",
//       value: 37,
//       min: 1,
//       max: 700,
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.value );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
//   } );

// +++++++++====================================================== CSS SLIDER================================
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
//=========================================================== Day slider with inputbox ============================

$("#day_slider").slider({
  min: 0, max: 100, value: 0,
  slide: function (event, ui) {//When sliding the toggle
      updateInputFromSlider("#day_slider_input", $(this).slider("value"));
  },
  change: function (event, ui) {//After releasing the toggle
      updateInputFromSlider("#day_slider_input", $(this).slider("value"));
  }
});
function updateInputFromSlider(input_id, value) {
  $(input_id).val(value);
}
$(document).ready(function () {
  $("#day_slider_input").change(function () {
    $("#day_slider").slider("value", $(this).val());
    $("#day_slider").prop("value", $(this).val());
  });
});
// ==========================================  End   ===================================================
// ==========================================  weak slider with inputbox  ===================================================
$("#weak_slider").slider({
  min: 0, max: 100, value: 50,
  slide: function (event, ui) {//When sliding the toggle
      updateInputFromSlider("#weak_slider_input", $(this).slider("value"));
  },
  change: function (event, ui) {//After releasing the toggle
      updateInputFromSlider("#weak_slider_input", $(this).slider("value"));
  }
});
function updateInputFromSlider(input_id, value) {
  $(input_id).val(value);
}
$(document).ready(function () {
  $("#weak_slider_input").change(function () {
    $("#weak_slider").slider("value", $(this).val());
    $("#weak_slider").prop("value", $(this).val());
  });
});
// ==========================================   END   ===================================================
