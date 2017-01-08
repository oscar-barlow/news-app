function ArticleList(){}

(function(exports) {

  ArticleList.prototype.articles = function() {
    return this._articles;
  };

  exports.articles = this.articles;

})(this);
