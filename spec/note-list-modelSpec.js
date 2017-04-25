  function testNoteListToInclueEmptyArray(){
    var list = new NoteList();

    assert.isTrue(list.noteLog.length === 0);
  };

  testNoteListToInclueEmptyArray();

    function testNoteLogIncludeNote(){
      var list = new NoteList();
      list.createNote("I love quotes!");

      assert.isTrue(list.getnoteLog().includes("I love quotes!"));
    };

testNoteLogIncludeNote();
