// * tag, id 불러오기
const root = document.querySelector('#root');
const form = document.querySelector('form');
const names = document.querySelector('#name');

// * container 불러오기
const nameCon = document.querySelector('#name-container');
const passwordCon = document.querySelector('#password-container');
const passwordCheckCon = document.querySelector('#possword-check-container');
const emailCon = document.querySelector('#email-container');
const phoneNumberCon = document.querySelector('#phone-number-container');
// console.log(phoneNumberCon);

// * check-box 불러오기
const nameBox = document.querySelector('#name-box');
const passwordBox = document.querySelector('#password-box');
const passwordCheckBox = document.querySelector('#password-check-box');
const emailBox = document.querySelector('#email-box');
const phoneNumberBox = document.querySelector('#phone-number-box');
// console.log(phoneNumberBox);

// * name Input 데이터베이스
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

// * boolean 값을 넣을 빈 배열
const booleanArr = [];

// * name input의 데이터가 members 배열 값과 같은지 검사
const checkNames = (name) => {
  for (let key in members) {
    if (name === members[key]) {
      return true;
    }
  }
  return false;
};

// * root 안에 있는 input에 이벤트리스너 적용
root.addEventListener('change', () => {
  const data = names.value;
  let check = checkNames(data);

  if (check === true) {
    if (booleanArr[0] !== true) {
      booleanArr.push(check);
    }
    nameBox.style.backgroundColor = '#4aff51';
  } else {
    nameBox.style.backgroundColor = '#ff4a4a';
  }
  console.log(booleanArr);
});
