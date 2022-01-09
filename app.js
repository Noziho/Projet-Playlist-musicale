const buttonStyleEvent = $('#createPlaylist');
let counter = 0;
let oneTime = 0;
let counterIdButton = 1;

function Playlist(title, type) {
    this.titre = title;
    this.genre = type;

    const artiste = document.getElementById('artiste');
    const musicTitle = document.getElementById('musicTitle');
    const musicLink = document.getElementById('linkMusic');

    // a function for create a containenr for all playlist
    this.createDivForPlaylist = function () {
        const createDiv = document.createElement('div');
        createDiv.id = "containerPlaylist";

        document.getElementsByClassName('container')[0].append(createDiv);
    }
    // a function for create a playlist with div.
    this.createPlaylist = function () {

        const createPlaylistDiv = document.createElement('div');
        createPlaylistDiv.style.width = "90%";
        createPlaylistDiv.id = `playlist${counter++}`;
        createPlaylistDiv.classList = "playlist";

        document.getElementById('containerPlaylist').append(createPlaylistDiv);
    }
    //A function for create the header of playlist, title of playlist + type of playlist music;
    this.titlePlaylist = function () {
        counter.toString();
        const title = document.createElement('h1');
        title.style.fontSize = "5rem";
        title.style.color = "#1ed760";
        title.innerHTML = this.titre;

        let playlist1 = document.getElementById(`playlist0`);


        const genre = document.createElement('h2');
        genre.innerHTML = "Genre de la playlist: " + document.getElementById('playlistType').value;

        playlist1.append(title, genre);

    }
    // function for create every element for printing the music added by the user.
    this.insidePlaylist = function () {
        let musicTit = document.createElement('p');
        musicTit.style.marginTop = "3%";
        musicTit.style.borderTop = "1px solid white";
        musicTit.innerHTML = "Titre: " + musicTitle.value;

        let musicArtist = document.createElement('p');
        musicArtist.innerHTML = 'Artiste: ' + artiste.value;

        let musicLi = document.createElement('a');
        musicLi.setAttribute('href', musicLink.value);
        musicLi.setAttribute('target', '_blank');
        musicLi.innerHTML = "Lien youtube";

        let playlist1 = document.getElementById(`playlist0`);

        playlist1.append(musicTit, musicArtist, musicLi);
    }

}

// both event listenner is only for the style button.

buttonStyleEvent.mousedown(() => {
    buttonStyleEvent.addClass('styleButton');
})

buttonStyleEvent.mouseup(() => {
    buttonStyleEvent.removeClass('styleButton');
    //create a new playlist when the button pressed.
    let playlist = new Playlist(document.getElementById('playlistName').value);
    if (oneTime === 0) {
        playlist.createDivForPlaylist();
        oneTime = 1;
    }
    playlist.createPlaylist();
    playlist.titlePlaylist();

    // an event listenner for add a music on the playlist user.
    let addTitle = document.getElementById('addMusic');
    addTitle.addEventListener('click', function () {
        playlist.insidePlaylist();
    })

    counterIdButton +=2;
    let editButton = document.createElement('button');
    editButton.innerHTML = "Modifiez votre playlist";
    editButton.id = counterIdButton.toString();
    editButton.classList = "editButton";
    console.log(editButton);

    editButton.addEventListener('click', function () {
        console.log('oui');
    })

    document.querySelector('.playlist').append(editButton);
})