
exports.json = function (json) {
  return function *(next) {
    if (this.request.header.accept.indexOf('application/json') > -1) {
      this.body = json;
    } else {
      yield next;
    }
  }
};

exports.is = function (json) {
  return function *(next) {
    if (this.request.header.host.substr(0, 3) === 'is.') {
      if (this.request.header.accept.indexOf('application/json') > -1) {
        this.body = json.single;
      } else {
        this.body = json.single ? ('<a href="https://twitter.com/' + json.twitter + '">yes</>') : 'no';
      }
    } else {
      yield next;
    }
  }
};

exports.html = function (json) {
  return function *(next) {
    this.body = json.interestedIn + '.';
  }
};
