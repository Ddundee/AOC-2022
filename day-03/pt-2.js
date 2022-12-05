const fs = require('fs');
console.log("start".toUpperCase())
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    let output = 0;

    let lines = data.split(/\r\n/);
    let groups = [];

    for (let i = 0; i < lines.length; i += 3) {
        groups.push(lines.slice(i, i + 3))
    }

    groups.map(([a, b, c]) => {
        let commonChar;
        a.split('').map(char => {
            if (b.includes(char) && c.includes(char)) commonChar = char;
        })

        let asciiVal = commonChar.charCodeAt(0);
        if (asciiVal <= 90) {
            asciiVal -= 38;
        }
        else {
            asciiVal -= 96;
        }

        output += asciiVal
    })

    console.log("outuput", output);

})