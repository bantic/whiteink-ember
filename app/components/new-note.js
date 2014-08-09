import Ember from 'ember';

import {actionOnKey} from 'whiteink/helpers/keyboard-actions';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: ['new-note-field'],
  attributeBindings: ['contenteditable'],
  contenteditable: 'true',

  didInsertElement: function() {
    this.$().focus();
  },

  submitNote: function() {
    var component = this;
    actionOnKey(13, function() {
      var newNote = component.$().text();
      component.sendAction('action', newNote);
      component.toggleProperty('parentView.willAddNote');
    });
  }.on('keyDown')

});
