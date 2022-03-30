const songDatabase = require("../3. Async Testing/SongDatabase");
const {
  addSongs,
  changeArtistName,
  getLongestSong,
  splitLongSongs,
} = require("../3. Async Testing/SongDatabaseHelpers");

describe("SongDatabase Tests", () => {
  // Connect the database with some songs
  beforeEach(() => {
    songDatabase.Connect();
    songDatabase.Insert("Song 1", "Artist 1", 2);
    songDatabase.Insert("Song 2", "Artist 2", 3);
    songDatabase.Insert("Song 3", "Artist 3", 4);
    songDatabase.Insert("Song 4", "Artist 2", 2);
    songDatabase.Insert("Song 5", "Artist 2", 1);
  });
  test("GetLongestSong Test", async () => {
    const song = await getLongestSong(songDatabase);
    expect(song.name).toBe("Song 3");
  });
});
