$(document).ready(function() {
  $(".section h2").click(function() {
    $("p").slideToggle();
  });

  $(".section p").click(function() {
    $("p").slideToggle();
  });
});

// $(document).ready(function() {
//   $(".click").click(function() {
//     $("#show").toggle();
//     $("#hide").toggle();
//   });
// });