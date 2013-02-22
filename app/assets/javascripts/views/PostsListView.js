
  var PostsListView = Backbone.View.extend({
    
    constructor: function PostsListView() {
      Backbone.View.apply(this, arguments);
    },

    build: function () {
      var that = this;
      this.items = this.getItems();

console.log(this.items);
      
      // this.tbody = $(this.make('tbody'));
      // if(this.items.length == 0) {
      //   var item = '<td>There are currently no appointments.</td>';
      //   this.tbody.append(item);
      // } else {
      //   _.each(this.items, function(item) {
      //     that.tbody.append(item.el);
      //   });
      // }
    },

    getItems: function() {
      var that = this,
        itemView = PostItemView
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
      this.build();
      this.render();
    },

    render: function () {
      // set html
      this.$el.html("<span>test</span>");
    
    }

  });


