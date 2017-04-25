function testSingleNoteSpec() {
  var note = new Note();
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnNoteHTML().includes("<div>I love quotes!</div>"))
};

testSingleNoteSpec();
