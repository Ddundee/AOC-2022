const fs = require('fs');

fs.readFile('db.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);

    let arr = data.split(/\r\n/)
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        let output = arr[i].split(' ').reverse();

        if (output[0] == 'X' && output[1] == 'A') score += 4;
        if (output[0] == 'X' && output[1] == 'B') score += 1;
        if (output[0] == 'X' && output[1] == 'C') score += 7;

        if (output[0] == 'Y' && output[1] == 'A') score += 2 + 6;
        if (output[0] == 'Y' && output[1] == 'B') score += 2 + 3;
        if (output[0] == 'Y' && output[1] == 'C') score += 2 + 0;

        if (output[0] == 'Z' && output[1] == 'A') score += 3 + 0;
        if (output[0] == 'Z' && output[1] == 'B') score += 3 + 6;
        if (output[0] == 'Z' && output[1] == 'C') score += 3 + 3;
    }

    console.log("score", score);

})