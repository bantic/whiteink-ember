import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WhiteinkENV.locationType
});

Router.map(function() {
  this.resource('documents', {path: '/'});
  this.resource('editor', { path: 'editor/:document_id' });
});

export default Router;
