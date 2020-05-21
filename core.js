const path = require("path");
const dirUploads = path.join(__dirname,"www","files","uploads");

const util = require("util");

util.log(path.basename(__filename));
 //with utility module, we also get the date

 const v8 = require("v8");
 util.log(v8.getHeapStatistics());

 //const{getHeapStatistics}=require("v8"); log(getHeapStatistics());