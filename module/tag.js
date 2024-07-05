/**
 * * 24.06.28 (fri) 정호연
 * * crate an tag of obj
 * * tag : tag name
 * * common : id, name, for
 * * type : type of input
 */
const tag = {
  tag: {
    br: 'br',
    div: 'div',
    form: 'form',
    input: 'input',
    label: 'label',
  },
  common: {
    name: 'name',
    password: 'password',
    passwordCheck: 'passwordCheck',
    email: 'email',
    phoneNumber: 'phoneNumber',
  },
  type: {
    text: 'text',
    submit: 'submit',
  },
};

class Tag {
  constructor() {
    return {
      tag: {
        br: 'br',
        div: 'div',
        form: 'form',
        input: 'input',
        label: 'label',
      },
      common: {
        name: 'name',
        password: 'password',
        passwordCheck: 'passwordCheck',
        email: 'email',
        phoneNumber: 'phoneNumber',
      },
      type: {
        text: 'text',
        submit: 'submit',
      },
    };
  }
}

const tags = new Tag();

console.log(tag);
