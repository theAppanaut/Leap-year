var leapYear = function(year) {
  return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else if (result) {
      $(".not").text("");
    };

    $("#result").show();
    event.preventDefault();
  });
});
