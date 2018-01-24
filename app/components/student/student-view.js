import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  name: undefined,
  registration: undefined,
  phone: undefined,
  email: undefined,
  studentId: undefined,

  didReceiveAttrs(){
    this._super(...arguments);

    // set(this, 'name', get(this, 'student.name'));
    // set(this, 'registration', get(this, 'student.registration'));
    // set(this, 'phone', get(this, 'student.phone'));
    // set(this, 'email', get(this, 'student.email'));
    // set(this, 'studentId', get(this, 'student.id'));
    set(this, 'name', get(this, 'student.name'));
    set(this, 'registration', get(this, 'student.registration'));
    set(this, 'phone', get(this, 'student.phone'));
    set(this, 'email', get(this, 'student.email'));
    set(this, 'studentId', get(this, 'student.id'));
  },

  actions: {
    send(studentId) {
      let student = get(this, 'store').peekRecord('student', studentId);
      student.set('name', get(this, 'name'));
      student.set('registration', get(this, 'registration'));
      student.set('phone', get(this, 'phone'));
      student.set('email', get(this, 'email'));
      student.save();
    }
  }
});