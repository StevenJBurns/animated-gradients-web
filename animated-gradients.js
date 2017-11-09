"use strict";

$.getJSON("named-colors.json")
  .then((colors) => {
    for (let key in colors) {
      let newButton = `<button class="color-button" data-color-hex="${colors[key]}">${key}</button>`;
      $("#main-content").append(newButton);
    }
    return colors;
  })
  .then((colors) => {
    let colorKeys = Object.keys(colors);
    let randomizedIndex = Math.floor(Math.random() * (colorKeys.length));
    let randomizedColor = colorKeys[randomizedIndex];    
    $("html").css("background-color", `${[randomizedColor]}`);
  });

$("#main-content").on("click", (e) => {
  e.stopPropagation();
  $("html").animate({"background-color" : `${$(e.target).data("color-hex")}`}, 750);  
});
