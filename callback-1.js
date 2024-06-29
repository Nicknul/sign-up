/**
 * * 24.06.29 (Sat) 정호연
 * * callback() 테스트 1
 * @param {string} name 이름
 * @param {function} callback greet() 함수의 실행이 끝난 다음 실행 할 함수
 */
const greet = (name, callback) => {
  console.log(`hello ${name}`);
  callback();
};

const sayGoodbey = () => {
  console.log('Goodbye!');
};

greet('정호연', sayGoodbey);
