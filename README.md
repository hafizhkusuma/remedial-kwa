# Form Input Data SEP

Proyek ini berisi sebuah form HTML sederhana yang digunakan untuk memasukkan data SEP (Surat Eligibilitas Peserta), yang biasa digunakan dalam konteks layanan kesehatan di Indonesia. Form ini mengumpulkan dua segmen nomor SEP (2 digit dan 6 digit) dan memvalidasi bahwa input hanya berisi angka. Setelah validasi, data akan diteruskan ke halaman kedua (Page 2) sebagai parameter URL.

## Fitur

- **Validasi Formulir**: Form memastikan bahwa kedua kolom input hanya menerima nilai numerik.
- **Pengalihan Halaman**: Setelah formulir berhasil dikirimkan, halaman akan mengarahkan ke halaman baru (Page 2) dengan nomor SEP yang diteruskan sebagai parameter URL.
- **Desain Menggunakan Bootstrap**: Formulir ini dipadukan dengan Bootstrap untuk menciptakan antarmuka yang responsif dan ramah pengguna.

## Cara Kerja

1. Pengguna akan disajikan dengan form yang berisi dua kolom:
   - **2 Digit Nomor SEP (8-11)**: Nomor 2 digit yang mewakili bagian pertama dari nomor SEP.
   - **6 Digit Nomor SEP (13-18)**: Nomor 6 digit yang mewakili bagian kedua dari nomor SEP.

2. Saat pengguna mengirimkan formulir:
   - Fungsi JavaScript memvalidasi input untuk memastikan bahwa kedua kolom hanya berisi angka.
   - Jika validasi berhasil, pengguna akan diarahkan ke `page2.html`, dengan nomor SEP yang diteruskan sebagai parameter dalam URL.

3. Jika pengguna memasukkan karakter non-numerik di kolom input, akan muncul pesan peringatan, dan pengiriman formulir akan dibatalkan hingga data yang valid dimasukkan.

# Form Input Data SEP - Halaman 2

Proyek ini melanjutkan dari halaman pertama di mana pengguna memasukkan data SEP (Surat Eligibilitas Peserta). Pada halaman kedua, data yang telah dimasukkan sebelumnya (nomor SEP) digunakan untuk mengambil data dari backend dan kemudian menampilkannya dalam form untuk disimpan.

## Fitur

- **Pengambilan Data**: Mengambil data terkait nomor SEP yang dimasukkan pada halaman pertama menggunakan API dari backend.
- **Pengisian Formulir**: Mengisi form secara otomatis dengan data yang diambil berdasarkan nomor SEP.
- **Pengiriman Data**: Mengirim data yang dimasukkan oleh pengguna ke backend untuk disimpan.
- **Desain Responsif**: Halaman ini menggunakan Bootstrap untuk memastikan antarmuka yang responsif.

## Cara Kerja

1. **Pengambilan Data Berdasarkan SEP**:
   - Halaman ini menerima parameter URL `sep1` dan `sep2` yang diteruskan dari halaman pertama.
   - Dengan menggunakan nomor SEP tersebut, data terkait diambil dari backend menggunakan API dengan URL `http://localhost:3000/data?sep1={sep1}&sep2={sep2}`.
   - Data yang diambil kemudian digunakan untuk mengisi kolom formulir, seperti "Nomor Kartu" dan kolom lainnya (jika ada).

2. **Formulir Pengisian**:
   - Pengguna dapat melihat dan mengedit data yang telah diambil, seperti nomor kartu, pada form yang disediakan.
   - Setelah mengedit, pengguna dapat menekan tombol "Simpan" untuk mengirimkan data yang diperbarui ke backend.

3. **Pengiriman Data**:
   - Ketika tombol "Simpan" ditekan, data yang telah dimasukkan ke dalam formulir dikumpulkan dan dikirimkan ke backend menggunakan metode HTTP POST ke URL `http://localhost:3000/data`.
   - Setelah data berhasil disimpan, pengguna akan menerima pemberitahuan berupa pesan sukses.


# SEP Data API

Proyek ini adalah API backend yang menggunakan Express.js untuk menangani permintaan GET dan POST terkait data SEP (Surat Eligibilitas Peserta). API ini menggunakan PostgreSQL sebagai basis data untuk menyimpan dan mengambil data terkait nomor SEP dan nomor kartu.

## Fitur

1. **GET /data** - Mengambil data berdasarkan nomor SEP dan nomor kartu yang diteruskan sebagai query parameters (`sep1` dan `sep2`).
2. **POST /data** - Mengirimkan data yang diterima dari klien untuk disimpan dalam database.

## Teknologi yang Digunakan

- **Node.js** - Untuk menjalankan server.
- **Express.js** - Framework untuk membangun API.
- **PostgreSQL** - Basis data relasional untuk menyimpan data SEP.
- **cors** - Middleware untuk mengizinkan akses lintas domain.
- **body-parser** - Middleware untuk mengurai JSON body pada permintaan POST.

