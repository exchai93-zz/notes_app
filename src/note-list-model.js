(function(exports) {
  function NoteList() {
    this.noteLog = [];

  }

  NoteList.prototype.getnoteLog = function () {
    allNotes =  "";
    for(i = 0; i < this.noteLog.length; i++) {
      allNotes += this.noteLog[i] + " ";
    }
    return allNotes;
  };

  NoteList.prototype.createNote = function(text) {
    this.noteLog.push(text);
  };

exports.NoteList = NoteList;
})(this);
