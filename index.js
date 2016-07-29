var escapeHtml = require('escape-html')

module.exports = function (uri, name) {
  name = name || uri
  uri = escapeHtml(uri)
  var html = '<a href="' + uri + '">' + name + '</a>'
  return html
}
