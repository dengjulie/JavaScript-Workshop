// Always start the document with the following function and write all funcitons inside
//
$(document).ready(function() {

  //The Basics
  //
  // JQuery functions always start with a $ sign, followed by the class or id selector name in parentheses.
  // For this set of activities, we will be manipulating #box1, #box2, #box3, #box4, #box5
  // Once we select the class or id name that we want to manipulate, we can call a function on it
  // Syntax reminders: use semicolons at the end of functions!
  // Example (uncomment the following):
  // $(".text").css("color", "yellow");

  // ACTIVITY 1:
  $('#box1').hover(function() {
    $('#box1').css("height", 200);
    $('#box1').css("width", 200);
  }, function() {
    $('#box1').css("height", 100);
    $('#box1').css("width", 100);
  })


  // ACTIVITY 2:
  $('#box2').click(function() {
    $('#box2').toggleClass('box-shifted');
  })

  // ACTIVITY 3:
  // alternatively, use the if-else clause
  // can include more functions to be called upon clicking
  $('#box2').click(function() {
    if ($('#box2').hasClass('box-shifted')) {
      $('#box2').addClass('box-shifted');
    } else {
      $('#box2').removeClass('box-shifted');
    }
  })

  // use .hide and .show

  //ACTIVITY 4: Show and hide the sidebar
  //Hint: Use the following: click, hasClass, removeClass, addClass, and an if-else clause
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
    else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      // the following is a bit more challenging
      // setTimeout(function() {
      // $("body").addClass("no-scroll");
      // }, 300);
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }
  });

  //ACTIVITY 5: Make the sidebar links scroll to the correct area of the page
  // Can use scrollTop function after clicking
  // Or, for smooth scrolling, can use the animate function which takes in two parameters - one for the function, and one for the time it animates over
  $("#home-link").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  })

  $("#misc-link").click(function() {
    $("html, body").animate({ scrollTop: 500 }, 300);
    return false;
  })
  $("#dog-link").click(function() {
    $("html, body").animate({ scrollTop: 1200 }, 300);
    return false;
  })

  // Extra Challenge:
  // Implement the left and right buttons of the carousel:
  // Hint: use #carousel-next
  // pseudo code:
  // When the #carousel-next button is clicked
  //
  // get the number of pixels and add 960
  //
  // Utilize google!

  $("#carousel-next").click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin <= -3840) {
      return False;
    }
    else {
      $("#carousel").css("margin-left", margin - 960 + "px");
    }
  });

  $("#carousel-prev").click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin >= 0) {
      return False;
    }
    else {
      $("#carousel").css("margin-left", margin + 960 + "px");
    }
  });
});
