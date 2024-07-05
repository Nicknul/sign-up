const root = document.querySelector('#root');
const form = document.querySelector('form');
const names = document.querySelector('#name');
// console.log(names);

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

const baoleanArr = [];

names.addEventListener('input', () => {
  let data = names.value;
  members.forEach((element) => {
    if (data === element) {
      console.log('complete');
    }
  });
});
