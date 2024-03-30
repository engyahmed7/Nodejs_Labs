const http = require('http');
const fs = require('fs');

let result = 0;
http
  .createServer((req, res) => {
    if(req.url != '/favicon.ico'){
    console.log(req.url); 
    let url = req.url.split('/');
    let operator = url[1];
    let nums = [];
    for (let i = 2; i < url.length; i++) {
        nums.push(parseInt(url[i]));
    }
    console.log(nums);
    console.log(operator);
    if (operator === 'add') {
        result = nums.reduce((acc, curr) => acc + curr);
    } else if (operator === 'sub') {
        result = nums.reduce((acc, curr) => acc - curr);
    }
    else if(operator === 'mul') {
        result = nums.reduce((acc, curr) => acc * curr);
        
    }
    else if(operator === 'div') {
        result = nums.reduce((acc, curr) => acc / curr);
        
    }
    else {
        console.log('Invalid operator');
    }

    fs.appendFile('data.txt', result + '\n', (err) => {
        if(err) {
            console.log(err);
        }
    });
    }
    res.write('Result: ' + result);
    
    res.end();
  })
  .listen(3000);

