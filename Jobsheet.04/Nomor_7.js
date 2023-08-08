const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
  rl.question("Index keberapa yang ingin di cek: ", (index)=> {
    index = Number(index);
    if(index >= 0 && index < inputString.length){
      const character = inputString.charAt(index);
      console.log(`Karakter pada index ${index}: ${character}`);

    }
    else{
      console.log("indeks tidak valid");
    }
    rl.close()
  })
})

// $ node Nomor_7.js
// Masukan sebuah kalimat: Republik Indonesia
// Index keberapa yang ingin di cek: 7
// Karakter pada index 7: k
