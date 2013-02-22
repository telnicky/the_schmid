
  var PostItemView = Backbone.View.extend({
    
    constructor: function AppointmentItemView () {
      Backbone.View.apply(this , arguments);
    },

    initialize: function () {
      var that = this;
      this.post = new Post({id: this.model.get('id')});
      this.post.fetch({
        success: function (model, response) {
          console.log('Fetch Succeeeeeeeeeded');
          that.render();
        },

        error: function(model, response) {
          console.log('Failed to Fetch');
        }
      })
    },

    
    render: function () {
      this.$el.html(
        '<span>post_item_view</span>'
      );
      this.$el.attr('id', this.model.get('id'));      
    }

  });

