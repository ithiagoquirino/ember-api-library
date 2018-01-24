import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  publisher: attr('string'),
  author: attr('string'),
  isbn: attr('string'),
  category: attr('string')
});
