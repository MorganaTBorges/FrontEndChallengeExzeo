const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search songs.json and filter it

const searchSongs = async searchText => {
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
    const res = await fetch(url);
    const songs = await res.json(); 

    console.log(songs);
};

search.addEventListener('input', () => searchSongs(search.value));


