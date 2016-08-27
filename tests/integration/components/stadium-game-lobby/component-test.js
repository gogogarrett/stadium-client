import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stadium-game-lobby', 'Integration | Component | stadium game lobby', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{stadium-game-lobby}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#stadium-game-lobby}}
      template block text
    {{/stadium-game-lobby}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
