var $ = require('jquery');

var css = require('../styles/main.css');

$(document).ready(function() {
  // add something to the screen
  $('#sign').append(
    "<h2>This is from src/scripts/main.js</h2>"
  );
});