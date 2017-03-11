/* What is JQuery?
 * JQuery is a Javascript Library (or collection of code) that basically
 * combines a lot of basic Javascript code together into functions that 
 * we typically use a lot. */

/* Always start the document with the following function and write all funcitons inside */
$(document).ready(function() {

  /* THE BASICS
   *
   * JQuery functions always start with a $ sign, followed by the class or id selector name in parentheses.
   * For this set of activities, we will be manipulating #box1, #box2, #box3, #box4, #box5
   * Once we select the class or id name that we want to manipulate, we can call a function on it
   * Syntax reminders: use semicolons at the end of functions!
   *
   * Example (uncomment the following):
   * $(".text").css("color", "yellow"); */

  /* ACTIVITY 1
   * TIPS: Use the jQuery CSS function in order to insert CSS into the HTML element */
  $('#box1').hover(function() {
    $('#box1').css("height", 200);
    $('#box1').css("width", 200);
  }, function() {
    $('#box1').css("height", 100);
    $('#box1').css("width", 100);
  })


  /* ACTIVITY 2:
   * TIPS: Right now the #box2 div is not shifted, but there may be a class in the CSS file that would help you!
   * How do we add a class to an HTML element? Some functions you might want to use: toggleClass
   * Important: the id's characteristics always override any of the classes' characteristics (see this by trying to modify left) */
  $('#box2').click(function() {
    $('#box2').toggleClass('box-shifted');
  })

  /* ACTIVITY 3:
   * TIPS: Alternatively, we don't have to use the same function as activity 2,
   * we can just use an if and else statement in Javascript. How would we add an remove a class in the same
   * manner as above?
   * TIPS: Some functions you might want to use: hasClass, removeClass, addClass, show, hide. */
  $('#box3').click(function() {
    if ($('#box3').hasClass('box-color')) {
      $('#box3').removeClass('box-color');
    }
    else {
      $('#box3').addClass('box-color');
    }
  })

  /* ACTIVITY 4:
   * Combines some of the logic from the previous activities! 
   * TIPS: You can't see it right now, but there's a hidden box called #showbox4.
   * When you "hide" a box, we can't click on it anymore, so what can we do with this box to help us?
   * TIPS: You might want to use the functions: show, hide, css */
  $('#box4').click(function() {
    if ($('#box4').is(":visible")) {
      $('#box4').hide();
      $('#showbox4').css({'visibility' : 'visible'});
    }
  })

  $('#showbox4').click(function() {
    if ($('#box4').is(":hidden")) {
      $('#box4').show();
      $('#showbox4').css({'visibility' : 'hidden'});
    }
  })

  /* ACTIVITY 5:
   *  TIPS: Use the animate function! It takes in two parameters, the first
   *  is the css to add, the second parameter is how long it takes to perform the transition
   *  BONUS: Use setTimeout to make events happen at different times
   *  using animate will override id characteristics (try modifying left!) */
  $('#box5').click(function() {
    $('#box5').animate({height: '300px', left: '50%'}, 200);
    setTimeout(function() {
      $('#box5').animate({height: '100px', left: '75%'}, 200);
    })
  })



  /* ACTIVITY 6: Show and hide the sidebar
   * Hint: Use the following: click, hasClass, removeClass, addClass, and an if-else clause */
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
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

  /* ACTIVITY 7: Make the sidebar links scroll to the correct area of the page
   * Can use scrollTop function after clicking
   * Or, for smooth scrolling, can use the animate function which takes in two parameters - one for the function, and one for the time it animates over */

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

  /* Extra Challenge:
   * Implement the left and right buttons of the carousel:
   * Hint: use #carousel-next
   * pseudo code:
   * When the #carousel-next button is clicked
   * get the number of pixels and add 960
   * 
   * Google jQuery functions! */

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
