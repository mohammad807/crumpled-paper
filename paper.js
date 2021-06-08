class paper
{
    constructor(x, y, r)
{
    var options={
        isStatic:false,
        resitution:0.3,
        friction:0,
        density:1.2
        
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2,options)
    world.add(world, this.body);
    }
    display()
        {
             var paperpose=this.body.position;

             Push()
             Translate(paperpose.x, paperpose.y);
             rectMode(CENTER);
             //strokeWeight(4);
             fill(255, 0, 255)
             ImageMode(CENTER);
             image(this.image, 0,0,this.r, this.r)
             //ellipse(0,0,this.r, this.r);
             Pop()

        }
    }