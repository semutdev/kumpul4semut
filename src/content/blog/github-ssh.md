---
title: "Cara Mengatur SSH Key untuk Github di Termux"
description: "Cara Mengatur SSH Key untuk Github di Termux"
pubDate: 2019-07-05T06:58:58+00:00
heroImage: "/wp-content/uploads/2019/07/20190705_132124-1.png"
tags: []
draft: false
---

- - - - - -

 **SSH GITHUB -** Merupakan salah satu cara untuk digunakan koneksi dari git ke github. Selain menggunakan ssh ada cara yang lebih mudah yaitu menggunakan metode **HTTPS,** Kekurangannya kalian harus selalu memasukan username dan password kalian ketika ingin melakukan push repo ke github. [![Github ssh](/wp-content/uploads/2019/07/20190705_132124-1024x576.png)](/wp-content/uploads/2019/07/20190705_132124.png) Github ssh Agar kita bisa menggunakan ssh github ini kita harus melakukan beberapa pengaturan dahulu... ## 1.Menginstall SSH

 Untuk melakukan pengaturan pada ssh. Sebelumnya kita harus menginstall ssh dahulu di terminal kita. Oke kali ini kita akan menggunakan aplikasi android kesukaan yaitu termux. Baca juga: [Cara Membuat Website Create SSH](https://www.kumpul4semut.com/cara-membuat-website-create-ssh-dan-vpn-menggunkaan-php/) Masukan perintah berikut untuk menginstall ssh di termux! ```bash
pkg install openssh
```

## 2.Membuat Key SSH

 Selanjutnya kita akan membuat key untuk ssh yang akan kita buat. Perintahnya sebagai berikut! ```bash
ssh-keygen
```

 Lalu masukan nama key yang diinginkan silahkan bebas saja! Disini saya akan menamakan dengan semut. lalu untuk passphrase dikosongkan saja. Lihat gambar [![](/wp-content/uploads/2019/07/20190705_132500-1024x576.png)](/wp-content/uploads/2019/07/20190705_132500.png) Maka nanti akan terbuat dua file baru dengan nama yang sesuai dengan yang kita masukan tadi. Bisa lihat gambar untuk lebih jelasnya seperti ini! [![](/wp-content/uploads/2019/07/20190705_133049-1024x576.png)](/wp-content/uploads/2019/07/20190705_133049.png)## 3.Menjalankan SSH Agent dan Load SSH Key

 Untuk menjalankan ssh agent kalian cukup masukan perintah! ```bash
ssh-agent /bin/bash
```

 Selanjutnya load ssh keynya dengan cara ```bash
ssh-add nama_key_tadi
```

 Karena tadi saya memberi nama key saya dengan semut maka untuk load ssh nya akan menjadi <span style="color: #ff0000;">ssh-add semut <span style="color: #333333;">liat gambar agar lebih jelas!</span></span> [![](/wp-content/uploads/2019/07/20190705_133422-1024x576.png)](/wp-content/uploads/2019/07/20190705_133422.png) Jika ingin mengeceknya kalian bisa menggunkaan perintah: ```bash
ssh-add -l
```

> [![](/wp-content/uploads/2019/07/20190705_133639-1024x576.png)](/wp-content/uploads/2019/07/20190705_133639.png)

## 4.Menambahkan SSH Key Ke github

 Untuk mendapatkan key sshnya kalian bisa temukan dengan perintah: ```bash
cat nama_key.pub
```

 nama key yang saya buat adalah semut, maka perintahnya akan menjad <span style="color: #ff0000;">cat semut.pub .<span style="color: #333333;"> Lalu copy key tersebut liat gambar!</span></span> [![](/wp-content/uploads/2019/07/20190705_133921-1024x576.png)](/wp-content/uploads/2019/07/20190705_133921.png) Atau kalian bisa pindahkan file .pub dulu ke memory internal, Dengan Perintah. ```bash
cp nama_key.pub /sdcard
```

 lalu buka dengan xplorer atau yang lainnya. [![](/wp-content/uploads/2019/07/20190705_133955-1024x576.png)](/wp-content/uploads/2019/07/20190705_133955.png) lalu login ke akun github kalian. Lalu masuk ke menu [settings keys](https://github.com/settings/keys) . Pilih Add New Key, Lalu masukan key yang sudah dibuat. Untuk judulnya disini saya samakan dengan nama key yang saya buat. [![](/wp-content/uploads/2019/07/20190705_134033-1024x576.png)](/wp-content/uploads/2019/07/20190705_134033.png) Jika Key yang dimasukan benar maka kalian akan mendapat email key berhasil ditambahkan ke email github kalian ## 5.Menguji koneksi SSH Github

 Kalian bisa gunakan perintah berikut untuk menguji koneksi ssh github ```bash
ssh -T git@github.com
```

 [![](/wp-content/uploads/2019/07/20190705_134131-1024x576.png)](/wp-content/uploads/2019/07/20190705_134131.png) setelah itu kalian bisa gunakan fitur ssh ini ketika remote, clone, push, pull dsb. Atau baca: [Perintah Dasar Git dan Github](https://www.kumpul4semut.com/perintah-dasar-git-yang-wajib-diketahui-dan-sering-digunakan/) Jadi beigtu cara mengkonekan github dengan menggunkan ssh. Jika terjadi error lagi silahkan ulangi langkah ke 3. Sekian semoga bermanfaat. Untuk referensi : [Gihub help](https://help.github.com/en/articles/testing-your-ssh-connection)
