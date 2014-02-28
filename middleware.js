
var fs = require('fs'),
    header = fs.readFileSync(__dirname + '/templates/header.html', 'utf8'),
    footer = fs.readFileSync(__dirname + '/templates/footer.html', 'utf8');

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
        this.body = wrap(json.single ? twitter(json.twitter, 'yes') : 'no');
      }
    } else {
      yield next;
    }
  }
};

exports.html = function (json) {
  return function *(next) {
    this.body = wrap(twitter(json.twitter, json.interestedIn + '.'));
  };
};

function wrap (res) {
  return header + res + footer;
}

function twitter (name, value) {
  return '<a href="https://twitter.com/' + name + '">' + value + '</a>';
}
