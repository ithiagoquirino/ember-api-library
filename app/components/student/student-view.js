import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({
  name: undefined,
  registration: undefined,
  phone: undefined,
  email: undefined,
  studentId: undefined,

  didReceiveAttrs(){
    this._super(...arguments);

    set(this, 'name', get(this, 'student.name'));
    set(this, 'registration', get(this, 'student.registration'));
    set(this, 'phone', get(this, 'student.phone'));
    set(this, 'email', get(this, 'student.email'));
    set(this, 'studentId', get(this, 'student.id'));
  },

  actions: {
    send(studentId){
      // get(this, 'store').findRecord('student', studentId)
      //   .then((student) => {
        // let student = get(this, 'student');
        let student = this.store.findRecord('student', studentId);

        student.set('name', get(this, 'name'));
        student.set('registration', get(this, 'registration'));
        student.set('phone', get(this, 'phone'));
        student.set('email', get(this, 'email'));
        student.save()
        // }).catch(() => {

        // });
    }
  }
});
