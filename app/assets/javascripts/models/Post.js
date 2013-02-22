var Post = Backbone.Model.extend({
  urlRoot: '/posts',
  defaults: {
    'feedback': '',
    'vote': 0,
    'created_at': ''
    
  }
});
