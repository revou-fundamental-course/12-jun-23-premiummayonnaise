function convert() {
    //1. ambil angka dari input
    const celsius = parseInt(document.getElementById("InputField").value);
    console.log(typeof value);

    //2. rubah ke fahrenheit
    const fahrenheit = (celsius*9/5) + 32;

    //3. display hasil perhitungan
    document.getElementById("InputField2").value = fahrenheit;
    console.log(fahrenheit);

    //3. display hasil perhitungan di kolom ketiga, yang menampilkan rumus
    document.getElementById("InputField3").value = "°F = ("+ celsius + " " + "* 1.8) + 32 =" + " " + fahrenheit;
    console.log(fahrenheit);
}

function reset() {
    //1. declare nilai dari variabel-variabel yang merupakan input
    const celsius = document.getElementById("InputField");
    const fahrenheit = document.getElementById("InputField2");

    //2. akan mengosongkan seluruh tabel input yang ada
    celsius.value = "";
    fahrenheit.value = "";
    document.getElementById("InputField3").value = "";
}

function reverse() {
      //1. declare dari nilai-nilai variabel yang ada
      const celsius = document.getElementById("InputField");
      const fahrenheit = document.getElementById("InputField2");

      //2. akan mengganti nilai yang ada pada kolom perhitungan
      document.getElementById("InputField3").value = "°C = (" + fahrenheit.value + " " + "- 32) * 5/9" + " " + "=" + " " + celsius.value;
}




