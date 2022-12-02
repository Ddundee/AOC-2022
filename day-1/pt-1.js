const fs = require('fs');

fs.readFile('db.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    let arr = data.split('\n');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('\r')[0]
    }

    let calTracker = [];
    let tempCal = 0;
    // let personNum = 0;
    arr.map((item) => {
        if (item == '') {
            calTracker.push(tempCal);
            tempCal = 0;
            // personNum++;
            return;
        }
        tempCal += parseInt(item);
    })

    console.log(calTracker.sort((a, b) => a - b)[calTracker.length - 1]);

})