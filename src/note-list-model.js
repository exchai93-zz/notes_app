(function(exports) {
  function NoteList() {
    this.noteLog = [];

  }

  NoteList.prototype.getnoteLog = function () {
    for(i = 0; i < this.noteLog.length; i += 1) {
      return this.noteLog[i];
    }
  };

  NoteList.prototype.createNote = function(text) {
    this.noteLog.push(text);
  };

exports.NoteList = NoteList;
})(this);
