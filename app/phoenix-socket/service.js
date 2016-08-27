import PhoenixSocket from 'phoenix/services/phoenix-socket'

export default PhoenixSocket.extend({
  init() {
    this.on('open', () => {
      console.log('Socket was opened!')
    })
    this.on('error', () => {
      console.error('Socket was errored!')
    })
  },

  connect(userId) {
    this._super("ws://localhost:4000/socket", {
      params: { user_id: userId }
    })
  },
})
