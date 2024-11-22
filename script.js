var rainEl = $(".r-img");
var rainTextEl = $(".rain-overlay");

rainEl.on("mouseover", rainOverFunc);
rainEl.on("mouseout", rainOutFunc);

function rainOverFunc(){
  rainEl.attr("src","images/rainbow.jpg") 
  rainTextEl.text("Rainbow")
}

function rainOutFunc(){
  rainEl.attr("src","images/rain.avif")
  rainTextEl.text("Rain")
}
