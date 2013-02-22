$(function () {
      // instantiate data
      var posts = new Posts(window.jsonData);
        
      
      // instantiate View
      var postsListView = new PostsListView({
        collection: posts                
      });

      // var test = "<span>hello world</span>"
      // insert into page
      $('.main').append(postsListView.el);      
      // $('.main').append(test);      
});