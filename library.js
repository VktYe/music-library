const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
   

  printPlaylists: function() {
    for (const key in this.playlists) { // iterates over keys in playlists
      const playlist = this.playlists[key]; // assing a variable playlist to get to its value
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
          
  printTracks: function() {

    for (const key in this.tracks) { // go through the keys in object tracks
      const track = this.tracks[key]; // assing a track var to get values of tracks
      console.log(`${key}: ${track.name} ${track.artist} (${track.album})`);
    }
  },


  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} ${track.artist} (${track.album})`);
     
    }
     
  },

  addTrackToPlaylist: function(trackId, playlistId) {
  
    const track = this.tracks[trackId];
       
    // go throgh the playlists to the tracks and push trackId to the tracks array
    const playlist = this.playlists[playlistId];
       
    playlist.tracks.push(track.id);
     
  },


  addTrack: function(name, artist, album) {
    const trackId = generateUid();
    const track = {
    
      id: trackId,
      name: name,
      artist: artist,
      album: album
    
    };
    this.tracks[trackId] = track;
  },

  addPlaylist: function(name) {
    const playlistId = generateUid();
    const playlist = {
      id: playlistId,
      name: name,
      tracks: []
    };
    this.playlists[playlistId] = playlist;
  }
};
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

library.printPlaylists();
console.log("------");

library.printTracks();
console.log("------");
     
library.printPlaylist("p01");
console.log("------");

library.addTrackToPlaylist("t01", "p02");
console.log(library.playlists.p02.tracks);

console.log("------");
library.addTrack("Borderline", "Tame Impala", "The Slow Rush");

console.log(library.tracks);
console.log("------");

library.addPlaylist("Study music");
console.log(library.playlists);

// 8
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// };