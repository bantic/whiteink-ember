import Ember from 'ember';
import DS from 'ember-data';

var Document = DS.Model.extend({

  title: DS.attr('string'),
  editableDraft: Ember.computed.alias('this.drafts.lastObject'),
  reviewableDrafts: function() {
    return this.get('drafts').slice(0,-1);
  }.property('drafts.[]'),

  user: DS.belongsTo('user', {async: true}),
  drafts: DS.hasMany('draft', {async: true}),

});

Document.reopenClass({
  FIXTURES: [{
    id: "1",
    user: '1',
    title: "Gregor Samsa & the Bug",
    drafts: ["1","2"]
  },
  {
    id: "2",
    user: '1',
    title: "The Castle (dummy document)"
  }]
});

export default Document;
