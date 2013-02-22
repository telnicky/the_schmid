define(['views/PostView'], function(PostView) {
  var PostsListView = Backbone.View.extend({
    
    constructor: function PostsListView() {
      Backbone.View.apply(this, arguments);
    },

    getItems: function() {
      var that = this,
        itemView = PostView
        items = [];
      
      if(itemView) {
        this.collection.each(function(listItem){
          var item = new itemView({model: listItem});
          items.push(item);
        });
      }
      else {
        console.log('itemView failed');
      }
      return items;
    },

    initialize: function() {
      
    }

  });

  return PostsListView;
});