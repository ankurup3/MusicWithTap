window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");

    const visual = document.querySelector('.visual');
    const colors = [
        "#F3F9D2",
        "#89ee0d",
        "#C0D684",
        "#3D0B37",
        "#df65ac",
        "#0A2342"
    ];


    console.log(sounds);


    //sounds
    pads.forEach( (pad, index) =>{
        pad.addEventListener('click', function() {
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });



    //function for bubbles
    const createBubbles = (index) => { 
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    };

});

