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

(function testSendControllerXHR() {
  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  function XHRDouble () {
    this.sendCallCount = 0;
  };

  XHRDouble.prototype = {
    send: function() {
      this.sendCallCount++;
    }
  };

  var xhrDouble = new XHRDouble();

  var newsController = new NewsController(articleListDouble);
  newsController._xhr = xhrDouble;
  newsController.sendXHR()
  assert.isTrue(xhrDouble.sendCallCount === 1);

})();
