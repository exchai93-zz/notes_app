function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: Coke");
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite drink: Coke</div></li></ul>"));

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
  noteList.createNote("Favourite club: Fabric");
  noteList.createNote("Favourite sea animal: Jellyfish");
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite club: Fabric</div></li></ul>"));
  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite sea animal: Jellyfish</div></li></ul>"));
}

testViewManyNotes();
