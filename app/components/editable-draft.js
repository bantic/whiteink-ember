import Ember from 'ember';
import {setCaretToEndInContenteditable} from 'whiteink/helpers/caret-position';

export default Ember.Component.extend({

  tagName: 'p',
  classNames: 'editable-draft'.w(),
  attributeBindings: 'contenteditable'.w(),
  contenteditable: 'true',

  didInsertElement: function() {
    setCaretToEndInContenteditable('editable-draft');
  }

});
