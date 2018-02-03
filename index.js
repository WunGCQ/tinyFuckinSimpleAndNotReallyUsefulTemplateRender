export const tplRender = templateStr => data => templateStr.replace(/\{\{([\w|_|.|]+)\}\}/gi, (foo,
  key) => data[key])
