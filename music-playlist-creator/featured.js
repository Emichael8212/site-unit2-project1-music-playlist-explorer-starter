
const holler = document.getElementById('together');
const playImage = document.querySelector('.feature-image');
const playlistName = document.querySelector('.goat');
const playlistCreator = document.querySelector('.creator');
const shuffleContent = document.querySelector('.shuffle-content');
const featuredBtn = document.querySelectorAll('.react-btn')[0]; // Featured button

// Helper function to pick a random playlist
function getRandomPlaylist() {
    console.log(data)
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];

}

// Function to display playlist data in modal
function showPlaylistModal(data) {
    console
    playImage.src = data.playlist_photo;
    playlistName.textContent = data.playlist_name;
    playlistCreator.textContent = data.playlist_creator;

    shuffleContent.innerHTML = ''; // Clear old songs

    data.songs.forEach(song => {
            const hold = document.createElement('div');
            hold.className = 'shuffle-content';
            hold.innerHTML = `
                <div class="holder">
                    <div class="shuffle-img-content">
                        <img class="modal-image-shuffle" src="${'https://picsum.photos/200'}" alt="">
                    </div>
                    <div class="shuffle-text">
                        <h4><span>${song.musicTitle}</span></h4>
                        <span>${song.singer}</span>
                        <span>${song.album}</span>
                    </div>
                </div>
                <div class="duration">${song.duration}</div>
            `;
            shuffleContent.appendChild(hold);
        });

    
}







// Load random playlist on page refresh
window.addEventListener('DOMContentLoaded', () => {
    const randomPlaylist = getRandomPlaylist();
    showPlaylistModal(randomPlaylist);
});

// Load new random playlist when "Featured" is clicked
featuredBtn.addEventListener('click', () => {
    const randomPlaylist = getRandomPlaylist();
    showPlaylistModal(randomPlaylist);
});
