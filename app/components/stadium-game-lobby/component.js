import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stadium-game-lobby'],
  click() {
    this.get('requestGameAction')()
  }
});
