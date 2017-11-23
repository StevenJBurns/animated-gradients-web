"use strict";

let selectedColor, selectedColorHex;

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
    selectedColor = randomizedColor;    
    $("html").css("background-color", `${[randomizedColor]}`);
    $("#current-color-label").html(`Current Color \&bull; ${selectedColorHex} \&bull; ${selectedColor}`);    
  });

$("#main-content").on("click", (e) => {
  selectedColor = $(e.target).html();
  selectedColorHex = $(e.target).data("color-hex")

  e.stopPropagation();
  $("#current-color-label").html(`Current Color \&bull; ${selectedColorHex} \&bull; ${selectedColor}`);
  $("html").animate({"background-color" : `${selectedColorHex}`}, 500);
});
