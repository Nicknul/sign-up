const fs = require('fs');
/**
 * * 24.06.28 (fri) 정호연
 * * fs 모듈화 작업
 * * fs 내장 모듈 검증 완료
 */
const fileSystemFu = {
  read: (path, callback) => {
    fs.readFile(`${path}`, (err, data) => {
      if (err) {
        console.error('서버 오류:', err);
      } else {
        callback(data);
      }
    });
  },
};

module.exports = fileSystemFu;
