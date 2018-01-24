import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  name: attr('string'),
  registration: attr('string'),
  phone: attr('string'),
  email: attr('string')
});
