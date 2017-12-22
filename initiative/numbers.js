const fs = require('fs');

let num = [3,3,2,3,6,
    1,]

for (let i = 0; i < num.length; i++) {
    if ((num[i] > 0) && (num[i] < 4)) {
        fs.appendFile('randoms.txt', 'short term madness\n', (err) => { if (err) throw err; })
    }
    if ((num[i] > 3) && (num[i] < 5)) {
        fs.appendFile('randoms.txt', 'long term madness\n', (err) => { if (err) throw err; })
    }
    if ((num[i] > 4) ) {
        fs.appendFile('randoms.txt', 'indefinite madness\n', (err) => { if (err) throw err; })
    }
}

// for (let i = 0; i < num.length; i++) {
//     if ((num[i] > 0) && (num[i] < 2)) {
//         fs.appendFile('randoms.txt', 'battle aftermath\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 2) && (num[i] < 7)) {
//         fs.appendFile('randoms.txt', 'creature encounter\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 7) && (num[i] < 10)) {
//         fs.appendFile('randoms.txt', 'demon encounter\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 9) && (num[i] < 12)) {
//         fs.appendFile('randoms.txt', 'discipline problem\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 11) && (num[i] < 14)) {
//         fs.appendFile('randoms.txt', 'disease\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 13) && (num[i] < 16)) {
//         fs.appendFile('randoms.txt', 'madness\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 15) && (num[i] < 18)) {
//         fs.appendFile('randoms.txt', 'poisoned npcs\n', (err) => { if (err) throw err; })
//     }
//     if ((num[i] > 17) && (num[i] < 20)) {
//         fs.appendFile('randoms.txt', 'spoiled supplies\n', (err) => { if (err) throw err; })
//     }
//     if (num[i] == 20) {
//         fs.appendFile('randoms.txt', 'vanishing disease\n', (err) => { if (err) throw err; })
//     }
// }
