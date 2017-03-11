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
    // YOUR CODE HERE
  }, function() {
    // YOUR CODE HERE
  })


  /* ACTIVITY 2:
   * TIPS: Right now the #box2 div is not shifted, but there may be a class in the CSS file that would help you!
   * How do we add a class to an HTML element? Some functions you might want to use: toggleClass
   * Important: the id's characteristics always override any of the classes' characteristics (see this by trying to modify left) */
  $('#box2').click(function() {
    // YOUR CODE HERE
  })

  /* ACTIVITY 3:
   * TIPS: Alternatively, we don't have to use the same function as activity 2,
   * we can just use an if and else statement in Javascript. How would we add an remove a class in the same
   * manner as above?
   * TIPS: Some functions you might want to use: hasClass, removeClass, addClass, show, hide. */
  $('#box3').click(function() {
    // YOUR CODE HERE
  })

  /* ACTIVITY 4:
   * Combines some of the logic from the previous activities! 
   * TIPS: You can't see it right now, but there's a hidden box called #showbox4.
   * When you "hide" a box, we can't click on it anymore, so what can we do with this box to help us?
   * TIPS: You might want to use the functions: show, hide, css */
  $('#box4').click(function() {
    // YOUR CODE HERE
  })

  $('#showbox4').click(function() {
    // YOUR CODE HERE
  })

  /* ACTIVITY 5:
   *  TIPS: Use the animate function! It takes in two parameters, the first
   *  is the css to add, the second parameter is how long it takes to perform the transition
   *  BONUS: Use setTimeout to make events happen at different times
   *  using animate will override id characteristics (try modifying left!) */
  $('#box5').click(function() {
    // YOUR CODE HERE
  })



  /* ACTIVITY 6: Show and hide the sidebar
   * Hint: Use the following: click, hasClass, removeClass, addClass, and an if-else clause */
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      // YOUR CODE HERE
    } else {
      // YOUR CODE HERE

      // the following handles a bug with scrolling, don't worry about it
      setTimeout(function() {
      $("body").addClass("no-scroll");
      }, 300);
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      // YOUR CODE HERE
    }
  });

  /* ACTIVITY 7: Make the sidebar links scroll to the correct area of the page
   * Can use scrollTop function after clicking
   * Or, for smooth scrolling, can use the animate function which takes in two parameters - one for the function, and one for the time it animates over */

  $("#home-link").click(function() {
    // YOUR CODE HERE
  })

  $("#misc-link").click(function() {
    // YOUR CODE HERE
  })
  $("#dog-link").click(function() {
    // YOUR CODE HERE
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
    // YOUR CODE HERE
  });

  $("#carousel-prev").click(function() {
    // YOUR CODE HERE
  });
});
