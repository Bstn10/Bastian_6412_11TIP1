const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan warna pertama: ", (kalimat1)=> {
  rl.question("Warna kesukaan saya adalah: ", (kalimat2)=> {
    const kalimatGabungan = kalimat1.concat(kalimat2);
    console.log(`Hasil penggabungan: ${kalimatGabungan}`);
    rl.close()
  })
})


// $ node Nomor_11.js
// Masukan warna pertama: Saya sangat suka sekali warna
// Warna kesukaan saya adalah: Biru
// Hasil penggabungan: Saya sangat suka sekali warnaBiru
