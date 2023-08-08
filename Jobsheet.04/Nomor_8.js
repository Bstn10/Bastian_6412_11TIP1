const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Kata yang ingin dicari: ", (kataCari)=>{
        const indeksKata = kalimat.lastIndexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata ${kataCari}' ditemukan pada indeks terakhir ${indeksKata}`);
        } else {
            console.log(`kata ${kataCari}' tidak ditemukan pada kalimat`);
        }
        rl.close()
    })
})

// $ node Nomor_8.js
// Masukan Sebuah Kalimat: I love programming
// Masukan Kata yang ingin dicari: g
// kata g' ditemukan pada indeks terakhir 17
