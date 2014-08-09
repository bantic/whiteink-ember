import DS from 'ember-data';

var Note = DS.Model.extend({

  text: DS.attr('string'),
  draft: DS.belongsTo('draft', {async: true}),
  draftIndex: DS.attr('integer')

});

Note.reopenClass({
  FIXTURES: [
    {
      id: "1",
      draft: "1",
      text: 'add episode of business endeavours'
    },
    {
      id: "2",
      draft: "1",
      text: 'novel idea: a man, K, gets arrested & prosecuted by a remote, inaccessible authority'
    },
    {
      id: "3",
      draft: "1",
      text: 'consequences of being unable to provide for family'
    },
    {
      id: "4",
      draft: "2",
      text: 'find synonyms for “gigantic”'
    },
    {
      id: "5",
      draft: "2",
      text: 'change character to female named Gretchen Samsa'
    },
    {
      id: "6",
      draft: "2",
      text: 'from bug to caterpillar?'
    },
    {
      id: "7",
      draft: "2",
      text: 'death by thrown apple? / Oedipus complex?'
    },
    {
      id: "8",
      draft: "2",
      text: 'change job to business executive'
    },
    {
      id: "9",
      draft: "2",
      text: 'add cat to story.'
    },
    {
      id: "10",
      draft: "2",
      text: '2nd metamorphosis -> sloth'
    }
  ]
});

export default Note;
