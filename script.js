let a=document.querySelectorAll("kbd");
a.forEach(i => {
    i.addEventListener("click",function(){
        var button_value=this.innerHTML;
        getsound(button_value);
        add_animation(button_value.toLowerCase());
    })
});


document.addEventListener("keypress",function(event)
{
    getsound(event.key);
    add_animation(event.key.toLowerCase());
})

function getsound(key)
{

        if(key == "A" || key =="a")
            {
                var audio=new Audio("sounds/clap.wav");
                audio.play();
            }

        if( key == "S" || key == "s")
           {
                var audio=new Audio("sounds/hihat.wav");
                audio.play();
            }
        
        if(key == "D" || key == "d")
           {
                var audio=new Audio("sounds/kick.wav");
                audio.play();
           }
            

        if(key == "f" || key == "F")
           {
                var audio=new Audio("sounds/openhat.wav");
                audio.play();
           }

        if(key == "g" || key == "G")
            {
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
            }

        if(key == "h" || key == "H")
            {
                var audio=new Audio("sounds/ride.wav");
                audio.play();
            }

        if(key == "j" || key == "J")
            {
                var audio=new Audio("sounds/snare.wav");
                audio.play();
            }

        if(key == "k" || key == "K")
            {
                var audio=new Audio("sounds/tom.wav");
                audio.play();
            }

        if(key == "l" || key == "L")
            {
                var audio=new Audio("sounds/tink.wav");
                audio.play();
            }
}

function add_animation(value)
{
    var active_button=document.querySelector("."+value);
    active_button.classList.add("play");
    setTimeout(function name(params) {
        active_button.classList.remove("play");
    },200);
}
