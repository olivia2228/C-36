class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(100,20)

        var input=createInput("name")
        input.position(100,100)

        var button=createButton("Red Button")
        button.position(100,200)
    }
}