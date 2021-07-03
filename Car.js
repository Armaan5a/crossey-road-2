class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = random([650,750,850,1450,1550,1650,2250,2350,2450]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
    }
   
}


