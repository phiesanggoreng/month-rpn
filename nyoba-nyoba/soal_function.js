// buatlah 2 variabel (today and tomorrow) 
// bertipe struct date. isilah variabel today dengan tanggal hari ini.
// temukan tanggal untuk variabel tomorrow. 
// keterangan: berikan pengecekan untuk akhir bulan berikan pengecekan untuk akhir tahun berikan pengecekan
// untuk bulan februari di tahun kabisat tahun kabisat
// adalah : - kelipatan 4, tapi bukan kelipatan 100 - kelipatan 100 yang juga merupakan kelipatan 400 

//==============code di bawah sini=================

//menentukan tahun kabisat

// tahun kabisat kan kelipatan 4 tapi ga kelipatan 100 kecuali kelipatan 400 
// buat function dulu untuk nampung

function kabisat(tahun) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0);
}

function tanggalbesok(hari_ini) {
    let tahun = hari_ini.year;
    let month = hari_ini.month;
    let day = hari_ini.day;

    // Pengecekan akhir bulan
    if (month === 12 && day === 31) {
        year++;
        month = 1;
        day = 1;
    } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) && day === 31) {
        month++;
        day = 1;
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 30) {
        month++;
        day = 1;
    } else if (month === 2) {
        // Pengecekan untuk bulan Februari di tahun kabisat
        if (kabisat(tahun) && day === 29) {
            month++;
            day = 1;
        } else if (!kabisat(tahun) && day === 28) {
            month++;
            day = 1;
        } else {
            day++;
        }
    } else {
        day++;
    }

    return { day, month, year };
}

// Mendapatkan tanggal hari ini
let hari_ini = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
};

// Mengisi variabel hari_besok dengan tanggal besok
let hari_besok = tanggalbesok(hari_ini);

// Menampilkan hasil
console.log("hari ini: ", hari_ini);
console.log("besok: ", hari_besok);
