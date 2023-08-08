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

// $ node Nomor_26.js
// Masukan Sebuah Kalimat: Welcome to the world of programming
// Masukan Index Pertama: 11
// Masukan Index terakhir: 16
// Hasil slice dari indeks 11 hingga 16: the w

