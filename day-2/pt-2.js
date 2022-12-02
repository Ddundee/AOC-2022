const fs = require('fs');

fs.readFile('db.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);

    let arr = data.split(/\r\n/)
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        let output = arr[i].split(' ')

        if (output[0] == 'A' && output[1] == 'X') score += 3 + 0;
        if (output[0] == 'A' && output[1] == 'Y') score += 1 + 3;
        if (output[0] == 'A' && output[1] == 'Z') score += 2 + 6;

        if (output[0] == 'B' && output[1] == 'X') score += 1 + 0;
        if (output[0] == 'B' && output[1] == 'Y') score += 2 + 3;
        if (output[0] == 'B' && output[1] == 'Z') score += 3 + 6;

        if (output[0] == 'C' && output[1] == 'X') score += 2 + 0;
        if (output[0] == 'C' && output[1] == 'Y') score += 3 + 3;
        if (output[0] == 'C' && output[1] == 'Z') score += 1 + 6;
    }

    console.log("score", score);

})
