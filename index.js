module.exports = function (req, res, next) {
  res.redir = redir.bind(res);
  next();
}
/**
 * @see https://github.com/visionmedia/express/blob/master/lib/response.js#L627
 *
 * this === res
 */
function redir(url) {
  var req = this.req,
    app = this.app,
    status = 302;

  if (2 == arguments.length) {
    if ('number' == typeof url) {
      status = url;
      url = arguments[1];
    } else {
      status = arguments[1];
    }
  }

  if (req.body._redirect) {
    url = req.body._redirect;
  }
  else if (req.query._redirect) {
    url = req.query._redirect;
  }
  else if (req.session && req.session._redirect) {
    url = req.session._redirect;
    delete req.session._redirect;
  }

  this.redirect.apply(this, [status, url]);
}
