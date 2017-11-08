"use strict";

$.getJSON("named-colors.json", (colors) => {
  for (let key in colors) {
    let newButton = `<button class="color-button" data-color-hex="${colors[key]}">${key}</button>`;
    $("#main-content").append(newButton);
  };
});

$("#main-content").on("click", (e) => {
  e.stopPropagation();
  console.log($(e.target).data("color-hex"));
  /* $("html").css("background-color", $(e.target).data("color-hex")); */
  $("#main-content").animate({"background-color" : `${$(e.target).data("color-hex")}`}, 750);  
});
