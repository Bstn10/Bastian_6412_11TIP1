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


// $ node Nomor_29.js
// Masukan Sebuah Kalimat: I love programming
// kalimat dalam huruf besar: I LOVE PROGRAMMING
