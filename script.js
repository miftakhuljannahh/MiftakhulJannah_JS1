//if else
function cekNilai() {
    // Mendapatkan nilai dari elemen input berdasarkan ID
    var nilaiInput = document.getElementById("nilaiInput").value;

    // Mengonversi nilai menjadi angka
    var nilai = parseFloat(nilaiInput);

    // Pemeriksaan kondisi dengan if-else
    var hasilPesan = document.getElementById("hasil1");

    if (isNaN(nilai)) {
        // Jika input tidak valid
        hasilPesan.textContent = "Input tidak valid. Masukkan angka yang benar.";
    } else {
        // Jika input adalah angka
        if (nilai >= 60) {
            hasilPesan.textContent = "Anda lulus.";
        } else {
            hasilPesan.textContent = "Anda gagal.";
        }
    }
}

//nested if
function cekNilaiMatematikaInggris() {
    // Mendapatkan nilai Matematika dan Bahasa Inggris dari elemen input berdasarkan ID
    var nilaiMatematikaInput = parseFloat(document.getElementById("nilaiMatematikaInput").value);
    var nilaiInggrisInput = parseFloat(document.getElementById("nilaiInggrisInput").value);

    // Pemeriksaan kondisi dengan if-else bertingkat
    var hasilPesan = document.getElementById("hasil2");

    if (isNaN(nilaiMatematikaInput) || isNaN(nilaiInggrisInput)) {
        // Jika input tidak valid
        hasilPesan.textContent = "Input tidak valid. Masukkan angka yang benar.";
    } else {
        // Jika input adalah angka
        if (nilaiMatematikaInput >= 60) {
            if (nilaiInggrisInput >= 60) {
                hasilPesan.textContent = "Anda lulus Matematika dan Bahasa Inggris.";
            } else {
                hasilPesan.textContent = "Anda lulus Matematika, tetapi gagal Bahasa Inggris.";
            }
        } else {
            if (nilaiInggrisInput >= 60) {
                hasilPesan.textContent = "Anda lulus Bahasa Inggris, tetapi gagal Matematika.";
            } else {
                hasilPesan.textContent = "Anda gagal Matematika dan Bahasa Inggris.";
            }
        }
    }
}

//switch case
function tampilkanBulan() {
    // Mendapatkan nilai hari dari elemen select berdasarkan ID
    var selectBulan = document.getElementById("bulan");
    var bulan = selectBulan.value;
    
    // Mendapatkan elemen hasil berdasarkan ID
    var hasilPesan = document.getElementById("hasil");

    // Menggunakan pernyataan switch-case untuk menentukan hari
    switch (bulan) {
        case "januari":
            hasilPesan.textContent = "Bulan pertama yaitu Januari.";
            break;
        case "Februari":
            hasilPesan.textContent = "Bulan kedua yaitu Februari.";
            break;
        case "Maret":
            hasilPesan.textContent = "Bulan ketiga adalah Maret.";
            break;
        case "April":
            hasilPesan.textContent = "Bulan ke empat adalah Kamis.";
            break;
    }
}
//for loop
document.addEventListener("DOMContentLoaded", function() {
    var tombolHitung = document.getElementById("tombolHitung");
    var hasilPerulangan = document.getElementById("hasilPerulangan");

    tombolHitung.addEventListener("click", function() {
        // Mendapatkan nilai jumlah iterasi dari elemen input berdasarkan ID
        var inputIterasi = document.getElementById("iterasi");
        var jumlahIterasi = parseInt(inputIterasi.value);

        // Mengosongkan hasil perulangan sebelumnya
        hasilPerulangan.innerHTML = "";

        // Melakukan perulangan dengan for
        for (var i = 1; i <= jumlahIterasi; i++) {
            var li = document.createElement("li");
            li.textContent = "Iterasi ke-" + i;
            hasilPerulangan.appendChild(li);
        }
    });
});

//while
document.addEventListener("DOMContentLoaded", function() {
    var tombolCetak = document.getElementById("tombolCetak");
    var hasilCetak = document.getElementById("hasilCetak");

    tombolCetak.addEventListener("click", function() {
        // Mendapatkan nilai n dari elemen input berdasarkan ID
        var inputN = document.getElementById("n");
        var n = parseInt(inputN.value);

        // Mengosongkan hasil cetak sebelumnya
        hasilCetak.innerHTML = "";

        // Melakukan perulangan dengan while
        var i = 1;
        while (i <= n) {
            var p = document.createElement("p");
            p.textContent = "Angka " + i;
            hasilCetak.appendChild(p);
            i++;
        }
    });
});


//do while
document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen tombol dan hasil
    var tombol = document.getElementById('tombol');
    var hasil = document.getElementById('hasil');

    // Tambahkan event listener pada tombol
    tombol.addEventListener('click', function () {
        var angka = parseInt(prompt('Masukkan angka:'));
        var total = 0;

        if (!isNaN(angka)) {
            var i = 1;
            do {
                total += i;
                i++;
            } while (i <= angka);

            // Tampilkan hasil perhitungan di dalam elemen hasil
            hasil.innerHTML = 'Hasil penjumlahan 1 hingga ' + angka + ' adalah: ' + total;
        } else {
            alert('Input tidak valid. Harap masukkan angka.');
        }
    });
});

//function
document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen hasil
    var hasilKurang = document.getElementById('hasilKurang');
    var hasilBagi = document.getElementById('hasilBagi');
    var hasilAkarKuadrat = document.getElementById('hasilAkarKuadrat');

    // Hitung hasil operasi matematika
    var hasilPengurangan = 10 - 3;
    var hasilPembagian = 20 / 4;
    var hasilAkarKuadrat16 = Math.sqrt(16);

    // Isi nilai hasil operasi matematika ke dalam elemen-elemen HTML
    hasilKurang.textContent = hasilPengurangan;
    hasilBagi.textContent = hasilPembagian;
    hasilAkarKuadrat.textContent = hasilAkarKuadrat16;
});



