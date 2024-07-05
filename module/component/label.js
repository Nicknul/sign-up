const inputCom = require('../component/input.js');
const input = inputCom('input', 'text', 'name', 'name');

const labelCom = (tag, fors, textNode, br) => {
  return `<${tag} for="${fors}">${textNode}</${tag}><${br} />
  ${input}`;
};

module.exports = labelCom;
