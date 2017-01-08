function Article(summary, fullText) {
  this._summary = summary;
  this._fullText = fullText;
}

(function(exports) {

  Article.prototype.summary = function() {
    return this._summary;
  };

  Article.prototype.fullText = function() {
    return this._fullText;
  };

  exports.summary = this.summary;
  exports.fullText = this.fullText;

})(this);
