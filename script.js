// Declare Variables
var rainEl = $(".r-img");
var rainTextEl = $(".rain-overlay");
var clicktracker = 0;

// Set Up Event Listeners
rainEl.on("mouseover", rainOverFunc); 
rainEl.on("mouseout", rainOutFunc); 
rainEl.on("click", rainClickFunc); 

// Set Up Event Functions
function rainOverFunc() {
  rainEl.attr(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Double-alaskan-rainbow.jpg/1200px-Double-alaskan-rainbow.jpg"
  );
  rainTextEl.text("Rainbow");
}

function rainOutFunc() {
  rainEl.attr(
    "src",
    "https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_640.png"
  );
  rainTextEl.text("Rain");
}


function rainClickFunc() {
  if (clicktracker == 0) {
    rainEl.attr(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROX2OiIwA0RtV0tRBe1_61uLxmzn_YByJ9zw&s"
    );
    rainTextEl.text("Click!");
    clicktracker = 1;
  } else {
    rainEl.attr(
      "src",
      "https://media.istockphoto.com/id/1080278810/vector/diagonal-rainbow-rectangular-lines-seamless-pattern.jpg?s=612x612&w=0&k=20&c=bNOYnn6RGqb36_dqI3iuTOM8Ec8nrF0zTQ6Pct61GVQ="
    );
    rainTextEl.text("Next Click!");
    clicktracker = 0;
  }
}
