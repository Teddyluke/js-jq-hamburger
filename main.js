
$(".fa-bars").click(function () {
  $(".hamburger-menu").fadeIn("slow");
});

$("a.close").click(function () {
  $(".hamburger-menu").fadeOut("slow").removeClass("active");
})
