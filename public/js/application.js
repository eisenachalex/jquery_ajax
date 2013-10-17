$(document).ready(function(){

  $("#get_color").click(function(e) {
    e.preventDefault();

    $.post('/color', function(response) {
      
      $("#color_me > li:nth-child(" + response.cell + ")").css("background-color", response.color);
      console.log(response);
      console.log(response.cell);
    }, "json");

  });
});
