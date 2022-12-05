const fs = require('fs');

let output = 0;
const input = fs.readFileSync('input.txt', 'utf-8').split(/\r\n/).map(item => item.split(/,/));

input.map(item => {
    let [a1, b1] = item[0].split('-').map(item => parseInt(item));
    let [a2, b2] = item[1].split('-').map(item => parseInt(item));

    if (a2 >= a1 && b2 <= b1) output++;
    else if (a1 >= a2 && b1 <= b2) output++;

})

console.log("output", output);