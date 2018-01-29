import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | students/create');

test('create new student', function(assert) {
  visit('/students/create');

  //visitar a rota de criar student
  //preencher todos os campos
  //criar
 

  fillIn('.form-control-student-view-name', 'Thi')
  fillIn('.form-control-student-view-registration', '12345')
  fillIn('.form-control-student-view-phone', '11973653782')
  fillIn('.form-control-student-view-email','thi@thi.com.br')
  click('.student-view-btn-send')

  // pauseTest();

  andThen(function() {
    assert.equal(currentURL(), '/students');
  })
});
