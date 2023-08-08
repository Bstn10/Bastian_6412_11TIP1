const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    rl.question("Masukan Index Pertama: ", (startIndex)=>{
        rl.question("Masukan panjang Substring: ", (length)=>{
            startIndex = Number(startIndex);
            length = Number(length);
            const substringResult = kalimat.substr(startIndex,length);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});


// $ node Nomor_22.js
// Masukan Sebuah Kalimat:  Halo, perkenalkan nama saya adalah Javascript
// Masukan Index Pertama: 8
// Masukan panjang Substring: 5
// Hasil substring dari indeks 8 dengan panjang 5: erken
