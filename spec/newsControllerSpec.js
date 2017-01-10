(function testNewsControllerCreation(){
  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  var newsController = new NewsController(articleListDouble);
  assert.isTrue(newsController.articleList() === articleListDouble);
})();

(function testNewsControllerXHRCreation(){
  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  var newsController = new NewsController(articleListDouble);
  newsController.makeXHR();
  assert.isTrue(newsController.unsentXHR().readyState === 0);

})();
