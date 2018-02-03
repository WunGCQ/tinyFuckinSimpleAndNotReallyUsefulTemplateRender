export default tpl => data => tpl.replace(/\{\{([\w|_|.|]+)\}\}/gi, (foo, key) => data && data[key] || '')
