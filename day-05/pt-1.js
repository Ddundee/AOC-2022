const { readFileSync } = require("fs");

const output = 0;
const input1 = readFileSync('crates.txt', 'utf-8').split(/\r\n/);
const input2 = readFileSync('input.txt', 'utf-8').split(/\r\n/);


let crates = input1.map(stack => stack.split(' '));

let stack = [[], [], [], [], [], [], [], [], []];

for (let i = 0; i < crates.length; i++) {
    for (let j = 0; j < 9; j++) {
        stack[j].push(crates[i][j])
    }
}
// console.log(stack)

let instructions = input2.map(instruction => instruction.split(' '));

console.log("output", output);