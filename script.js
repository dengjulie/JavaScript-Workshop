// Always start the document with the following function and write all funcitons inside
//
$(document).ready(function() {

  //The Basics
  //
  // JQuery functions always start with a $ sign, followed by the class or id selector name in parentheses.
  // For this set of activities, we will be manipulating #box1, #box2, #box3, #box4, #box5
  // Once we select the class or id name that we want to manipulate, we can call a function on it
  // Syntax reminders: use semicolons at the end of functions!
  //
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
  // Modify the box-shifted class as desired
  // Important: the id's characteristics always override any of the classes' characteristics (see this by trying to modify left)
  $('#box2').click(function() {
    $('#box2').toggleClass('box-shifted');
  })

  // ACTIVITY 3:
  // alternatively, use the if-else clause
  // can include more functions to be called upon clicking
  // toggle the class .box-color on #box3 using hasClass, removeClass, and addClass
  // use .show() and .hide() on box4 as well within the if-else clause
  $('#box3').click(function() {
    if ($('#box3').hasClass('box-color')) {
      $('#box3').removeClass('box-color');
      $('#box4').show();
    }
    else {
      $('#box3').addClass('box-color');
      $('#box4').hide();
    }
  })

  // ACTIVITY 4:
  // use animate!
  // first parameter is css, second arameter is time of transition
  // can control time of transition
  // use setTimeout to make events happen at different times
  //using animate will override id characteristics (try modifying left!)

  $('#box5').click(function() {
    $('#box5').animate({height: '300px', left: '50%'}, 200);
    setTimeout(function() {
      $('#box5').animate({height: '100px', left: '75%'}, 200);
    })
  })



  //ACTIVITY 5: Show and hide the sidebar
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
      // the following is a bit more challenging but gets rid of a bug with scrolling
      setTimeout(function() {
      $("body").addClass("no-scroll");
      }, 300);
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

  //ACTIVITY 6: Make the sidebar links scroll to the correct area of the page
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
  // Google jQuery functions!

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
