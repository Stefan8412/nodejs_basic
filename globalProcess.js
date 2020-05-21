//console.log(process.pid);
//console.log(process.versions.node);
//we can get enviroment informaôtion, read eviroment variables,communicate with terminal or parent processes,exit current process
//collect information from the terminal when we load the application process.argv
console.log(process.argv);

const[,,firstName,lastName]=process.argv;
console.log(`your name is ${firstName} ${lastName}`);

const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

