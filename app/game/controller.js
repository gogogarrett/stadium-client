import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitAnswerAction(answer) {
      this.get('channel').push('submit_answer', answer)
    }
  }
})
