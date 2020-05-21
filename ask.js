const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("How dou like Node?", answer=>{
    console.log(`Answer: ${answer}`);
});