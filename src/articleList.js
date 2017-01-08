function ArticleList(){
  this._articles = []
}

(function(exports) {

  ArticleList.prototype.articles = function() {
    return this._articles;
  };

  ArticleList.prototype.addArticle = function(article) {
    this._articles.push(article);
  };

  exports.articles = this.articles;
  exports.addArticle = this.addArticle;

})(this);
