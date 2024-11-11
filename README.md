# Expense Manager

Expense Manager adalah aplikasi web-based untuk membuat dan menyimpan catatan harian transaksi uang.

* Untuk melihat website, lihat disini https://expensemanager.farishasan.web.id

* [ FOR RECRUITER ]: Untuk memudahkan, silahkan login dengan email: `faris@mail.com` dan pass: `faris`.
* [ FOR RECRUITER ]: Mohon untuk tidak mengubah data user `faris`, hanya untuk di lihat. Terima kasih!

* Untuk melihat api, lihat disini https://expensemanager.farishasan.web.id/api/v1/docs (dokumentasi)

## Contributors
* Faris Hasan (Project lead & backend division)
* Mariana Djum (UI & frontend division)

## Tech Stack used
### Full Javascript language project
### Frontend:
* React + Vite
* React Router
* ANT Design + CSS3 for UI
### Backend:
* Node.js + Express
* Postgres
* Knex as ORM
* JWT for authentication
* Cloudinary for image upload
### Testing with Jest
### Deployment:
* Ubuntu VPS + Nginx web server
* GitHub Actions for CI/CD

## Feature

* Mencatat transaksi dengan waktu harian, sampai hitungan menit.
* Dibagi menjadi 3 jenis transaksi, yaitu pemasukan (income), pengeluaran (expense), dan transfer antar akun.
* Memperlihatkan jumlah total transaksi baik pemasukan maupun pengeluaran.
* Memperlihatkan jumlah total saldo akun baik aset (assets) maupun beban (liabilities).
* Saldo akun otomatis bertambah/berkurang seiring adanya transaksi.
* Pemasukan dan pengeluaran dibagi menjadi tiap-tiap kategori untuk memudahkan pencatatan.

### New Feature

* Live online dengan personal domain dan vps agar bisa digunakan semua orang
* Fungsi register dan login agar data tiap user berbeda-beda
* Warna tampilan lebih nyaman di mata (dark)
* Tampilan responsif bisa dibuka dari hp (minimum width 320px)
* Unggah foto bill anda untuk memaksimalkan pencatatan (gambar disimpan di Cloudinary dan bisa di unduh)

## Getting Ready (local app)

Untuk mencoba menjalankan aplikasi secara lokal, pastikan komputer sudah terinstall:
* Git version 2.43.0.windows.1
* Node.js v20.12.0
* PostgreSQL 16.2

Sebelum instalasi, jalankan kode tersebut di command prompt:
```bash
git clone
cd /server
npm i
cd ../client
npm i
```

## Installation

### Start Server
Pertama, buat file .env ke folder /server, berikut contohnya:
```bash
PORT=3000
ACCESS_SECRET_TOKEN=###
# Knex
D_CLIENT=pg
D_HOST=localhost
D_PORT=5432
D_USER=postgres
D_PASSWORD=###
D_DATABASE=postgres
# Cloudinary
C_NAME=###
C_KEY=####
C_SECRET=###
C_PATH=###
```

Lalu tuliskan kode dibawah:
```bash
cd /server
npx knex migrate:rollback
npx knex migrate:latest
npx knex seed:run
npm start
```

### Start Client
Untuk menjalankan development build, ketikkan kode dibawah:
```bash
cd /client
npm start
```

Untuk menjalankan production build, ketikkan kode dibawah:
```bash
cd /client
npm run build
npm run preview
```

## Usage
* Buat, modif, dan hapus kategori di halaman Categories.
* Buat, modif, dan hapus akun di halaman Accounts.
* Buat, modif, dan hapus transaksi di halaman Transactions.
* Untuk unggah gambar, silahkan tambahkan gambar saat membuat transaksi.
* Untuk unduh gambar, silahkan klik `edit` pada transaksi yang sudah ada gambarnya, klik `view transaction bill`, lalu klik saja gambarnya, maka akan diarahkan ke link download gambar.

## Screenshots
![pic](./screenshots/transactions.png)
![pic](./screenshots/accounts.png)
![pic](./screenshots/categories.png)
![pic](./screenshots/responsive.png)
![pic](./screenshots/modal.png)
![pic](./screenshots/upload.png)
![pic](./screenshots/register.png)