process.env.OUTPUT_PATH = "./output"
/*************************
 * [START] NO CODE HERE
 ************************/
const fs = require('fs');

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

let readLine = () => inputString[currentLine++];
/*************************
 * [END] NO CODE HERE
 ************************/

// Recieves a number as parameter, returns true if prime
function isPrime(n) {
  let sqroot = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqroot; i++) {
    if(n % i === 0)
      return false;
  }
  return true;
}
// Complete the getPrimes function below.
function* getPrimes(n) {
  // Check validity of 'n'
  if (isNaN(n) || n < 2) return;
  for (let i = 2; i < n; i++) {
    if(isPrime(i))
      yield i;
  }
}


/*************************
 * [START] NO CODE HERE
 ************************/
let main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let res = [];
    let gen = getPrimes(n);
    
    for (let i = 0; i < n; i++) {
        let val = gen.next().value;
        if (val == undefined)
            break;
        res.push(val);
    }

    ws.write(res.join("\n") + "\n");

    ws.end();
}
