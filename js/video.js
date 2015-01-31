
function initVideo(){
        console.info("Loaded.");

    var vid = document.getElementById("bgvid");
    var muteButton = document.getElementById("muteButton");
    
    muteButton.addEventListener("click", function() {
      vid.muted = !vid.muted;
      var  muteIcon = document.getElementById("muteIcon");
       muteIcon.classList.toggle("fa-volume-off");
       muteIcon.classList.toggle("fa-volume-up");

    });
    
  

    
}

function mute(mute){
    vid.muted = mute;
}

window.onload = initVideo;
