const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    const kalimatLowerCase = kalimat.toLowerCase();
    console.log(`kalimat dalam huruf besar: ${kalimatLowerCase}`);
    rl.close();
})


// $ node Nomor_32.js
// Masukan Sebuah Kalimat: Hello World
// kalimat dalam huruf besar: hello world
