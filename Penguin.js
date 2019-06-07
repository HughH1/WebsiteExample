class Penguin extends Animal {

    constructor(dance){
        super();
        this.dance = dance;
    }

    move(){
        console.log("Flap flap flap");
    }

    doDance(){
        console.log(dance);
    }
}