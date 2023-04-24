const fs = require('fs');

console.log('Starting file read...');//1
fs.readFile('./1.txt', 'utf8', (err, data) => {//2
  if (err) throw err;
  console.log('File contents:', data);
});
console.log('Continuing with other tasks...');

console.error(newError("hell"));