define(['models/Post'], function(post) {
  var posts = Backbone.Collection.extend({
    model: post,    

    initialize: function () {
      // this.on('change:status', this.onChangeStatus, this);
    }
  });

  return posts;
});