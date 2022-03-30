let songDatabase = undefined;

// Simulates sending a query to a database by creating an artificial delay
// Currently set to 1/10th of a second (the 100) but feel free to change it to make it faster or slower
function addSimulatedDelay(delay = 100) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

// Connects to the Db
async function Connect() {
  await addSimulatedDelay();
  songDatabase = {
    songs: {},
  };
}

// Inserts a song entry into the Db
async function Insert(name, artist, length) {
  await addSimulatedDelay();
  if (name in songDatabase.songs) return null;
  return (songDatabase.songs[name] = {
    name: name,
    artist: artist,
    length: length,
  });
}

// Selects all songs that match the given filter function
async function SelectWhere(f) {
  await addSimulatedDelay();
  return Object.values(songDatabase.songs).filter(f);
}

// Updates a song with a given name to have the new name
async function Update(name, newName, newArtist, newLength) {
  await addSimulatedDelay();
  if (!(name in songDatabase.songs)) return null;
  delete songDatabase.songs[name];
  return (songDatabase.songs[newName] = {
    name: newName,
    artist: newArtist,
    length: newLength,
  });
}

// Deletes the song with the given name
async function Delete(name) {
  await addSimulatedDelay();
  if (!(name in songDatabase.songs)) return null;
  return delete songDatabase.songs[name];
}

module.exports = {
  Connect,
  Insert,
  SelectWhere,
  Update,
  Delete,
};
