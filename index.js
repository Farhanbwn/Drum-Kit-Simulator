var numofbutton = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numofbutton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(Event){

    sound(Event.key);
    animation(Event.key);

});

function sound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML)
    }
}

function animation(ckey){
    var active = document.querySelector("."+ckey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    }, 50);
}



