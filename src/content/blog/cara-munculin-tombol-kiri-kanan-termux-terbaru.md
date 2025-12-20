---
title: "Cara Memunculkan Tombol Panah Kiri Kanan Termux"
description: "Tutorial lengkap cara memunculkan tombol panah kiri kanan di Termux untuk memudahkan editing file"
pubDate: 2019-03-21T06:57:00+00:00
heroImage: "/wp-content/uploads/2020/08/Termux-Panah-Kiri_kanan.jpg"
tags: ["termux", "tutorial", "android", "linux"]
draft: false
---
# Atasi Panah Kiri Kanan Termux yang Hilang

**TERMUX** - Merupakan terminal emulator layaknya linux di perangkat komputer. Perintah linux yang ada di komputer kalian bisa jalankan di aplikasi termux ini hanya dengan menggunakan perangkat android.

Namun ada sedikit perbedaan untuk menjalankan perintah-perintahnya. Jika di komputer kalian menggunakan kata `sudo apt get`, maka di termux kalian cukup ketik saja `pkg`.

Baca Juga: [Apa Itu Termux, Apakah Aplikasi Hacking?](/blog/apa-itu-termux/)

Aplikasi ini sudah didownload sekitar satu juta pengguna di play store saat artikel ini dibuat. Dan mungkin akan terus bertambah karena aplikasi ini sangat bermanfaat khususnya buat programmer. Karena dengan fitur yang ditawarkan, kalian bisa menjalankan berbagai bahasa pemrograman.

Selain digunakan untuk bahasa pemrograman, termux juga bisa digunakan untuk mengedit file langsung lewat termuxnya. Namun di termux versi terbaru ada fitur yang kurang ditambahkan khususnya untuk edit file via termux, yaitu tombol kiri kanan yang fungsinya untuk mengarahkan pointer ke text yang ingin diedit.

Tapi ada cara agar tombol pintas panah kiri kanan termux tersebut muncul kembali layaknya versi termux sebelumnya.

**Berikut perintah yang harus dijalankan pada termux. Pastikan data seluler anda terhubung ke internet.**

## Langkah-langkah Memunculkan Tombol Panah

Pertama, install wget:

```bash
pkg install wget -y
```

Kemudian install Python:

```bash
pkg install python
```

Download script key:

```bash
wget https://raw.githack.com/kumpul4semut/newtermux/master/key.py
```

Beri izin eksekusi pada file:

```bash
chmod +x key.py
```

Jalankan script Python:

```bash
python key.py
```

Itulah perintah yang harus dimasukkan ke termux untuk memunculkan tombol panah kiri kanan termux. Dan kalian bisa gunakan aplikasi ini dengan normal kembali untuk belajar bahasa pemrograman ataupun hanya untuk iseng saja mencoba sensasi linux di android.
