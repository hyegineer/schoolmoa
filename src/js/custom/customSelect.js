$(".custom-select .opt").on("click", function () {
  $(this).siblings(".opt-list-wrap").addClass("active");
})

$(".opt-list-grp .opt-list").on("click", function () {
  var val = $(this).text();

  $(this).parents(".opt-list-wrap").removeClass("active");
  $(this).parents(".opt-list-wrap").siblings(".opt").text(val);
})