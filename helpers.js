function makeWordShorterMaybe (word, count) {
  if (count > 2) {
    return word;
  } else {
    return word.split(' ')[0];
  }
};

function makeBubble (text, size) {
  let label = makeWordShorterMaybe(text, size);
  let randomColor = d3Colors[Math.floor(Math.random() * d3Colors.length)];
  let growthFactor = Math.sqrt(size) * 50;

  return `<div class='bubble-wrapper'>
            <div class='label-text'>
              ${label}
            </div>
            <div class='bubble'
               style='width: ${growthFactor}px;
                      height: ${growthFactor}px;
                      background-color: ${randomColor}'>
            </div>
          </div>`
};
