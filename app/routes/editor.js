import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('document', params.document_id);
  },

  afterModel: function(model) {
    var route = this;
    return model.get('drafts').then(function(drafts){
      if (!drafts.get('length')) {
        model.get('drafts').pushObject(
          route.store.createRecord('draft')
        );
      }
    });
  }

});
