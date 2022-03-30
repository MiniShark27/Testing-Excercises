const {
  addSongs,
  changeArtistName,
  getLongestSong,
  splitLongSongs,
} = require("./SongDatabaseHelpers");
const songDatabase = require("./SongDatabase");

function Demonstrations() {
  // Uncomment one of the demonstration functions below, then run the file to see the demo
  DemonstrateGetLongestSong();
  DemonstrateChangeArtistName();
  DemonstrateAddSongs();
  DemonstrateSplitLongSongs();
  DemonstrateSongDBMethods();
}
Demonstrations();

// Demonstrates how the getLongestSong function is called and its standard output
async function DemonstrateGetLongestSong() {
  console.log("Running Demonstration of getLongestSong");

  await songDatabase.Connect();
  await songDatabase.Insert("song1", "artist1", 6);
  await songDatabase.Insert("song2", "artist1", 4);
  await songDatabase.Insert("song3", "artist1", 8);
  await songDatabase.Insert("song4", "artist1", 10);

  console.log(await songDatabase.SelectWhere(song => true));
  console.log(await getLongestSong());
}

// Demonstrates how the changeArtistName function is called and its standard output
async function DemonstrateChangeArtistName() {
  console.log("Running Demonstration of changeArtistName");

  await songDatabase.Connect();
  await songDatabase.Insert("song1", "artist1", 6);
  await songDatabase.Insert("song2", "artist1", 4);
  await songDatabase.Insert("song3", "artist2", 8);
  await songDatabase.Insert("song4", "artist1", 10);

  console.log(await songDatabase.SelectWhere(song => true));
  console.log(await changeArtistName("artist1", "artist3"));
  console.log(await songDatabase.SelectWhere(song => true));
}

// Demonstrates how the addSongs function is called and its standard output
async function DemonstrateAddSongs() {
  console.log("Running Demonstration of addSongs");

  await songDatabase.Connect();
  const songs = [
    { name: "song1", artist: "artist1", length: 6 },
    { name: "song2", artist: "artist1", length: 4 },
    { name: "song3", artist: "artist2", length: 8 },
    { name: "song4", artist: "artist1", length: 10 },
  ];

  console.log(await songDatabase.SelectWhere(song => true));
  console.log(await addSongs(songs));
  console.log(await songDatabase.SelectWhere(song => true));
}

// Demonstrates how the splitLongSongs is called and its standard output
async function DemonstrateSplitLongSongs() {
  console.log("Running Demonstration of splitLongSongs");

  await songDatabase.Connect();
  await songDatabase.Insert("song1", "artist1", 6);
  await songDatabase.Insert("song2", "artist1", 4);
  await songDatabase.Insert("song3", "artist2", 8);
  await songDatabase.Insert("song4", "artist1", 10);

  console.log(await songDatabase.SelectWhere(song => true));
  console.log(await splitLongSongs(4));
  console.log(await songDatabase.SelectWhere(song => true));
}

// Demonstrates how the methods in SongDatabase.js work
async function DemonstrateSongDBMethods() {
  console.log("Running Demonstration of SongDBMethods");

  await songDatabase.Connect();
  await songDatabase.Insert("Song1", "Artist1", 2.25);
  await songDatabase.Insert("Song2", "Artist2", 2.75);
  await songDatabase.Insert("Song3", "Artist3", 3.14);
  await songDatabase.Insert("Song4", "Artist4", 2.78);
  await songDatabase.Insert("Song5", "Artist5", 3.25);
  await songDatabase.Update("Song1", "Song1", "Artist1", 3);
  await songDatabase.Delete("Song2");

  console.log(await songDatabase.SelectWhere(song => song.length >= 3));
}
