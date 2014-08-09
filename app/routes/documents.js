import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var route = this;
    return this.store.findAll('document').then(function(document) {
      if (!document.get('length')) {
        var newDocument = route.store.createRecord('document', {title: 'homo faber'});
        route.transitionTo('editor', newDocument);
      }
    return document;
    });
  }

});
