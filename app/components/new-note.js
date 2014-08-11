import Ember from 'ember';
import {actionOnKey} from 'whiteink/helpers/keyboard-actions';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: 'new-note note'.w(),
  attributeBindings: ['contenteditable'],
  contenteditable: 'true',

  didInsertElement: function() {
    // A hack to move the cursor on
    // a contenteditable element w/
    // text align: right; to the
    // right - DH
    this.$().focus().html('&nbsp;');
  },

  submitNote: function() {
    var component = this;
    actionOnKey(13, function() {
      // .slice removes the '&nbsp;'
      var newNote = component.$().text().slice(0, -1);
      if (newNote.length) {
        component.sendAction('action', newNote);
        component.toggleProperty('parentView.willAddNote');
      }
    });
  }.on('keyDown')

});
