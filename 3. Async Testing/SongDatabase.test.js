// Test Song Database

const songDatabase = require("./SongDatabase");
const {
  addSongs,
  changeArtistName,
  getLongestSong,
  splitLongSongs,
} = require("./SongDatabaseHelpers");

describe("Test Methods Built On The Song Database", () => {
  // NOTE: Make sure you connect to the database before running these tests
  //       (See https://jestjs.io/docs/setup-teardown to see how to do this)
  //       When Working with an actual database, you will have to connect to it before running queries
  //       The Connect function is provided to emulate that
  // ALSO NOTE: The methods start out simple (see addSongs) but get more complicated,
  //            go at your own pace (or your group's pace) and don't worry if not all the methods get tested
  //            The goal is to practice writing and thinking about tests, so feel free to ask for help
  test("Empty Test (here as placeholder)", () => {
    expect(true).toBe(true);
  });
});

/*
  Exercise 3 (Do Above):
    Brainstorm and write tests that test the methods in SongDatabaseHelpers.js
      Note: The methods go from simple to more complex, and don't worry if not all the methods get tested
    These Methods are asynchronous, so you will need to use async/await to test them
    Should connect to the database before running each test
    Remember to run `npm test` to verify they pass

    P.S. You can assume the methods in SongDatabase.js are working correctly (and that they don't need to be tested)
*/