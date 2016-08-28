import Ember from 'ember';

export default Ember.Route.extend({
  phoenixSocket: Ember.inject.service(),

  model(params) {
    const userId = params.user_id
    this.get('phoenixSocket').connect(userId)
    return userId
  },

  setupController(controller, model) {
    this._super(controller, model)

    const channel = this.get('phoenixSocket').joinChannel(`lobby:game_assigner`)

    // set channel on controller
    controller.set('channel', channel)

    // listen for game_offer
    channel.on("game_offer" , (data) => {
      controller.handleGameOffer(data)
    })

    channel.on("game_reject" , () => {
      controller.set('gameRejected', true)
      controller.handleGameReject()
    })
  }
});
