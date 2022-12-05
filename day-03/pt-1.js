const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    let output = 0;

    let lines = data.split(/\r\n/);
    let splitLines = [];
    lines.map((item) => {
        let x = [item.slice(0, (item.length / 2)), item.slice(item.length / 2, item.length)];
        splitLines.push(x)
    });
    splitLines.map((item) => {
        let char;
        for (let i = 0; i < item[0].length; i++) {
            for (let j = 0; j < item[1].length; j++) {
                if (item[0][i] == item[1][j]) {
                    char = item[0][i];
                    break;
                }
            }
        }
        let asciiVal = char.charCodeAt(0);
        if (asciiVal <= 90) {
            asciiVal -= 38;
        }
        else {
            asciiVal -= 96;
        }
        output += asciiVal
    })



    console.log("output", output);

})