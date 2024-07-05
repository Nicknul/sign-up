/**
 * * 24.06.27 (thu) 정호연
 * * input component
 * @param {*} tag
 * @param {*} type
 * @param {*} name
 * @param {*} id
 * @returns
 */
const inputCom = (tag, type, name, id) => {
  return `<${tag} type="${type}" name="${name}" id="${id}" />`;
};

module.exports = inputCom;
