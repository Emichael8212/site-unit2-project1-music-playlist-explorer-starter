function outsideClick(e) {
    if (e.target === overlayHidden) {
        overlayHidden.style.display = 'none';
    }
}

const cardContainer = document.querySelector('.playlist-cards');
data.map(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item['playlist_photo']}" alt="imanmetame" class="playlist-image">
        <h2 class="playlist-title">${item['playlist_name']}</h2>
        <h3 class="creator-name">${item['playlist_author']}</h3>
        <div class="modal-overlook" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <i class="fa-regular fa-heart" id="likeWalker"></i> 
                <span class="likeCounter">${item['like-count']}</span>
            </div>
            <i class="fa-regular fa-trash-can delete-icon" title="Delete Playlist" class="delete-icon"></i>
        </div>
    `;
    
    
    cardContainer.appendChild(card);


    const deleteIcon = card.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();  
        card.remove();        
    });
});

const modalLookout = document.querySelectorAll('.card');
const overlayHidden = document.querySelector('.modal-overlay');

modalLookout.forEach((card, index) => {
    card.addEventListener('click', function(e) {
        const overlayImage = document.querySelector('.modal-image');
        const overlayPlayName = document.querySelector('.playlistName');
        const overlayPlayCreator = document.querySelector('.playlist-creator');
        const shuffleContainer = document.querySelector('.shuffle-content');

        const playlistData = data[index];
        if (!playlistData) return;

        overlayImage.src = playlistData.playlist_photo;
        overlayPlayName.textContent = playlistData.playlist_name;
        overlayPlayCreator.textContent = `Created by ${playlistData.playlist_author}`;

        shuffleContainer.innerHTML = '';

        playlistData.songs.forEach(song => {
            const hold = document.createElement('div');
            hold.className = 'hold';
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
                <div class="duration">
                    <div>${song.duration}</div>
                </div>
            `;
            shuffleContainer.appendChild(hold);
        });

        overlayHidden.style.display = 'block';

        
        const shuffleButton = document.querySelector('.shuffle-Btn');
        shuffleButton.addEventListener('click', () => {
            const songs = Array.from(shuffleContainer.children);
            songs.sort(() => Math.random() - 0.5);
            shuffleContainer.innerHTML = '';
            songs.forEach(song => shuffleContainer.appendChild(song));
        });
    });
});

window.addEventListener('click', outsideClick);

const heart = document.querySelectorAll('.modal-overlook');
const heartIncrease = document.querySelectorAll('.likeCounter');

for (let i = 0; i < heart.length; i++) {
    let liked = false;
    heart[i].addEventListener('click', function(e) {
        e.stopPropagation();
        let likeCount = parseInt(heartIncrease[i].textContent);
        if (!liked) {
            likeCount++;
            liked = true;
            heart[i].classList.remove('fa-regular');
            heart[i].classList.add('fa-solid', 'liked');
        } else {
            likeCount--;
            liked = false;
            heart[i].classList.remove('fa-solid', 'liked');
            heart[i].classList.add('fa-regular');
        }
        heartIncrease[i].textContent = likeCount;
    });
}


