(function(exports) {
  function NoteListView(noteList){
    this.note = noteList;
  }

  NoteListView.prototype.getHTML = function () {
    allNotes = "";
    for(i = 0; i < this.note.noteLog.length; i++){
      allNotes += "<ul><li><div>" + this.note.noteLog[i].substring(0,20) + "</div></li></ul></br>"
    }
    return allNotes;
  };

  exports.NoteListView = NoteListView;

}) (this);
