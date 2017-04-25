function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: Coke");
  var view = new NoteListView(noteList);

  assert.isTrue(view.getHTML().includes("<ul><li><div>Favourite drink: Coke</div></li></ul>"));

};

testNoteListView();
