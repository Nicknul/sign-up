const http = require('http');
const fs = require('fs');

/**
 * * 24.06.28 (fri) 정호연
 * * server fs 모듈화 작업
 */
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    let data = fs.readFileSync('./public/html/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
});

server.listen(3000, (err) => {
  if (err) {
    console.error('서버 에러', err);
  } else {
    console.log('http://localhost:3000');
  }
});
/**
 *
 * @param {*} type write, read
 * @param {*} path 파일 경로
 * @returns
 */
const getCom = (type, path) => {
  return `fs.${type}FileSyne(${path}, 'utf-8');`;
};

const methodGET = getCom('read', './public/html/index.html');

console.log(methodGET);
