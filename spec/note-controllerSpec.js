function testNoteController() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addNoteToIndex("Favourite drink: Seltzer");
  assert.isTrue(noteController.noteListView.getHTML().includes("<ul><li><div>Favourite drink: Sel</div></li></ul></br>"))
};

testNoteController();
