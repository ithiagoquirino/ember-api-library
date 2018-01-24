import EmberObject from '@ember/object';
import ControllerStudentsMixin from 'library/mixins/controller-students';
import { module, test } from 'qunit';

module('Unit | Mixin | controller students');

// Replace this with your real tests.
test('it works', function(assert) {
  let ControllerStudentsObject = EmberObject.extend(ControllerStudentsMixin);
  let subject = ControllerStudentsObject.create();
  assert.ok(subject);
});
