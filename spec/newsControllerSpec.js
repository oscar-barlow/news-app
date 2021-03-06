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
  assert.isTrue(newsController.xhr().readyState === 0);
})();

(function testNewsControllerXHROpening(){
  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  function XHRDouble () {
    this.args = [];
  };

  XHRDouble.prototype = {
    open: function(method, url, boolean) {
      this.args = [method, url, boolean];
    }
  };

  var xhrDouble = new XHRDouble();

  var newsController = new NewsController(articleListDouble);
  newsController._xhr = xhrDouble;
  newsController.openXHR("GET", "https://www.example.com", true);

  assert.isTrue(xhrDouble.args[0] === "GET");
  assert.isTrue(xhrDouble.args[1] === "https://www.example.com");
  assert.isTrue(xhrDouble.args[2] === true);
})();

(function testControllerCanReadXHRResponse() {
  function XHRDouble (){
    this.articles = {
      "response": {
        "results": [ { "webTitle": "An Example Article Title" } ]
      }
    }
  };

  function ArticleListDouble() {};
  var articleListDouble = new ArticleListDouble();

  var newsController = new NewsController(articleListDouble);
  var xhrDouble = new XHRDouble();
  newsController._xhr = xhrDouble;

  assert.isTrue(newsController.readXHRResponse()[0].webTitle === "An Example Article Title")
})();

(function testControllerSendXHR() {
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
