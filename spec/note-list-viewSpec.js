function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: Coke");
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite drink: Cok</div></li></ul>"));
};

testNoteListView();

function testViewNoNotes() {
  var noteList = new NoteList();
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes(""));
}

testViewNoNotes();

function testViewManyNotes() {
  var noteList = new NoteList();
  noteList.createNote("Favourite club: Fabr");
  noteList.createNote("Favourite sea animal");
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite club: Fabr</div></li></ul>"));
  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite sea animal</div></li></ul>"));
}

testViewManyNotes();
