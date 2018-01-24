import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
  model(param){
    // return get(this, 'store').query('student', {
    //   name: param.student  
    // }).then((item) => {
    //     return item;
    //   }).catch(() => {
    //   });
    return get(this, 'store').peekRecord('student', param.student_id)
      // .then((item) => {
      //   debugger
      //   return item;
      // }).catch(() => {
      //   debugger
      // })
  }
});

// api/stundets?name=Well