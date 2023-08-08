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


// $ node Nomor_30.js
// Masukan Sebuah Kalimat: 123ABCXYZ
// kalimat dalam huruf besar: 123abcxyz

