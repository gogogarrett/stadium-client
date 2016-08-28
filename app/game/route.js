import Ember from 'ember';

export default Ember.Route.extend({
  phoenixSocket: Ember.inject.service(),
  stadiumGameState: Ember.inject.service(),

  model(params) {
    this.get('phoenixSocket').connect(params.user_id)

    return Ember.Object.create(
      Ember.$.extend({}, this.get('stadiumGameState.gameData'), {userId: params.user_id})
    )
  },

  setupController(controller, model) {
    this._super(controller, model);

    const channel = this.get('phoenixSocket').joinChannel(`game:${model.get('game_id')}`)

    // set channel on controller
    controller.set('channel', channel)
    // set gameState on controller
    controller.set('gameState', model)

    // listen for any game_state_updated events
    channel.on("game_state_updated", (data) => {
      controller.set('gameState', Ember.Object.create(data.game_state))
    })

    // on game end - go back to lobby for now
    channel.on("game_end", (data) => {
      this.transitionTo('stadium-lobby', model.get('userId'))
    })
  }
})
