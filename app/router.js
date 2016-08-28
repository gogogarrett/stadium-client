import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('stadium-lobby', { path: '/lobby/user_id/:user_id' })
  this.route('game', { path: '/game/:game_id/user_id/:user_id' })
})

export default Router;
