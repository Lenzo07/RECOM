function playHoverAudio(){
    const aud = document.getElementById("hoverAudio");
    aud.play();
}
function pauseHoverAudio(){
    const aud = document.getElementById("hoverAudio");
    aud.pause();
}
function playClickedAudio(){
    const aud = document.getElementById("clickedAudio");
    aud.play();
}
function clicked(id){
    const audio = document.getElementById('clickedAudio');
    audio.play();
    audio.onended = function(){
        if(id == "one"){
            window.location.href = 'recommend.html';
        }
        // Add more conditions as needed for other divs
    };
} 

