---
title: "Cara Memunculkan Tombol Panah Kiri Kanan Termux"
description: "Cara Memunculkan Tombol Panah Kiri Kanan Termux"
pubDate: 2019-03-21T06:57:00+00:00
heroImage: "/wp-content/uploads/2020/08/Termux-Panah-Kiri_kanan.jpg"
tags: []
draft: false
---

\![Munculkan Panah Kiri Kanan termux](/wp-content/uploads/2019/03/Termux-Panah-Kiri_kanan-300x225.jpg) atasi panah kanan kiri termux hilang **TERMUX** - Merupakan terminal emulator layak linux diperangkat komputer. Perintah linux yang ada di komputer kalian bisa jalankan di aplikasi temux ini hanya dengan menggunkan perangkat android. Namun ada sedikit perbedaan untuk menjalankan perintah-perintahnya seperti jika dikomputer kalian menggunkan kata sudo apt get maka di termux kalian cukup ketik saja pkg. Baca Juga: [Apa Itu Termux, Apakah Aplikasi Hacking?](https://www.kumpul4semut.com/apa-itu-termux/) Aplikasi ini sudah didownload sekitar satu juta pengguna di play store saat artikel ini dibuat. Dan mungkin akan terus bertambah karena aplikasi ini sangat bermanfaat khususnya buat programer. Karena dengan fitur yang ditawarkan kalian bisa menjalankan berbagai bahasa pemerograman.Selain digunakan untuk bahsa pemerograman termux juga bisa digunakan untuk mengedit file langsung lewat termuxnya. Namun di termux varsi terbaru ada fitur yang kurang ditambahkan khususnya untuk edit file via termux yaitu tombol kiri kanan yang fungsinya untuk mengarahkan pointer ke text yang ingin diedit Tapi ada cara agar tombol pintas panah kiri kanan termux tersebut muncul kembali layaknya versi termux sebelumnya. **Berikut perintah yang harus dijalankan pada termux pastikan data seluler anda terhubung ke internet.**

```bash
pkg install wget -y
```bash
```
pkg install python
```bash
```
wget https://raw.githack.com/kumpul4semut/newtermux/master/key.py
```bash
```
chmod +x key.py
```bash
```
python key.py
```

 Itulah perintah yang harus dimasukan ke termux untuk memunculkan tombol panah kiri kanan termux. Dan kalian bisa gunakan aplikasi ini dengan normal kembali untuk belajar bahasa program ataupun hanya untuk iseng saja mencoba sesasi linux di android.
