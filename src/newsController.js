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

  NewsController.prototype.unsentXHR = function() {
    return this._xhr;
  };

  NewsController.prototype.getNewsFromGuardian = function(url) {
    this._xhr = new XMLHttpRequest();
    request = this._xhr;

    request.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news", true)
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        this.myText = JSON.parse(this.responseText);
        console.log(this.myText);
        console.log(this);
      }
    };
    request.send();
  };

  exports.articleList = this.articleList;

})(this);
