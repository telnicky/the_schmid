var Posts = Backbone.Collection.extend({
  model: Post,    

  initialize: function () {
    // this.on('change:status', this.onChangeStatus, this);
  }
});
