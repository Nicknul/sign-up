// * tag
const root = document.querySelector('#root');
const form = document.querySelector('form');

// * input
const names = document.querySelector('#name');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
// console.log(phoneNumber);

// * check-box
const nameBox = document.querySelector('#name-box');
const passwordBox = document.querySelector('#password-box');
const passwordCheckBox = document.querySelector('#password-check-box');
const emailBox = document.querySelector('#email-box');
const phoneNumberBox = document.querySelector('#phone-number-box');
// console.log(phoneNumberBox);

// * 데이터베이스
const members = [
  '구하림',
  '김보미',
  '김수현',
  '김정수',
  '문혜림',
  '배성민',
  '백지원',
  '송이현',
  '신지윤',
  '유으뜸',
  '유호영',
  '이연승',
  '이재영',
  '이종수',
  '임유진',
  '정호연',
  '조우식',
  '조자연',
  '최유진',
  '황재민',
];

const number = /^\d+$/;

// * input matching object
const match = {
  name: (name) => {
    for (let key in members) {
      if (name === members[key]) {
        return true;
      }
    }
    return false;
  },
  password: (inputData) => {},
  phoneNumber: (inputData) => {
    return number.test(inputData);
  },
};

// * boolean 값을 넣을 빈 배열
const booleanArr = [];

// * root 안에 있는 input에 이벤트리스너 적용
root.addEventListener('change', (event) => {
  // input data
  let name = match.name(names.value);
  let phone = match.phoneNumber(phoneNumber.value);
  console.log(phone);

  // ? name input
  if (name === true) {
    if (booleanArr[0] !== true) {
      booleanArr.push(name);
    }
    nameBox.style.backgroundColor = '#4aff51';
  } else {
    nameBox.style.backgroundColor = '#ff4a4a';
  }

  // ? phone-number input
  let phoneInput = event.target.value;

  let ex = /\d{3}-\d{4}-\d{4}/;
  if (ex.test(phoneInput) === true) {
    // console.log('확인');
  }

  if (phone === true) {
    // true 값 배열에 넣기
    if (booleanArr[0] === true) {
      booleanArr.push(phone);
    }
    if (phoneInput.length > 3) {
      phoneInput = phoneInput.slice(0, 3) + '-' + phoneInput.slice(3);
    }
    if (phoneInput.length > 8) {
      phoneInput = phoneInput.slice(0, 8) + '-' + phoneInput.slice(8, 12);
    }
    event.target.value = phoneInput;
  }

  console.log(booleanArr);
});
