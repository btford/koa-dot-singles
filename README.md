
# koa-dot-singles

koa middleware for making a dot singles site

## Installation

```js
$ npm install koa-dot-singles
```

## Example

```js
var singles = require('koa-dot-singles');
var koa = require('koa');
var app = koa();

var profile = require('./api');

app.use(singles.is(profile));
app.use(singles.json(profile));
app.use(singles.html(profile));

app.listen(3000);

console.log('listening on port 3000');
```

## License

MIT
