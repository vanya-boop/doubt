const { fabric } = require("./fabric");

var canvas = new fabric.Canvas ('myCanvas')

ball_y=0;
ball_x=0;
hole_x=400;
hole_y=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.img.fromURL("golf-h.png", function(Img) {
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
            top:hole_y,
            left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Img.fromURL("ball.png", function(Img) {
    ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
    top:ball_y
	left:ball_x
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	canvas.remove(ball_obj);
	
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!!!!";
	document.getElementById("myCanvas").style.borderColor="red"
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

