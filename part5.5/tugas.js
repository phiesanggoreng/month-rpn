//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log(`${word}${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh} `);


// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = 'wow JavaScript is so cool';
let FirstWord = word2[0] + word2[1] + word2[2];
let SecondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let ThirdWord = word2[15] + word2[16];
let FourthWord = word2[18] + word2[19];
let FifthWord = word2[21] + word2[22] + word2[23] + word2[24];


console.log('First Word: ' + FirstWord);
console.log('second Word: ' + SecondWord);
console.log('third Word: ' + ThirdWord);
console.log('fourth Word: ' + FourthWord);
console.log('Fifth Word: ' + FifthWord);

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let FirstWord3 = word3.substring(0, 3);
let SecondWord3 = word3.substring(4, 14);
let ThirdWord3 = word3.substring(15, 17);
let FourthWord3 = word3.substring(18, 20);
let FifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + FirstWord3);
console.log('second Word: ' + SecondWord3);
console.log('third Word: ' + ThirdWord3);
console.log('forth Word: ' + FourthWord3);
console.log('fifth Word: ' + FifthWord3);
