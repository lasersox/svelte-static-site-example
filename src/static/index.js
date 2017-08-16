var template = (html, css) => {
  return `\
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Svelte Static Site Example</title>
<link rel="stylesheet" type="text/css" href="/main.css"/>
<style>
${css}
</style>
</head>
<body>
${html}
<script src='/main.js'></script>
</body>
</html>
`
}

// This is required so that ExtractTextPlugin can find main.css.
var css = require("../css/main.css");

var hello = require("../components/Hello.html")

module.exports = function render(path, props, callback) {
  var html = hello.default.render()
  var style = hello.default.renderCss()
  console.log(style.components)
  callback(template(html, style.css))
};