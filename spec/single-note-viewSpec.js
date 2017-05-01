function testSingleNoteSpec() {
  var note = new Note();
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnNoteHTML().includes("<div id='0'>I love quotes!</div>"))
};

testSingleNoteSpec();

function testNoteModelObjectId() {
  var note = new Note();
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnNoteHTML().includes("<div id='0'>I love quotes!</div>"))
  var singleNoteView2 = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnNoteHTML().includes("<div id='1'>I love quotes!</div>"))
}
