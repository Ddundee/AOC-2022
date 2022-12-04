const fs = require('fs');

let output = 0;
const input = fs.readFileSync('input.txt', 'utf-8').split(/\r\n/).map(item => item.split(/,/));

const ranger = ([x1, x2]) => {
    let res = [];
    for (let i = parseInt(x1); i <= parseInt(x2); i++) {
        res.push(`${i}`);
    }
    return res;
}

input.map(item => {
    let item1 = ranger(item[0].split('-'));
    let item2 = ranger(item[1].split('-'));

    // console.log(item1, item2)
    let status = false
    mainLoop: for (let i = 0; i < item1.length; i++) {
        for (let j = 0; j < item2.length; j++) {
            if (item1[i] == item2[j]) {
                output++;
                status = true;
                break mainLoop;
            }
        }
    }

    if (!status) {
        console.log(item, item1, item2)
    }
})

console.log("output", output)