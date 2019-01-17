let env = process.argv.slice(-1).toString().replace(/\-/g,"");
let getBaseUrl = function(){
  if(env == "development"){
    return ""
  }
  else if(env == "test"){
    return "http://www.baidu.com"
  }
  else if(env == "production"){
    return "http://www.baidu.com"
  }
};

let insertScript = `<head><script  type="text/javascript"> window.baseUrl = ${JSON.stringify(getBaseUrl())}</script>`

function SetGlobalVariable() {
}

SetGlobalVariable.prototype.apply = function (compiler) {
  compiler.hooks.compilation.tap('html-webpack-plugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
          'html-webpack-plugin-before-html-processing',
          (data, cb) => {
            data.html = data.html.replace(/<head>/, insertScript)
            cb(null, data)
          }
      )
  })
}
  
module.exports = SetGlobalVariable;