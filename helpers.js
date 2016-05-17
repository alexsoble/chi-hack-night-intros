function makeWordShorterMaybe (word, count) {
  if (count > 2) {
    return word;
  } else {
    return word.split(' ')[0];
  }
};

function makeBubble (text, size) {
  var label = makeWordShorterMaybe(text, size);
  var randomColor = d3Colors[Math.floor(Math.random() * d3Colors.length)];
  var growthFactor = String(Math.sqrt(size) * 50);

  var label = "<div class='label-text'>" + label + "</div>";

  var bubble = "<div class='bubble' style='width: " + growthFactor + "px;" +
                      "height: " + growthFactor + "px;" +
                      "background-color: " + randomColor + "'></div>";

  return "<div class='bubble-wrapper'>" + label + bubble + "</div>";
};
