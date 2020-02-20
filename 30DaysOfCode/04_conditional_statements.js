'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// If  is odd, print Weird
// If  is even and in the inclusive range 2 of 5 to , print Not Weird
// If  is even and in the inclusive range 6 of 20 to , print Weird
// If  is even and greater than 20, print Not Weird

// -===================== Solution =====================-

const checkWeird = (N) => {
    (N > 1 && N < 6 || N > 20) ? console.log('Not Weird') : console.log('Weird');
}

function main() {
    const N = parseInt(readLine(), 10);

    ( N & 1 ) ? console.log('Weird') : checkWeird(N)
}

// -===================== End of Solution =====================-