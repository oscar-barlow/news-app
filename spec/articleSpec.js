(function testArticleCreation() {
  var article = new Article("summary", "this is the full text lorem ipsum dolor sit amet");
  assert.isTrue(article);
})();

(function testArticleReturnsSummary() {
  var article = new Article("summary", "this is the full text lorem ipsum dolor sit amet");
  assert.isTrue(article.summary() === "summary")
})();

(function testArticleReturnsFullText() {
  var article = new Article("summary", "this is the full text lorem ipsum dolor sit amet");
  assert.isTrue(article.fullText() === "this is the full text lorem ipsum dolor sit amet");
})();
