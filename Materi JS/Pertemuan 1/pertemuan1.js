function inijs() {
    var a = "Ini JS";
    console.log(a); // Debug di console
    alert(a); // Alert di window chrome
}

function iniarray() {
    var iniarraystring = ['A', 'B', 'C']; // definisi variabel dengan string & array
    var dirandom = iniarraystring[Math.floor(Math.random()*iniarraystring.length)]; // random variabel dari string array
    console.log(dirandom);
    alert(dirandom);
}

function inichance() {
    if (Math.random() * 100 < 95) { // buat get random chance (kemungkinan)
        console.log("halo");
        alert("halo");
    }
    else if (Math.random() * 94 < 90) { // buat get random chance (kemungkinan)
        console.log("hai");
        alert("hai");
    }
    else if (Math.random() * 89 < 85) { // buat get random chance (kemungkinan)
        console.log("helo");
        alert("helo");
    }
    else if (Math.random() * 84 < 70) { // buat get random chance (kemungkinan)
        console.log("hola");
        alert("hola");
    }
}

function ininumber() { // mendefinisikan number
    var numberini = Number(99); // number (bukan dengan str)
    console.log(numberini);
    alert(numberini);
}

function inimatrix() { // conton matrix dgn array
    var matrix = [[1, 2],[3, 4],[5, 6]] // array dlm array dgn matrix didefinisikan dengan [[]]
    console.log(matrix);
    alert(matrix);
}

function iniops() { // operator
    x = 5; // definisikan x
    y = 10; // definisikan y
    var operatortambah =  x+y;
    var operatorkurang =  x-y;
    var operatorkali =  x*y;
    var operatorbagi =  x/y;
    console.log("Soal : x = 5, y = 10");
    console.log("Hasil Penambahan : ", operatortambah, "Hasil Pengurangan : ", operatorkurang, "Hasil Perkalian : ", operatorkali, "Hasil Pembagian : ", operatorbagi);
    alert("Hasil ada di console (F12)")
} 