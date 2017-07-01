//header type

$(".type-it").typeIt({
  strings: [
    "Restaurants",
    "Hotels",
    "Night Life",
    "Hospitality."
  ],
  speed: 125,
  deleteSpeed: 50,
  breakLines: false,
  autoStart: false
});

//Get active page, underline

$("#topbar a").click(function() {
  $("#topbar a").css("textDecoration", "none");
  $(this).css("textDecoration", "underline");
  return false;
});

function isElementInViewport($elem) {
  // Get the scroll position of the page.
  var scrollElem = "body";
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + window.innerHeight;

  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();

  return elemTop < viewportBottom && elemBottom > viewportTop;
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $(".bot");
  if ($elem.hasClass("start")) return;
  if (isElementInViewport($elem)) {
    $elem.addClass("start");
  }
}

function checkAnimation2() {
  var $elem = $(".bubble-tree");
  if ($elem.hasClass("start")) return;
  if (isElementInViewport($elem)) {
    $elem.addClass("start");
  }
}

// Capture scroll events
$(window).scroll(function() {
  checkAnimation();
  checkAnimation2();
});