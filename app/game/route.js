import Ember from 'ember';

export default Ember.Route.extend({
  phoenixSocket: Ember.inject.service(),
  stadiumGameState: Ember.inject.service(),

  model(params) {
    this.get('phoenixSocket').connect(params.user_id)

    return Ember.Object.create(this.get('stadiumGameState.gameData'))
  },

  setupController(controller, model) {
    this._super(controller, model);

    const channel = this.get('phoenixSocket').joinChannel(`game:${model.get('game_id')}`)

    // set channel on controller
    controller.set('channel', channel)

    // listen for any game_state_updated events
    channel.on("game_state_updated" , (data) => {
      controller.set('gameState', data.game_state)
    })
  }
})
