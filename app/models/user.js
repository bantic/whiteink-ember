import DS from 'ember-data';

var User = DS.Model.extend({

  email: DS.attr('string'),

  // this is to log the user's current path
  // the user will be redirected to this path
  // after logging in. This should also work across devices.
  currentPath: DS.attr('string'),
  documents: DS.hasMany('document', {async: true})

});

User.reopenClass({
  FIXTURES:[{
    id: '1',
    email: 'test@test.com',
    documents: ['1']
  }]
});

export default User;
