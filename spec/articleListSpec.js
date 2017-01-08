(function testArticleListCreation() {
  var articleList = new ArticleList();

  assert.isTrue(articleList);
})();

// 
// (function testArticleListCreation() {
//   function ArticleDouble() {};
//   var articleDouble = new ArticleDouble();
//
//   var articleList = new ArticleList(articleDouble);
//
//   assert.isTrue(articleList.articles().includes(articleDouble));
// })();
