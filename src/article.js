function Article(summary, fullText) {
  this._summary = summary;
}

(function(exports) {

  Article.prototype.summary = function() {
    return this._summary;
  };

  exports.summary = this.summary;

})(this);
