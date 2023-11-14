
// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//variabel yang akan digunakan untuk berapa nanti hitung mundur/maju
let looping1 = 0;
let looping2 = 5;

console.log("LOOPING PERTAMA maju");// output looping pertama maju
while (looping1 <= 5) {
    console.log(looping1)

    looping1++
}// hitung maju 0, 1, 2, 3, 4, 5

console.log("LOOPING KEDUA mundur");// looping mundur

while (looping2 >= 0) {
    console.log(looping2)
    looping2--
}// hitung mundur 5, 4, 3, 2, 1
console.log('-------------------------------------');

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('looping pertama maju');
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log('looping kedua mundur');

for (let i = 5; i >= 0; i--) {
    console.log(i)
}
console.log('-------------------------------------');
// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} bilangan bulat`)
    } else {
        console.log(`${i} bilangan ganjil`)
    }
}
console.log('-------------------------------------');
//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 1; i <= 1; i++) {
    for (j = 1; j <= 100; j += 2) {
        if (j % 3 === 0) {
            console.log(`${j} kelipatan 3`)
        } else {
            console.log(j)
        }
    }
    console.log("++++++++++++++++");

    for (k = 1; k <= 100; k += 5) {
        if (k % 6 === 0) {
            console.log(`${k} kelipatan 6`)
        } else {
            console.log(k)
        }
    }
    console.log("++++++++++++++++");


    for (w = 1; w <= 100; w += 9) {
        if (w % 10 === 0) {
            console.log(`${w} kelipatan 10`)
        } else {
            console.log(w)
        }
    }
}
console.log('------------------------------------');

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let input = 5;

for (i = 1; i <= input; i++) {
    let result = "";
    for (j = 1; j <= i; j++) {
        result += "*"
    }
    console.log(result)
}
