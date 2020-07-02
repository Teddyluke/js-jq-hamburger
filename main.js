
$(".fa-bars").click(function () {
  $(".hamburger-menu").fadeIn("slow").addClass("active");
});

$("a.close").click(function () {
  $(".hamburger-menu").fadeOut("slow").removeClass("active");
})
