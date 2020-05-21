const cp = require("child_process");
//cp.exec("open http://www.hancar.sk");

//cp.ecec("open -a Terminal.");

cp.exec("ls",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});