function whiledo() { // loop variabel dengan while
    let i = 0
    while(i < 10) {
        console.log(i)
        i++
    }
}

function forr() { // array dengan loop for
    nama = ["Bambang", "Bambang 2", "Bambang 3", "Bambang 4", "bambang 5"];
    for (i of[nama]){
        console.log(i)
    }
}

function inireturn() {
    alert("Return Terpanggil")
    return "Ini Return";
}

panggil = inireturn()
console.log(panggil)