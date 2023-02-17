console.log('JS is running...');

// select all the placeholder images
let albumCovers = document.querySelectorAll('.audio img');


//play the audio
function playTrack() {
    // debugger;
    // find the right audio track and play it based on the dataset attribute
    let currentAudio = document.querySelector(`audio[data-trackref="${this.dataset.trackref}"]`);
    currentAudio.play();
}


// add the reactions (the event we want to listen for)
albumCovers.forEach(album => album.addEventListener('click', playTrack));
