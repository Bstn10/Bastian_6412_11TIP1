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


// $ node Nomor_31.js
// Masukan Sebuah Kalimat: Data analyst merupakan pekerjaan yang dibutuhkan beberapa perusahaan
// kalimat dalam huruf besar: DATA ANALYST MERUPAKAN PEKERJAAN YANG DIBUTUHKAN BEBERAPA PERUSAHAAN
