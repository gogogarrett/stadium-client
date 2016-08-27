import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stadium-game-lobby'],

  click() {
    this.set('isWaiting', true)
    const scope = this.get('scope')
    this.get('requestGameAction')(scope)
  },
});
