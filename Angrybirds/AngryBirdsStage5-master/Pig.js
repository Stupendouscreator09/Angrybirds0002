class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 225;

  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed <3 ){
      super.display();
    }
    else{
      AudioWorkletNode.remove(world,this.body);
      PushManager();
      this.Visiblity = this.Visiblity -5;
      thint(225,this.Visiblity);
      this.image(this.image,this.body.position.x,this.body.position.y,50,50);
      PopStateEvent();
    }

  }
};