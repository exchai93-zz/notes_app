(function(exports) {
  function NoteListView(noteList){
    this.note = noteList;
  }

  NoteListView.prototype.getHTML = function () {
    allNotes = "";
    for(i = 0; i < this.note.noteLog.length; i++){
      allNotes += "<ul><li><div>" + this.note.noteLog[i] + "</div></li></ul></br>"
    }
    return allNotes;
  };

  exports.NoteListView = NoteListView;

}) (this);
