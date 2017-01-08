(function testArticleListCreation() {
  var articleList = new ArticleList();

  assert.isTrue(articleList);
})();


(function testArticleListCanAddArticle() {
  function ArticleDouble() {};
  var articleDouble = new ArticleDouble();
  var articleList = new ArticleList();

  articleList.addArticle(articleDouble);

  assert.isTrue(articleList.articles().includes(articleDouble));
})();
