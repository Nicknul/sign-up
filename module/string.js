const formCom = require('./component/form.js');

const string = {
  main: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MAIN</title>
  </head>
  <body>
    <div id="root">
      ${formCom('form', '/submit', 'post')}
    </div>
  </body>
</html>`,
};

console.log(string.main);
