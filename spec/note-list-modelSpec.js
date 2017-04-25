(function(exports) {
  function testNoteListToInclueEmptyArray(){
    var list = new NoteList();

    if(list.noteLog.length !== 0) {
      throw new Error("Error, note log does not exist");
    }
  }

  testNoteListToInclueEmptyArray();
  })(this);

  (function(exports) {
    function testNoteLogIncludeNote(){
      var list = new NoteList();
      list.createNote("I love quotes!");

      if (list.getnoteLog()!== "I love quotes!") {
        throw new Error("Error, noteLog does not include all saved notes!");
      }
    }

testNoteLogIncludeNote();
})(this);
