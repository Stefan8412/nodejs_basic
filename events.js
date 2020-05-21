const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent",(message,user)=>{
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent","HellowWorld","computer");
emitter.emit("customEvent","thats pretty cool huh","Steve");