import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAnswerAction(score) {
      this.get('submitAnswerAction')(score)
    }
  }
})
