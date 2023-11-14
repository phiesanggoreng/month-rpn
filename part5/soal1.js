// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//=================code======dibawah sini
//code disini gunakan console.log untuk outputnya

//ucapan selamat datang di game
console.log("welcome to proxytia");
console.log("=======================");


//membuat nama variabel nama dan peran
let nama = "nibras", peran = "animek";

//mengecek kondisi nama harus di isi
if (nama == "") {
    console.log("Nama wajib diisi");
}
//mengecek kondisi peran harus ada
else if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    //kondisi dimana jika nama dan peran diisi
    if (peran == "ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu !`);
    }// menggunakan backtick ``
    else if (peran == "tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran == "penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`halo ${nama}, kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}