---
id: 236
title: 'Belajar Git dan Github di Android: Membuat Repository'
date: '2019-07-01T02:03:49+00:00'
author: 'Jujun Jamaludin'
layout: post
guid: 'https://www.kumpul4semut.com/?p=236'
permalink: /belajar-git-dan-github-di-android-membuat-repository/
wli_pp_post_views_count:
    - '1285'
zakra_layout:
    - tg-site-layout--customizer
zakra_remove_content_margin:
    - '0'
zakra_transparent_header:
    - customizer
zakra_page_header:
    - '1'
zakra_logo:
    - '0'
image: /wp-content/uploads/2020/08/20190630_191923.png
categories:
    - 'Git dan Github'
tags:
    - 'Cara membuat repository di android'
    - 'Repository git di termux'
---

\[caption id="attachment\_237" align="aligncenter" width="640"\][![Repository git dan github](https://www.kumpul4semut.com/wp-content/uploads/2019/06/20190630_191923-1024x576.png "Repository git dan github")](https://www.kumpul4semut.com/wp-content/uploads/2019/06/20190630_191923.png) Repository git dan github\[/caption\] Repository merupakan istilah untuk folder yang sudah di inisialiasi sebagai folder yang akan dipantau git. Pada dasarnya bentuk folder itu sama namun jika folder yang kalian buat diubah menjadi repository maka secara otomatis git akan memantau perubahan isi dari folder tersebut yang dinamakan repository atau biasa disebut repo. Untuk mengubah folder yang kita buat menjadi repository itu sangat mudah. Bahkan sekarang dengan androidpun bisa. Jika kalian suka dengan window maka kalian harus menginstall aplikasi gitnya. Nanti git akan memberi terminal baru di window kalian yang berfungsi untuk melakukan perintah git.

### Membuat Repository di Android Menggunakan Termux

 Sudah saya katakan saya akan lebih banyak tutorial untuk android dan linux karena itu os system yang saya pakai dan menurut saya sangat enak digunakan. Membuat repository folder di android: 1.Buat sebuah folder terlebih dahulu bisa menggunakan manage folder bawaan handpone. Disini saya contohkan saya membuat folder dengan nama git di penyimpanan internal handphone saya. Masuk ke aplikasi termux lalu arahkan termux ke folder tujuan dengan command: ```
<pre class="lang:default decode:true ">cd /sdcard
```

 command diatas digunakan untuk mengarahkan termux ke penyimpanan memori telepon. 2.Untuk mengecek apakah kita benar di folder penyimpanan internal handphone kita. Bisa masukan command: ```
<pre class="lang:default decode:true ">ls
```

 maka akan muncul folder-folder yang ada di memori internal kita termasuk folder bernama git yang telah kita buat tadi seperti ini gambarnya: \[caption id="attachment\_241" align="aligncenter" width="640"\][![Repository Git](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_080019-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_080019.png) Repository Git\[/caption\] 3.Lalu untuk mengubah folder git tersebut menjadi sebuah repository maka masukan command: ```
<pre class="lang:default decode:true ">git init [nama folder]
```

 Ubah nama folder sesuai nama folder yang mau dibuat jadi repo di contoh ini saya akan menguba folder bernama git menjadi repo maka commandnya akan menjadi ```
<pre class="lang:default decode:true ">git init git
```

 git diakhir itu merupakan nama foldernya. Baca juga: [Cara Install Git di Termux](https://www.kumpul4semut.com/belajar-git-dan-github-di-android-persiapan-dan-installasi/) 4.Untuk mengecek apakah foldernya sudah berubah menjadi repository git kalian harus mengarahkan termux kalian ke folder yang sudah di init tadi dalam contoh saya folder git maka untuk mengubahnya di termux masukan command. ```
<pre class="width-set:true lang:default highlight:0 decode:true">cd [nama folder]
#dalam contoh nama foldernya git dan kita sudah berada di folder memory internal maka akan menjadi
cd git
```

 ```
<pre class="lang:default decode:true">git status
```

 Jika kalian masih bingung dengan mengakses folder di termux bisa baca: [Belajar directory termux](https://www.kumpul4semut.com). Lalu jika benar folder yang kita buat sudah menjadi sebuah repository maka aan muncul seperti ini \[caption id="attachment\_243" align="aligncenter" width="640"\][![git status repo](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_082147-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_082147.png) git status repo\[/caption\] Akan muncul branch namanya master jadi master ini nama branch defualtnya git. Beda jika saya melakukan git status di folder yang belum diubah menjadi repository maka munculnya akan begini > \[caption id="attachment\_244" align="aligncenter" width="640"\][![bukan repository](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_082623-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_082623.png) bukan repository\[/caption\]

 Bisa agan-agan liat akan muncul fatal error dst.. ### Cara Membuat Repository di Github

 Untuk membuat folder repository di website github jauh lebih mudah. Namun pada akhirnya keduanya kita akan pakai untuk mengatur project program kita. Jadi biasanya kita akan membuat repo di local atau dimemory komputer kita lalu jika sudah selesai kita upload ke github. Membuat repository di github: 1.Login dahulu ke akun github sobat semua. 2.Jika melalui komputer maka tinggal pilih menu ples lalu pilih new repository [![](https://www.kumpul4semut.com/wp-content/uploads/2019/07/menambah-repositori-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/menambah-repositori.png) Jika melalui android tidak menemukan menu ples tersebut langsung saja masuk ke link <https://github.com/new> syaratnya tentunya kalian harus login ke github dahulu. Dan akan terlihat seperti ini [![](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_085453-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190701_085453.png) Mungkin Segitu dulu jika masih kurang jelas kalian bisa menonton video tutorialnya di channel kumpul4smut oke. ## Selanjutnya Apa?

- [Perintah dasar git ](https://www.kumpul4semut.com)