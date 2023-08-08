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

// $ node Nomor_13.js
// Masukan Sebuah Kalimat: Ibu ani pergi ke sebuah pasar untuk membeli buah apel dan buah melon
// Masukan Kata yang ingin dicari: apel
// kata apel' pertama kali muncul pada indeks 49
