
  var PostItemView = Backbone.View.extend({
    
    constructor: function AppointmentItemView () {
      Backbone.View.apply(this , arguments);
    },


    template: _.template(
      "<div class='post_head'>
         <input class='up-vote' type='submit' name='vote' value='up' title='Vote up'>
         <span>(<%= vote_count %>)</span>
         <span> -- </span>
         <span><%= time_stamp %></span>
       </div>

       <div class='post_body'>
         <%= feedback_text %>
       </div>

       <div class='thin-divide' />
      "),

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
        this.template({vote_count : post.get("vote")},
                      {time_stamp : post.get("created_at")},
                      {feedback_text : post.get("feedback")})
      );
      this.$el.attr('id', this.model.get('id'));      
    }

  });

