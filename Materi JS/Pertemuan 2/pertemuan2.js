// condition
function panggiladmin() {
    // user = "admin";
    // user = "user";
    user = "null";
    if (user == "admin") {
        console.log("Admin login");
        alert("Admin login");
    }
    else if (user == "user") {
        console.log("User login");
        alert("User login");
    }
    else {
        console.log("Tidak ada akses");
        alert("Tidak ada akses");
    }
}

// type 
function cekangka() {
    angka = 99;
    // angka = 49;
    // angka = "tes";
    if (typeof angka == "number") {
        console.log(angka, "Ini angka");
        alert("Ini angka");
        if (angka >= 50) {
            console.log(angka, "Lebih besar dari 50");
            alert("Lebih besar dari 50");
        }
    }
    else {
        console.log(angka, "Ini bukan angka");
        alert("Ini bukan angka");
    }
}

// switch, but it same like condition :)
function tesswitch() {
    // user = "admin";
    user = "user";
    // user = "null";
    switch(user){
        case "admin":
            console.log("Admin login");
            alert("Admin login");
            break;
        case "user":
            console.log("User login");
            alert("User login");
            break;
        default:
            console.log("Tidak ada akses");
            alert("Tidak ada akses");
    }
}

// loop
function testlooping () {
    // for (i=1; i>=1; i++){
    //     console.log(i); //ini contoh deadloop, karena i >=1 maka loop akan diulang terus
    // }
    // for (i=1; i<=100; i+2){
    //     console.log(i); //ini contoh deadloop, karena i+2 maka loop akan diulang terus
    // }
    // for (i=1; i<=100; i++){
    //     console.log(i); //ini contoh loop yg benar, karena i <=100 (ada batas max loop)
    // }
    for (i=1; i<=100; i++){ // loop dengan menentukan angka ganjil genap
        if (i === 0) {
            console.log(i, "Genap") // 0 = genap
        }
        if (i % 2 === 0) {
            console.log(i, "Genap") // kelipatan 2 dari 0 = genap
        }
        else {
            console.log(i, "Ganjil") // selain itu = ganjil
        }
    }
}

function nestloop() { // nested for (for didalam for)
    var i, j; // def 2 variabel
    for (i=1; i<=100; i++){ // var i
        for(j=10; j<=500; j++){ // var
            console.log("I = ", i, ", J = ", j)
        }
    }
}