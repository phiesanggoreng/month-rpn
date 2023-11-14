// while ()
// for ()

//let i = 5;

// while (i >= 0) {
//     console.log(i)
//     i--
// }
//dalam looping ada yang namanya arah, kiri atau kanan , kiri itu pengurangan dan kanan itu pertambahan
// hati hati akan infinite loop, atau loopnya tidak jalan

// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

// let name = "nibras";

//ada yang namanya mehod length untuk tipe data string dan array
// method length mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }

// jadi pada tipe data string atau array di javascript, ada yang namanya indexing
// dimana index itu sudah pasti berawal dari nol

// console.log(name[0] + name[5]);

// diberikan kasus yang membalikkan suatu kata, tanpa mengguankan method reverse

// let name = "soffi"; // length 4, sedangkan index itu dimulai dari 0, s -> 0, o -> 1 dan seterusnya
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) { // i = 4 -1; 4-1 >= 0; i ++
//     result += name[i] // => i => if => iff => iffo => iffos
//     //akan mengulang samoai syarat sudah terpenuhi yaitu i >=0 
// }
// console.log(result); // nampilin output result iffos

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(j)
    }
    console.log("")
}
console.log("selesai");


//looping sering bertemu method length
//looping agar membuat cide jadi lebih pendek
//looping agar membuat suatu proses menjadi dinamis
