const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
    console.log(`Jumlah Karakter: ${inputString.length}`);
    rl.close();
});

// $ node Nomor_4.js
// Masukan sebuah kalimat: 1234567890
// Jumlah Karakter: 10
