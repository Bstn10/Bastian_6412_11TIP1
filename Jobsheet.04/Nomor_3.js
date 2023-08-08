const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
    console.log(`Jumlah Karakter: ${inputString.length}`);
    rl.close();
});

// $ node Nomor_3.js
// Masukan sebuah kalimat: Ibu Kota Negara
// Jumlah Karakter: 15
