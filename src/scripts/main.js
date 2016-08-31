var $ = require('jquery');

var css = require('../styles/main.css');

$(document).ready(function() {
  // add something to the screen
  $('body').append(
    "<h2 id='yo'>Javascript is loaded and ran</h2>"
  );
  // use jquery magic
  $('#yo')
    .fadeOut(2000).fadeIn(2000)
    .fadeOut(2000).fadeIn(2000)
    .fadeOut(2000).fadeIn(2000)
});