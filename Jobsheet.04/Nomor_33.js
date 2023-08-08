const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
})


// $ node Nomor_33.js
// Masukan Sebuah Kalimat: Node.js itu asik sekali loh
// kalimat dalam huruf besar: NODE.JS ITU ASIK SEKALI LOH
