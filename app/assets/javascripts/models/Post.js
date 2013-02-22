define([], function() {

  var Post = Backbone.Model.extend({
    defaults: {
      'feedback': '',
      'vote': 0,
      'created_at': ''
      
    }
  });

  return Post;
});