/**
 * * 24.06.28 (fri) 정호연
 * @param {*} path 읽을 파일 경로
 */
const read = {
  readFileSync: readFileSync('public/html/index.html', 'utf-8'),
};

module.exports = read;
