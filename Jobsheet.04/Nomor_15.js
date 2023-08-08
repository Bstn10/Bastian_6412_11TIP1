const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Kata yang ingin dicari: ", (kataCari)=>{
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata ${kataCari}' pertama kali muncul pada indeks ${indeksKata}`);
        } else {
            console.log(`kata ${kataCari}' tidak ditemukan pada kalimat`);
        }
        rl.close()
    })
})


// $ node Nomor_15.js
// Masukan Sebuah Kalimat: Banu merupakan seorang murid disekolah SMK di Jakarta dan jurusan dia adalah RPL
// Masukan Kata yang ingin dicari: jurusan
// kata jurusan' pertama kali muncul pada indeks 58
