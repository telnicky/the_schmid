$(function () {
  require(
    ['collections/Posts',
     'models/Post',
     'views/PostsListView', 
     'views/PostItemView'],

    function ( Posts, 
               Post, 
               PostsListView, 
               PostItemView) {
      
      // instantiate data
      var posts = new Posts(window.jsonData);
        
      
      // instantiate View
      var postsListView = new PostsListView({
        collection: posts                
      });

      // insert into page
      $('.main').append(postsListView.el);      
  })
});