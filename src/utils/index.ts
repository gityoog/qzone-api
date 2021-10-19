/**nosafe */
function parseJSONPArgs(data: string) {
  const result = /(.*?)\)/.exec(data)
  if (result && result[1]) {
    return eval(`(function(${result[1]}){
      return ${data}
    })(function(){ return Array.prototype.slice.call(arguments)})`)
  }
}

