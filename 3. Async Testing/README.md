# Song Database Testing

### Goals:
  - Think about developing tests to test asynchronous functions
  - Give a chance to work on tests for functions that connect to a database (since they will likely have functions like this in their project)
  - Provide a more complex structure to test (since tests are often not isolated to a single function)

### File and Function Guide:
 - `SongDatabase.js`: Has the code that mocks a database. The methods inside should mirror SELECT/WHERE, INSERT, UPDATE, and DELETE SQL statements as well as a method to connect to the database. Inside are 5 main methods:
    - `Connect`: Used to connect to the database (Make sure this is called before your tests)
    - `Insert`: Inserts a song into the database
    - `SelectWhere`: Selects all songs that match the given filter
    - `Update`: Updates a song with a given name
    - `Delete`: Deletes a song from the database
 - `SongDatabaseHelper.js`: Has Helper methods built using the functions in the `SongDatabase.js` file. These are the methods students should write tests for. The functions go from simple to more complex, and students should not feel pressured to finish testing all of them thoroughly. Inside are 4 main methods:
     - `getLongestSong`: Finds the longest song in the database and returns it
     - `changeArtistName`: Finds all songs by a given artist, and updates the artist's name
     - `addSongs`: Adds songs from a list (instead of one at a time)
     - `splitLongSongs`: Splits songs longer than a given length into parts of at most that length