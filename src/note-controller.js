(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.addNoteToIndex = function(text) {
    this.noteListView.noteList.createNote(text);
    document.getElementById('app').innerHTML = this.noteListView.getHTML();
  }

exports.NoteController = NoteController;
})(this);
