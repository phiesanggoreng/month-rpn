let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

    input.splice(1,1,`${input[1]}elsharwy`)
    input.splice(2,1, `provinsi ${input[2]}`)
    input.splice(5,0,"pria","SMA Internasional Metro")
    cut = input[3].split("/")
    
    console.log(input)
    switch (parseInt(cut[1])) {
        case 1:
            console.log('Januari')
            break
        case 2:
            console.log('Februari')
            break
        case 3:
            console.log('Maret')
            break
        case 4:
            console.log('April')
            break
        case 5:
            console.log('Mei')
            break
        case 6:
            console.log('Juni')
            break
        case 7:
            console.log('Juli')
            break
        case 8:
            console.log('Agustus')
            break
        case 9:
            console.log('September')
            break
        case 10:
            console.log('Oktober')
            break
        case 11:
            console.log('November')
            break
        case 12:
            console.log('Desember')
            break
        default:
            console.log("Bulan Tidak Ada")
            break
    }
    cut = [cut[2],cut[0],cut[1]]
    console.log(cut)
    console.log(cut.join('-'))

    let user = input[1].slice(0, 15)
    console.log(user)


}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */