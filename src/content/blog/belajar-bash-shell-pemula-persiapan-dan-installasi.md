---
title: "Belajar Bash Shell Pemula Persiapan dan Installasi"
description: "Belajar Bash Shell Pemula Persiapan dan Installasi"
pubDate: 2019-07-08T03:09:10+00:00
heroImage: "/wp-content/uploads/2020/08/20190708_084428.png"
tags: []
draft: false
---

**Bash Shell -** Merupakan bukan suatu bahasa pemrograman layaknya python, php, dan javascript. Bash shell hanya sebuah program bahasa perintah untuk sistem operasi GNU. Sistem operasi GNU bermacam-macam ada linux, unix dsb. Dan sekarang GNU juga digunakan di android yang dasarnya menggunakan sistem operasi linux. [![bash shell](/wp-content/uploads/2019/07/20190708_084428-1024x576.png)](/wp-content/uploads/2019/07/20190708_084428.png) bash shell Di android sekarang kita bisa menjalankan berbagai macam bahasa pemrograman termasuk program perintah bash shell ini. Untuk menjalankan bash shell di android kalian bisa menggunakan aplikasi terminal emulator, gnu root debian, termux. yang paling populer sekarang adalah termux. Baca Juga: [Apa itu termux, apakah aplikasi hacking?](https://www.kumpul4semut.com/apa-itu-termux/)## Persiapan Belajar Bash Shell

 Untuk kalian pengguna window, Sekarang window sudah bisa menjalankan kernel linux di dalam window dengan menggunakan Window Subsystem For Linux ( WSL ). Dengan WSL kalian bisa menjalankan perintah-perintah linux di window. Untuk pengguna android disarankan kalian menggunkan aplikasi termux. Lalu untuk pengguna Linux dan Mac ini biasanya sudah otomatis terinstall terminal yang tentunya bisa menjalankan bash shell. Sebelum kita membuat program bash shell pertama kita ada baiknya kita tahu manfaat bash shell terlebih dahulu. ## Manfaat Program Bash

- **Membuat program installasi server -** Kebanyak server untuk website biasanya menggunakan sistem operasi linux karena kemudahan dalam melakukan perintah langsung ke kernel sistem. Untuk merubah vps biasanya kita harus melakukan beberapa installasi yang harus di pasang mulai dari server, database, manage file dsb.
- **Langsung bisa diterjemahkan komputer -** Karena bash shell ini langsung bekerja ke kernel maka kita bisa dengan langsung memerintah sesuatu ke komputer kita.
- **Penulisan cukup mudah -** Untuk penulisan bash shell script ini cukup mudah dan ringkas. hampir mirip python.
- **Efisien -** Kenapa saya bilang efisien, Karena kita tidak perlu melakukan installasi server lagi seperi php kita harus menginstall apache. Bash shell bisa langsung dikerjakan.
 
## Macam-macam Program Shell

 Program untuk shell ini tidak hanya satu ada beberapa lainnya seperi: 1. Bourne shell (sh).
2. Bourne again shell(bash).
3. C shell (csh).
4. Korn shell (ksh).
5. dsb.
 
 yang sering dipakai biasanya bourne shell. ## Perintah Dasar Bash Shell

 Sebelum kalian membuat scripting bash sebaiknya anda telah mengetahui dan menggunakan perintah-perintah dasar shell baik itu internal command yang telah disediakan shell maupun eksternal command atau utility, seperti: - **cd, mv, cp, mkdir, ls, clear, rm, .....**
- Untuk utilitis seperti: **cut, chmod, chown, ...**
- dsb.
 
## Membuat Program Bash Shell Pertama

 Berikut langkah-langhnya: ### 1. Membuat file shell ( .sh )

 Silahkan buat file dengan format .sh misalnya tes.sh lalu masuka script sederhana ini: ```bash
#!/bin/bash
echo "Hello World"
```

 **Keterangan!** Dibagian atas kita mendefinisakn bahwa file yang kita buat adalah script bash. Lalu kode berikutnya kita ingin menampilkan kata hello world sama kayak php untuk menampilkan datanya. ### 2. Mengizinkan file untuk bisa dieksekusi

 Dalam linux ada 3 akses untuk file dan folder akses hanya untuk dibaca, bisa diubah, dan bisa dieksekusi. Nah.. untuk bash shell kita harus mengaktifkan ketiga akses ini. Jika tidak maka file ini akan ditolak oleh terminal untuk dieksekusi. Untuk mengizinkan filenya, Gunakan perintah: ```bash
chmod +x nama_file.sh
```

### 3. Menjalankan file

 Untuk menjalankannya sangat mudah kalian bisa, Gunakan perintah: ```bash
./nama_file.sh
```

 Mungkin itu dahulu untuk persiapan belajar bash shell semoga bermanfaat. Dan selalu nantikan artikel dari kumpul4semut. Saran dan kritik bisa disampaikan di kolom komentar atau langsung contact admin. ## Selanjutnya Apa?

- Belajar varable bash
 
`` Untuk Referensi : [Wikipedia](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
