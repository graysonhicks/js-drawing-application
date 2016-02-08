// problem:  no user interaction causes no change to application
// solution:  when user interacts, cause changes appropriately

var color = $(".selected").css("background-color");
var lastEvent;

// When clicking on control list items
$(".controls").on("click", "li", function () {
	//deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});

	
// when 'new color' button clicked
$("#revealColorSelect").click(function () {	
	//show or hide colorSelect sliders
	changeColor();
	$("#colorSelect").slideToggle();
});

//update the newColor span
function changeColor() {
	var r = $("#red").val();				//will get and set the rgb 0-255 value 
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r +", "+ g +", "+ b +")"); //this changes the background color of the #newColor by calling the r, g,b variables set above
}
	
//when color sliders change
$("input[type=range]").on("input", changeColor);		//calls color changeColor function set above when slider is changed
	


//when addColor is pressed
$("#addNewColor").click(function () {
	//append color to control list ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//select new color
	$newColor.click();
});
	
var $canvas = $("canvas");	//this is the special necessary way of getting canvas element in HTML5 so we can use getContext method
var context = $canvas[0].getContext("2d");	//document.getElementbyTagName("canvas")[0] in JavaScript = $("canvas")[0] in jQuery
var mouseDown = false;
//on mouse events on the canvas
//draw lines
$canvas.mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function (e) {
	if (mouseDown) {
		
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.strokeStyle = color;
	context.stroke();
	lastEvent = e;
}
}).mouseup(function () {
	mouseDown = false;
}).mouseleave(function () {
	$canvas.mouseup();
});
	
	
	
	
	
	
	
	
	
	
	
	
	