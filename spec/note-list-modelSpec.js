  function testNoteListToInclueEmptyArray(){
    var list = new NoteList();

    assert.isTrue(list.noteLog.length === 0);
  };

  testNoteListToInclueEmptyArray();

    function testNoteLogIncludeNote(){
      var list = new NoteList();
      list.createNote("I love quotes!");
      list.createNote("I love notes!");
      assert.isTrue(list.getnoteLog().includes("I love quotes! I love notes!"));
    };

testNoteLogIncludeNote();
