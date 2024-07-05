const labelCom = require('../component/label.js');
const label = labelCom('label', 'name', '이름', 'br');
/**
 *
 * @param {*} tag form
 * @param {*} action /submit
 * @param {*} method post
 * @returns
 */
const formCom = (tag, action, method) => {
  return `<${tag} action="${action}" method="${method}">
  ${label}
</${tag}>`;
};
console.log(formCom('form', '/submit', 'post'));

module.exports = formCom;
