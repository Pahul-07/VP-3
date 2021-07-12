class Food{
    constructor(){
        this.burger=loadImage("images/pizza.png")
        this.feedTime
    }

    buttons(){
        this.button1= createButton("Feed him Pizza");
        this.button1.position(800,80);

        this.button2= createButton("Add Pizza");
        this.button2.position(930,80);

       if(food>0){   
           this.button1.mousePressed(()=>{
               food--
               writeStock(food);
            })
       }
        this.button2.mousePressed(()=>{
            food++
            writeStock(food)
        })    
    }

    milkImg(){
        var newX=0;
        for(var i=0; i<food; i++){
            image(this.burger, newX, 200,50,50);
            newX= newX+50
        }
    }

    getfeedTime(){
        database.ref('feedtime').on("value",(data)=>{
            this.feedTime= data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    garden(){
        background(gardenImg);
    }

    painting(){
        background(paintingImg);
    }

    bedroom(){
        background(bedroomImg);
    }

}

