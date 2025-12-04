$(document).ready(function() {
  
  /* scroll */
  $("a[href^='#']").not("[data-target]").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  /* timer */
  var timeLeft = 807;
  function makeTimer() {
    var e = new Date();
    (e = Date.parse(e) / 1), (timeLeft -= 1);
    var t = 0,
    o = Math.floor(timeLeft / 60),
    r = Math.floor((timeLeft - 60 * o * 1) / 1);
    if (timeLeft>0) {
      t < "10" && (t = "0" + t), o < "10" && (o = "0" + o), r < "10" && (r = "0" + r), $(".days").html(0), $("#hours").html(t), $("#min").html(o), $("#sec").html(r);
    } else{
      $(".days").html("00"), $("#hours").html("00"), $("#min").html("00"), $("#sec").html("00")
    }
  }
  setInterval(function () {
    makeTimer();
  }, 1000);

});
