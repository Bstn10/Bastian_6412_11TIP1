const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    const kalimatTrimmed = kalimat.trim();
    console.log(`kalimat setelah di trim: ${kalimatTrimmed}`);
    rl.close();
})
