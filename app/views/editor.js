import Ember from 'ember';
import {keysPressed} from 'whiteink/helpers/keyboard-actions';
import {setCaretToEndInContenteditable} from 'whiteink/helpers/caret-position';

export default Ember.View.extend({

  focusEditableDraft: function() {
    var controller = this.controller;
    if (!controller.get('willAddNote')) {
      Ember.run.schedule('afterRender', function() {
        setCaretToEndInContenteditable('editable-draft');
      });
    }
  }.observes('controller.willAddNote'),

  newNoteShortcut: function() {
    var controller = this.controller;
    if (keysPressed([9, 220])) {
      controller.toggleProperty('willAddNote');
    }
  }.on('keyDown'),

  disableArrowKeys:function() {
    console.log('You pressed: '+event.keyCode);
    keysPressed([37, 38, 39, 40]);
  }.on('keyDown')

});
