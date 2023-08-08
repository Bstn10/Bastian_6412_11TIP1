const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Index Pertama: ", (startIndex)=>{
        rl.question("Masukan Index terakhir: ", (endIndex)=>{
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const sliceSubstring = kalimat.slice(startIndex,endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${sliceSubstring}`);
            rl.close();
        });
    });
});


// $ node Nomor_24.js
// Masukan Sebuah Kalimat: Bahasa yang digunakan untuk membuat aplikasi mobile adalah Kotlin dan Javascript
// Masukan Index Pertama: 7
// Masukan Index terakhir: 14
// Hasil slice dari indeks 7 hingga 14: yang di
