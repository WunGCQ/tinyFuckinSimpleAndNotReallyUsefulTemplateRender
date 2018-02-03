export const tplRender = templateStr=>data=>{
  let res = templateStr + '';
  res = res.replace(/\{\{([\w|_|.|]+)\}\}/gi,(foo,key)=>{
    return data[key];
  });
  return res;
};
