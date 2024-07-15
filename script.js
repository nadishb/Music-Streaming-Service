
const songs = [
    { title: "Song 1", src: "Mere Mehboob Mere Sanam_192(PagalWorld.com.sb).mp3" },
    { title: "Song 2", src: "O Mahi O Mahi_192(PagalWorld.com.sb).mp3" },
    { title: "Song 3", src: "Soni Soni_192(PagalWorld.com.sb).mp3" },
];

const songList = document.getElementById('songList');
const nowPlaying = document.getElementById('nowPlaying');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
        audioSource.src = song.src;
        nowPlaying.textContent = `Now Playing: ${song.title}`;
        audioPlayer.load();
        audioPlayer.play();
    });
    songList.appendChild(li);
});
