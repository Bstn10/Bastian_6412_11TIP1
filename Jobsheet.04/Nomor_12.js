const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan kalimat pertama: ", (kalimat1)=> {
  rl.question("Masukan nama kalian: ", (kalimat2)=> {
    const kalimatGabungan = kalimat1.concat(kalimat2);
    console.log(`Hasil penggabungan: ${kalimatGabungan}`);
    rl.close()
  })
})


// $ node Nomor_12.js
// Masukan kalimat pertama: Welcome
// Masukan nama kalian: Bastian
// Hasil penggabungan: WelcomeBastian
