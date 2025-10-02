---
id: 7
title: 'Cara Memberi Warna Pada kode Script Terminal  dan Termux  ( Command Prompt )'
date: '2019-05-10T09:36:00+00:00'
author: 'Jujun Jamaludin'
layout: post
guid: 'https://www.kumpul4semut.com/cara-memberi-warna-pada-kode-script-terminal-dan-termux-command-prompt/'
permalink: /cara-memberi-warna-pada-kode-script-terminal-dan-termux-command-prompt/
blogger_blog:
    - www.kumpul4semut.com
blogger_author:
    - kumpul4semut
blogger_permalink:
    - /2019/05/cara-memberi-warna-pada-kode-script.html
blogger_internal:
    - /feeds/7876980908934993835/posts/default/8502783994239074185
wli_pp_post_views_count:
    - '5883'
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
image: /wp-content/uploads/2020/08/20190510_165303.png
categories:
    - Termux
tags:
    - 'kode warna terminal linux'
    - 'warna di termux'
---

<div dir="ltr" style="text-align: left;"><div style="text-align: justify;"> **Terminal atau command promt -**  Merupakan bagian terpenting dari sebuah system computer. Hampir semua komputer memiliki terminal bahkan di android juga sudah banyak aplikasi terminal ini. Terminal mampu menjalankan semua program hardware ataupun software di komputer kita. Karena terminal ini langsung terhubung ke kernel system computer. [caption id="attachment_29" align="aligncenter" width="640"][![kode warna pada terminal, termux](https://www.kumpul4semut.com/wp-content/uploads/2019/05/20190510_165303-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/05/20190510_165303.png) kode warna pada terminal, termux[/caption] </div><div style="text-align: justify;"></div><div style="text-align: justify;">kernel ini merupakan program komputer yang menjadi inti dari sebuah system operasi. Sehingga dengan terminal kita bisa melakukan apa saja yang kita mau perintahkan ke computer kita. Mulai dari membuat folder menghapus dsb.</div><div style="text-align: justify;"></div><div style="text-align: justify;">Tak jarang kita membuat aplikasi untuk terminal ini. Karena mudah digunakan dan langsung berjalan sebagaimana yang kita buat menggunakan bahasa program yang kita bisa. Untuk tampilan terminal biasanya kurang bersahabat untuk user permula yang baru mau belajar karena di terminal ini jarang sekali tombol layaknya aplikasi lain yang serba klik.</div><div style="text-align: justify;"></div><div style="text-align: justify;">Maka dari itu agar program yang kita buat lebih sedikit menarik kita bisa memberi warna untuk output program yang dibuat diterminal ini. Untuk membuat output warna di terminal tidak ada yang namanya css seperti kita ngoding untuk website. Dan untuk kali ini saya akan jelaskan bagaimanan memberi warna pada terminal tersebut.</div><div style="text-align: justify;"></div><div style="text-align: justify;"> Berikut kode warnanya. |  | <th>Kode</th> |  | <th>Warna</th> |  |
|---|---|---------------|---|----------------|---|
 |  | 33\[0;32m |  | Green |  |
 |  | 33\[32;1m |  | GreenLight |  |
 |  | 33\[0;36m |  | Blue |  |
 |  | 33\[36;1m |  | BlueLight |  |
 |  | 33\[31;1m |  | Red |  |
 |  | 33\[37;1m |  | White |  |
 |  | 33\[30;1m |  | Black |  |
 |  | 33\[33;1m |  | Yellow |  |
 |  | 33\[1;33m |  | YellowLight |  |

 </div><div style="text-align: justify;"> Itu kode warnanya dan untuk cara pemasangannya tiap bahasa pemerograman agak beda. Tergantung bagaimana syntak output dari masih-masing bahasa programnya. Disini ada contoh untuk bahasa progam python dan bash. Karena kedua bahasa program ini yang sering dipakai untuk membuat script terminal. ### Output warna di python

<div> Untuk python sendiri itu ada beberapa versi ada versi python , python2, python3. Karena masing-masing versi python tersebut syntak penulisan outputnya berbeda. #### python atau python1

 ```

 merah="33[31;1m"
 print (merah+"Output merah")

```

#### python2 atau python3

 ```

 merah="33[31;1m"
 print merah+"Output merah"
```

 </div> </div><div></div> Disitu saya menambahkan kode warna tersebut ke sebuah variable merah untuk perbedaannya terdapat pada tanda kurung di python 1 kalau tidak pakai kurung maka syntak tersebut akan error. ### Output warna di bash script

<div> Bash ini merupakan perintah biasa di terminal khusunya linux. Namun kadang kita gunakan untuk dijadikan sebuah aplikasi Yang isinya merupakan kumpulan perintah bash yang sudah diatur seperti yang kitainginkan. Penulisan output agar berwarna di bash itu seperti ini. </div><div style="text-align: justify;">#### Bash

 ```

 biru=`echo "33[0;36m"`
 echo -e"{$biru}==biru output=="
 #atau
 echo -e"$biru"
 #maka output apa aja yang dieluarkan selanjutnya akan biru

```

 </div><div style="text-align: justify;">Jadi itu saja untuk membuat output warna di terminal. Langsung experimen sendiri biar tambah paham. Silahkan berkomentar jika ada pertanyaan.</div><div style="text-align: justify;"></div></div>