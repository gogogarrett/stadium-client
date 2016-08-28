import Ember from 'ember';

export default Ember.Controller.extend({
  stadiumGameState: Ember.inject.service(),

  handleGameOffer(gameData) {
    this.get('stadiumGameState').set('gameData', gameData)

    if (this.isGameMember(this.get('model'), gameData)) {
      this.transitionToRoute('game', gameData.game_id, this.get('model'))
    }
  },

  handleGameReject() {
    console.log("Game Rejected")
  },

  isGameMember(userId, gameData) {
    return gameData.players.findBy("player_id", userId)
  },

  actions: {
    requestGame(scope) {
      this.get('channel').push('request_game', {user_id: this.get('model'), scope})
    }
  }
})
