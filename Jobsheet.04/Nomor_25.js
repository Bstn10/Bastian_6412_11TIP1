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


// $ node Nomor_25.js
// Masukan Sebuah Kalimat: 1234567890
// Masukan Index Pertama: 4
// Masukan Index terakhir: 8
// Hasil slice dari indeks 4 hingga 8: 5678

