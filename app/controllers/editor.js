import Ember from 'ember';

export default Ember.ObjectController.extend({

  willAddNote: false,

  editableDraftLength: Ember.computed.alias('editableDraft.text.length'),

  actions: {
    addNote: function(noteText) {
          var draftIndex = this.get('editableDraftLength'),
          note = this.store.createRecord('note', {
            text: noteText,
            draftIndex: draftIndex
          });
      this.get('editableDraft.notes').pushObject(note);
    }
  }

});
