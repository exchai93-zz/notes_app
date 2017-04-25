  function testNoteQuoteToIncludeNoteLog() {
    var note = new Note();

    assert.isTrue(note.getText() === "I love quotes!");
  };

  testNoteQuoteToIncludeNoteLog();
