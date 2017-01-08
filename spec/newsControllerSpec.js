(function testNewsControllerCreation(){
  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  var newsController = new NewsController(articleListDouble);
  assert.isTrue(newsController.articleList() === articleListDouble);
})();
