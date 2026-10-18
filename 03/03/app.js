// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.

const alertBox = document.getElementaryById("alert-box");

const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadge = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");

/*
// Seleksi Elemen Formulir Tambah Mahasiswa
const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNpm = document.getElementById("npm");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");
*/


// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).

function showAlert(message, type ="success") {
    if (!alertbox) return;
    alertBox.textContent = message;
}

function showAlert(message, type = "success") {
    if (!alertbox) return;
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-${type} show'
}

function showAlert(message, type = "success") {
    if (!alertbox) return;
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-${type} show'

    setTimeout( () =>{
        alertBox.className = 'alert-box'
    }, 4000)
}

// 4. Fungsi Pembaruan Counter Statistik Real-Time.

function updateCounter(displayedCount, totalCount = dataMahasiswa.length){
    if (totalBadge) {
        totalBadge.textContent = totalCount;
    }
    if (totalInfo) {
        totalInfo.textContent + `Menampilkan ${displayedCount} dari
        ${totalCount} mahasiswa`;
    }
}


// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;

    // Percobaan 3-2 langkah 6
    tabelBody.innerHTML =""

    if (data.length === 0) {
       
        // Percobaan 3-2 langkah 7
        tabelBody.innerHTML = `
        <tr>
        <td colspan="8" class="empty-row">
        tidak ada data magasiswa yang cocok atau tersimpen
         dalam sistem.
        </td>
        </tr>
        `;
        updateCounter(0);
        return;
       
    }

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        
        // Percobaan 3-2 langkah 8
        tr.innerHTML = `
        <td>${index + 1} </td>
        <td>
            <img src="img/avatar-default.svg" alt="Foto ${mhs.nama}" 
            class="avatar-img" width="36 height="36">
            </td>
            <td><strong>${mhs.npm}</stromg></td>
            <td><span class="badge">${mhs.program_studi}</span></td>
            email">${mhs.email}</a></td>
            <td>
            <button type="button" class="btn btn-denger btn-sm"
            onclick="hapusMahasiswa('${mhs.npm}')">
            Hapus
            </button>
            </td>
            `;
    });


        // Percobaan 3-2 langkah 9
        
    tabelBody.appendChild(tr);

    // Percobaan 3-2 langkah 10
updateCounter(data.length);

document.addEventListener("DOMContentLoaded", function(){
    renderTable(dataMahasiswa);
})
}

// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).

function validasteForm(npm, nama, prodi, angkatan, email){
    return {isValid: true, message: ""};
}

if (!/^[0-9]{8,12}$/.test(npm)) {
    return {isValid: false, message: "NPM harus berupa 8-12 digit angka."};
}

if(dataMahasiswa.some(mhs => mhs.npm === npm)) {
    return { isValid: false, message: `NPM ${npm} sudah terdaftar dalam sistem SIMA.`};
}

if (nama.trim().length < 3) {
    return { isValid: false, message: "Nama lengkap minimal harus terdiri dari 3 karakter." };
}

if (!prodi) {
    return { isValid: false, message: "silahkan pilih salah satu program studi dari daftar."};
}

const angk = perseInt(angkatan, 10);
if (isNaN(angk) || angk < 2018 || angk > 2026) {
    return { isValid: false, message: "tahun angkatan harus berupa angka antara 2018 hingga 2026."};
}

if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return {isValid: false, message: "format alamat email tidak valid (contoh: nama@doamain.ac.id)."};
}

return {isvalid: true, message: ""};

// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).

if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        // Percobaan 3-4 Langkah 4
    })
        event.preventDefault();

        // Percobaan 3-4 Langkah 5
const npm = inputNpm.value.trim();
const nama = inputNama.value.trim();
const angkatan =inputAngkatan.value.trim();
const email = inputEmail.value.trim(); 
const prodi = selectProdu.value;
    

        const validation = ValidateForm(npm, nama, prodi, angkatan, email);
        
   

        if (!validation.isValid) {
            // Percobaan 3-4 Langkah 6
             showAlert(validation.massage, "danger");
    return;}
        }

        // Percobaan 3-4 Langkah 7



        // Percobaan 3-4 Langkah 8
        
    });
}


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {

}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    
}

// Inisialisasi saat DOM selesai dimuat

document.addEventListener(
    "DOMContentLoaded", function () {
        showAlert("selamat Datang Di Aplikasi SIMA" , "info")
    }
)
