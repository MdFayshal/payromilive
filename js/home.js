
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
