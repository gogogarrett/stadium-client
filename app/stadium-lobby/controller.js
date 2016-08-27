import Ember from 'ember';

export default Ember.Controller.extend({
  stadiumGameState: Ember.inject.service(),

  handleGameOffer(gameData) {
    this.get('stadiumGameState').set('gameData', gameData)

    this.transitionToRoute('game', gameData.game_id, this.get('model'))
  },

  actions: {
    requestGame() {
      this.get('channel').push('request_game', {user_id: this.get('model'), scope: "world"})
    }
  }
});
