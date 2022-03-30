// Test Song Database

const Connect = require("./SongDatabasePrivate").Connect;
const {
  addSongs,
  changeArtistName,
  getLongestSong,
  splitLongSongs,
} = require("./SongDatabase");

describe("Test Methods Built On The Song Database", () => {
  // NOTE: Make sure you connect to the database before running these tests
  //       (See https://jestjs.io/docs/setup-teardown to see how to do this)
  //       When Working with an actual database, you will have to connect to it before running queries
  //       The Connect function is provided to emulate that
  // ALSO NOTE: The methods start out simple (see addSongs) but get more complicated,
  //            go at your own pace (or your group's pace) and don't worry if not all the methods get tested
  //            The goal is to practice writing and thinking about tests, so feel free to ask for help
});
