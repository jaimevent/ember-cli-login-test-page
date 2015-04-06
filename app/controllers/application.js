import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    validate: function() {
      if(confirm('Reload the page now')) {
        location.reload();
      }
    }
  }
});
