const root = document.querySelector('#root');
const name = document.querySelector('#name');

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

for (let name in members) {
  // console.log(names[name]);
}

members.forEach((element) => {
  // console.log(element);
  if (name.value === element) {
    console.log('확인');
  }
});
