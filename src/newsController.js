function NewsController(articleList) {
  this._articleList = articleList;
};

(function(exports) {

  NewsController.prototype.articleList = function() {
    return this._articleList;
  };

  NewsController.prototype.makeXHR = function() {
    this._xhr = new XMLHttpRequest();
  };

  NewsController.prototype.xhr = function() {
    return this._xhr;
  };

  NewsController.prototype.sendXHR = function() {
    this._xhr.send();
  };

  NewsController.prototype.openXHR = function(verb, url, boolean) {
    this._xhr.open(verb, url, boolean);
  };

  NewsController.prototype.xhrIsReady = function(){
    return (this.xhr().readyState == 4 && this.xhr().status == 200);
  };

  NewsController.prototype.readXHRResponse = function(){
    response = this._xhr.articles.response.results;
    return response;
  };

  NewsController.prototype.getResultsFromAPI = function(){
    this._xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        this.articles = JSON.parse(this.responseText);
      }
    };
    this.sendXHR();
  };

  exports.articleList = this.articleList;

})(this);
