const buttonStyleEvent = $('#createPlaylist');
let counter = 0;
let oneTime = 0;

function Playlist(title, type) {
    this.titre = title;
    this.genre = type;

    const artiste = document.getElementById('artiste');
    const musicTitle = document.getElementById('musicTitle');
    const musicLink = document.getElementById('linkMusic')

    this.createDivForPlaylist = function () {
        const createDiv = document.createElement('div');
        createDiv.id = "containerPlaylist";

        document.getElementsByClassName('container')[0].append(createDiv);
    }

    this.createPlaylist = function () {

        const createPlaylistDiv = document.createElement('div');
        createPlaylistDiv.style.width = "90%";
        createPlaylistDiv.id = `playlist${counter++}`;
        createPlaylistDiv.classList = "playlist";

        document.getElementById('containerPlaylist').append(createPlaylistDiv);
    }

    this.titlePlaylist = function () {
        counter.toString();
        const title = document.createElement('h1');
        title.innerHTML = this.titre;

        let playlist1 = document.getElementById(`playlist0`);


        const genre = document.createElement('h2');
        genre.innerHTML = "Genre de la playlist: " + document.getElementById('playlistType').value;

        playlist1.append(title, genre);

    }

    this.insidePlaylist = function () {
        let musicTit = document.createElement('p');
        musicTit.style.marginTop = "3%";
        musicTit.style.borderTop = "1px solid white";
        musicTit.innerHTML = "Titre: " + musicTitle.value;

        let musicArtist = document.createElement('p');
        musicArtist.innerHTML = 'Artiste: ' + artiste.value;

        let musicLi = document.createElement('a');
        musicLi.setAttribute('href', musicLink.value);
        musicLi.innerHTML = "Lien youtube";

        let playlist1 = document.getElementById(`playlist0`);

        playlist1.append(musicTit, musicArtist, musicLi);
    }

}

// both event listenner is only for the style button
buttonStyleEvent.mousedown(() => {
    buttonStyleEvent.addClass('styleButton');
})

buttonStyleEvent.mouseup(() => {
    buttonStyleEvent.removeClass('styleButton');
    let playlist = new Playlist(document.getElementById('playlistName').value, 'classique');
    if (oneTime === 0) {
        playlist.createDivForPlaylist();
        oneTime = 1;
    }
    playlist.createPlaylist();
    playlist.titlePlaylist();

    let addTitle = document.getElementById('addMusic');
    addTitle.addEventListener('click', function () {
        playlist.insidePlaylist();
    })

})