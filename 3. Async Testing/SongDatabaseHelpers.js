const songDatabase = require("./SongDatabase");

// Note: These methods go from simple to more complex to test
// This part will be the remainder of the period, and does not need to be completed
// Try to test the following methods as thoroughly as possible

// Finds the longest song in the database
// If no songs are found, returns null
async function getLongestSong() {
  const songs = await songDatabase.SelectWhere(song => true);
  return songs.reduce((a, b) => (a.length > b.length ? a : b));
}

// Changes the name of an artist to a new name for all songs by that artist
async function changeArtistName(artist, newArtist) {
  const songs = await songDatabase.SelectWhere(song => song.artist === artist);
  songs.forEach(song =>
    songDatabase.Update(song.name, song.name, newArtist, song.length)
  );
  return songs.length;
}

// Add all the songs in the list songs to the database
// If any can't be added, none are added, and false is returned
// If all are added, true is returned
// Song list is in the format: [{name: "", artist: "", length: }, ...]
async function addSongs(songs) {
  const names = songs.map(song => song.name);
  const existingSongs = await songDatabase.SelectWhere(song =>
    names.includes(song.name)
  );
  if (existingSongs.length === songs.length) return false;
  songs.forEach(song =>
    songDatabase.Insert(song.name, song.artist, song.length)
  );
  return true;
}

// Split songs longer than a given value into parts of length at most that value
// Label the split parts as (name)_part_1, (name)_part_2, ...
// The Last Part is the remainder and is labeled as (name)_part_n
// Add all the parts to the database
// Remove the original song
// Return a map of the original song name to the list of split song objects (The original song is not included)
async function splitLongSongs(longerThan) {
  const songs = await songDatabase.SelectWhere(
    song => song.length > longerThan
  );
  const splitSongs = songs.map(song => {
    const parts = [];
    for (let i = 0; i < song.length; i += longerThan) {
      const partName = `${song.name}_part_${parts.length + 1}`;
      const len = song.length - i > longerThan ? longerThan : song.length - i;
      parts.push(songDatabase.Insert(partName, song.artist, len));
    }
    songDatabase.Delete(song.name);
    const res = {};
    res[song.name] = Promise.all(parts);
    return res;
  });
  for (let i = 0; i < splitSongs.length; i++) {
    for (let key in splitSongs[i]) {
      splitSongs[i][key] = await splitSongs[i][key];
    }
  }
  return Object.assign({}, ...splitSongs);
}

module.exports = { addSongs, changeArtistName, getLongestSong, splitLongSongs };
