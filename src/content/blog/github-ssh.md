---
title: "Cara Mengatur SSH Key untuk Github di Termux"
description: "Tutorial lengkap mengatur SSH key untuk GitHub di Termux agar tidak perlu memasukkan password saat push"
pubDate: 2019-07-05T06:58:58+00:00
heroImage: "/wp-content/uploads/2019/07/20190705_132124-1.png"
tags: ["github", "ssh", "termux", "git", "tutorial"]
draft: false
---

# SSH GITHUB

SSH merupakan salah satu cara untuk melakukan koneksi dari git ke github. Selain menggunakan SSH, ada cara yang lebih mudah yaitu menggunakan metode **HTTPS**. Kekurangannya, kalian harus selalu memasukkan username dan password kalian ketika ingin melakukan push repo ke github.

![Github ssh](/wp-content/uploads/2019/07/20190705_132124-1024x576.png)

Agar kita bisa menggunakan SSH GitHub ini, kita harus melakukan beberapa pengaturan dahulu.

## 1. Menginstall SSH

Untuk melakukan pengaturan pada SSH, sebelumnya kita harus menginstall SSH dahulu di terminal kita. Oke kali ini kita akan menggunakan aplikasi android kesukaan yaitu termux.

Baca juga: [Cara Membuat Website Create SSH](https://www.kumpul4semut.com/cara-membuat-website-create-ssh-dan-vpn-menggunkaan-php/)

Masukkan perintah berikut untuk menginstall SSH di termux:

```bash
pkg install openssh
```

## 2. Membuat Key SSH

Selanjutnya kita akan membuat key untuk SSH yang akan kita buat. Perintahnya sebagai berikut:

```bash
ssh-keygen
```

Lalu masukkan nama key yang diinginkan, silahkan bebas saja! Di sini saya akan menamakan dengan "semut". Lalu untuk passphrase dikosongkan saja.

![SSH Keygen](/wp-content/uploads/2019/07/20190705_132500-1024x576.png)

Maka nanti akan terbuat dua file baru dengan nama yang sesuai dengan yang kita masukkan tadi. Bisa lihat gambar untuk lebih jelasnya seperti ini:

![SSH Key Files](/wp-content/uploads/2019/07/20190705_133049-1024x576.png)

## 3. Menjalankan SSH Agent dan Load SSH Key

Untuk menjalankan SSH agent kalian cukup masukkan perintah:

```bash
ssh-agent /bin/bash
```

Selanjutnya load SSH key-nya dengan cara:

```bash
ssh-add nama_key_tadi
```

Karena tadi saya memberi nama key saya dengan "semut", maka untuk load SSH-nya akan menjadi:

```bash
ssh-add semut
```

Lihat gambar agar lebih jelas!

![SSH Add](/wp-content/uploads/2019/07/20190705_133422-1024x576.png)

Jika ingin mengeceknya, kalian bisa menggunakan perintah:

```bash
ssh-add -l
```

![SSH List](/wp-content/uploads/2019/07/20190705_133639-1024x576.png)

## 4. Menambahkan SSH Key ke GitHub

Untuk mendapatkan key SSH-nya, kalian bisa temukan dengan perintah:

```bash
cat nama_key.pub
```

Nama key yang saya buat adalah "semut", maka perintahnya akan menjadi:

```bash
cat semut.pub
```

Lalu copy key tersebut, liat gambar!

![Cat SSH Key](/wp-content/uploads/2019/07/20190705_133921-1024x576.png)

Atau kalian bisa memindahkan file .pub dulu ke memory internal dengan perintah:

```bash
cp nama_key.pub /sdcard
```

Lalu buka dengan file explorer atau yang lainnya.

![Copy to SD Card](/wp-content/uploads/2019/07/20190705_133955-1024x576.png)

Lalu login ke akun GitHub kalian. Lalu masuk ke menu [settings keys](https://github.com/settings/keys). Pilih Add New Key, lalu masukkan key yang sudah dibuat. Untuk judulnya di sini saya samakan dengan nama key yang saya buat.

![Add SSH Key](/wp-content/uploads/2019/07/20190705_134033-1024x576.png)

Jika Key yang dimasukkan benar, maka kalian akan mendapat email key berhasil ditambahkan ke email GitHub kalian.

## 5. Menguji Koneksi SSH Github

Kalian bisa gunakan perintah berikut untuk menguji koneksi SSH GitHub:

```bash
ssh -T git@github.com
```

![Test SSH Connection](/wp-content/uploads/2019/07/20190705_134131-1024x576.png)

Setelah itu kalian bisa gunakan fitur SSH ini ketika remote, clone, push, pull, dll. Atau baca: [Perintah Dasar Git dan Github](https://www.kumpul4semut.com/perintah-dasar-git-yang-wajib-diketahui-dan-sering-digunakan/)

Jadi begitu cara mengkonekan GitHub dengan menggunakan SSH. Jika terjadi error lagi, silahkan ulangi langkah ke 3. Sekian, semoga bermanfaat.

Untuk referensi: [GitHub help](https://help.github.com/en/articles/testing-your-ssh-connection)
