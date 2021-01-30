class Drop
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			friction:0.1,
			
			}
		this.x=x;
		this.y=y;
		this.rain=Bodies.circle(this.x, this.y, 5, options)
		World.add(world, this.body);
	}
	display()
	{
			
			var droppos=this.rain.position;	
			push()
			rectMode(CENTER)
			ellipse(0,0,this.r, this.r);
			pop()
if(this.rain.position.y > height){
	Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
}
}
}