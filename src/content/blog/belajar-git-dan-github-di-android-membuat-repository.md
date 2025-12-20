---
title: "Belajar Git dan Github di Android: Membuat Repository"
description: "Belajar Git dan Github di Android: Membuat Repository"
pubDate: 2019-07-01T02:03:49+00:00
heroImage: "/wp-content/uploads/2020/08/20190630_191923.png"
tags: ['git', 'github', 'android', 'termux', 'repository']
draft: false
---

Repository git dan github Repository merupakan istilah untuk folder yang sudah di inisialiasi sebagai folder yang akan dipantau git. Pada dasarnya bentuk folder itu sama namun jika folder yang kalian buat diubah menjadi repository maka secara otomatis git akan memantau perubahan isi dari folder tersebut yang dinamakan repository atau biasa disebut repo. 

Untuk mengubah folder yang kita buat menjadi repository itu sangat mudah. Bahkan sekarang dengan androidpun bisa. Jika kalian suka dengan window maka kalian harus menginstall aplikasi gitnya. Nanti git akan memberi terminal baru di window kalian yang berfungsi untuk melakukan perintah git.

### Membuat Repository di Android Menggunakan Termux

 Sudah saya katakan saya akan lebih banyak tutorial untuk android dan linux karena itu os system yang saya pakai dan menurut saya sangat enak digunakan. Membuat repository folder di android: 1.Buat sebuah folder terlebih dahulu bisa menggunakan manage folder bawaan handpone. Disini saya contohkan saya membuat folder dengan nama git di penyimpanan internal handphone saya. Masuk ke aplikasi termux lalu arahkan termux ke folder tujuan dengan command: 
```bash
cd /sdcard
```

 command diatas digunakan untuk mengarahkan termux ke penyimpanan memori telepon. 2.Untuk mengecek apakah kita benar di folder penyimpanan internal handphone kita. Bisa masukan command: 
```bash
ls
```

 maka akan muncul folder-folder yang ada di memori internal kita termasuk folder bernama git yang telah kita buat tadi seperti ini gambarnya: [![Repository Git](/wp-content/uploads/2019/07/20190701_080019-1024x576.png)](/wp-content/uploads/2019/07/20190701_080019.png) Repository Git 3.Lalu untuk mengubah folder git tersebut menjadi sebuah repository maka masukan command: 
```bash
git init [nama folder]
```

 Ubah nama folder sesuai nama folder yang mau dibuat jadi repo di contoh ini saya akan menguba folder bernama git menjadi repo maka commandnya akan menjadi 
 ```bash
git init git
```

 git diakhir itu merupakan nama foldernya. Baca juga: [Cara Install Git di Termux](/blog/belajar-git-dan-github-di-android-persiapan-dan-installasi/) 4.Untuk mengecek apakah foldernya sudah berubah menjadi repository git kalian harus mengarahkan termux kalian ke folder yang sudah di init tadi dalam contoh saya folder git maka untuk mengubahnya di termux masukan command. 
 ```bash
cd [nama folder]
# dalam contoh nama foldernya git dan kita sudah berada di folder memory internal maka akan menjadi
cd git
git status
```

 Jika kalian masih bingung dengan mengakses folder di termux bisa baca: [Belajar directory termux](/). Lalu jika benar folder yang kita buat sudah menjadi sebuah repository maka aan muncul seperti ini [![git status repo](/wp-content/uploads/2019/07/20190701_082147-1024x576.png)](/wp-content/uploads/2019/07/20190701_082147.png) git status repo Akan muncul branch namanya master jadi master ini nama branch defualtnya git. Beda jika saya melakukan git status di folder yang belum diubah menjadi repository maka munculnya akan begini > [![bukan repository](/wp-content/uploads/2019/07/20190701_082623-1024x576.png)](/wp-content/uploads/2019/07/20190701_082623.png) bukan repository

 Bisa agan-agan liat akan muncul fatal error dst.. ### Cara Membuat Repository di Github

 Untuk membuat folder repository di website github jauh lebih mudah. Namun pada akhirnya keduanya kita akan pakai untuk mengatur project program kita. Jadi biasanya kita akan membuat repo di local atau dimemory komputer kita lalu jika sudah selesai kita upload ke github. Membuat repository di github: 1.Login dahulu ke akun github sobat semua. 2.Jika melalui komputer maka tinggal pilih menu ples lalu pilih new repository [![](/wp-content/uploads/2019/07/menambah-repositori-1024x576.png)](/wp-content/uploads/2019/07/menambah-repositori.png) Jika melalui android tidak menemukan menu ples tersebut langsung saja masuk ke link <https://github.com/new> syaratnya tentunya kalian harus login ke github dahulu. Dan akan terlihat seperti ini [![](/wp-content/uploads/2019/07/20190701_085453-1024x576.png)](/wp-content/uploads/2019/07/20190701_085453.png) Mungkin Segitu dulu jika masih kurang jelas kalian bisa menonton video tutorialnya di channel kumpul4smut oke. 
 ## Selanjutnya Apa?

- [Perintah dasar git ](https://www.kumpul4semut.com)
