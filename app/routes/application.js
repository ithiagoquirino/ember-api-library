import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { hash } from 'rsvp';

export default Route.extend({
 model() {
   return hash({
     books: get(this, 'store').findAll('book'),
     students: get(this, 'store').findAll('student')
   });
 }
});