const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Kalimat pertama : ", (kalimat1)=> {
  rl.question("Makanan kesukaan saya: ", (kalimat2)=> {
    const kalimatGabungan = kalimat1.concat(kalimat2);
    console.log(`Hasil penggabungan: ${kalimatGabungan}`);
    rl.close()
  })
})

// $ node Nomor_10.js
// Masukan Kalimat pertama : Makanan favorit saya adalah
// Makanan kesukaan saya: Telur goreng
// Hasil penggabungan: Makanan favorit saya adalahTelur goreng
