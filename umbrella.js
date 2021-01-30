class Umbrella
{
	constructor(x,y)
	{
		var options={
			isStatic:true
			}

		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, 10, options)
		World.add(world, this.body);
		this.image=loadImage("images/Walking Frame/walking_1.png");
	}
	display()
	{
			
			var umbpos=this.body.position;	
			push()
			rectMode(CENTER)
			ellipse(0,0,10,20);
            pop()
            imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);		
	}

}