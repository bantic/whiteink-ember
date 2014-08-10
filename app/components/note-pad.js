import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',
  classNames: 'note-pad',
  canAddNote: false,

  actions: {
    addNote: function(noteText) {this.sendAction('action', noteText);}
  }

});
