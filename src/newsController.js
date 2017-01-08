function NewsController(articleList) {
  this._articleList = articleList;
};

(function(exports) {

  NewsController.prototype.articleList = function(){
    return this._articleList;
  };

})(this);
