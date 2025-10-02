---
id: 376
title: 'Percabangan Python  If Else dan Elif'
date: '2019-07-17T08:57:47+00:00'
author: 'Jujun Jamaludin'
layout: post
guid: 'https://www.kumpul4semut.com/?p=376'
permalink: /percabangan-python-if-else-dan-elif/
wli_pp_post_views_count:
    - '1891'
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
image: /wp-content/uploads/2020/08/20190717_161705.png
categories:
    - Python
tags:
    - 'belajar python if'
    - 'dan else'
    - elseif
    - 'python percabangan'
---

Dalam membuat sebuah program, Logika menjadi hal yang paling utama. Di artikel sebelumnya kita sudah menyinggung tentang logika. Dalam pembahasan [Jenis Operator Dalam Python](https://www.kumpul4semut.com/jenis-operator-dalam-pemrograman-python/). Percabangan dalam python ini juga masuk ke operator python dan yang paling sering ditgunakan.

> [![Percabangan Python If Else dan Elif](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190717_161705-1024x576.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/20190717_161705.png)

 Untuk membuat sebuah kondisi dalam python kita harus tahu bagaiman penulisan kode python. Karena penulisan kode tiap bahasa pemrograman itu berbeda. Baca juga: [Sintaks Penulisan kode python](https://www.kumpul4semut.com/belajar-python-sintaks-penulisan-kode) Perkondisian dalam python juga memiliki 3 percabangan yaitu: 1. if
2. else
3. elif
 
 Oke mari kita bahas semuanya... ## 1. Python Percabangan IF

 Dalam bahasa inggris arti dari if adalah jika. Jadi kita juga bisa mengartikan kondisi if ini sebagai jika. Kita pernah pasti belajar logika ketika sekolah bukan fungsi jika dan maka merupakan logika awal. Contoh penggunaan if dalam python, Lihat kode berikut ini! ```
<pre class="lang:default decode:true">#create variable
umur=17

#if kodisi
if (umur < 20):
	#indentansi
	print("masih muda")
```

 Maka hasilnya akan menjadi: [![](https://www.kumpul4semut.com/wp-content/uploads/2019/07/kodisi-if-1024x590.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/kodisi-if.png) Penjelasan lengkapnya! Oke disini saya membuat kode python versi 1 jadi untuk pyhton versi terbaru kalian bisa hilangkan tanda kurungnya saja. saya membuat sebuah variable bernama umur yang bernilai 17. Lalu saya membuat kondisi if lalu digabung operator pembanding lebih kecil dari 20 maka program akan menampilkan masih muda. ## 2. Python Percabangan Else

 Else digunakan jika kalian ingin membuat dua kondisi. Jadi else ini lawan dari kondisi if. Semua kodisi yang tidak masuk dalam if tadi maka akan else yang akan menanggapinya. Kita ambil contoh yang tadi. ```
<pre class="lang:default decode:true ">#create variable
umur=25

#if kodisi
if (umur < 20):
	#indentansi
	print("masih muda")
else:
	print ("sudah tua")
```

 Jika kita jalankan kode diatas. Variable umur sudah kita ubah menjadi lebih dari 20 maka kondisi tersebut akan masuk ke else. Bagaimana jika kita tidak memasukan kondisi else ini?. Yang terjadi program kita akan blank tidak merespon apapun. Lihat hasilnya! [![](https://www.kumpul4semut.com/wp-content/uploads/2019/07/else-1024x590.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/else.png)## 3. Python Percabangan Elif

 Kondisi elif digunakan jika kodisi yang ingin kita buat itu lebih dari dua kondisi. Sebenarnya kita juga bisa membuat kondisi if didalam if namun kita ingin python mengecek if kedua kita tingkatannya sama dengan if yang pertama. Maksudnya kita ingin if yang kedua ini dicek walaupun if yang pertama tidak memenuhi. Jika bingung saya akan membuat contoh. ```
<pre class="lang:default decode:true ">#create variable
umur=25

#if kodisi
if (umur < 20):
	#indentansi
	print("masih muda")
elif(umur == 25):
	print("agak tua")
else:
	print ("sudah tua")
```

 Jika dijalankan maka hasilnya: [![Percabangan Python If Else dan Elif](https://www.kumpul4semut.com/wp-content/uploads/2019/07/elif-1024x590.png)](https://www.kumpul4semut.com/wp-content/uploads/2019/07/elif.png) Penjelasnya! Disini kita mempunyai 3 kondisi yang pertama jika umurnya kurang dari 20 maka kita print masih muda. Lalu jika sama dengan 25 maka kita print agak tua. Dan jika tidak dari itu semua maka kita print tua. Nilai dari umur kita beri nilai 25 maka kondisi yang memnuhi adalah kondisi elif kita. Kalian bisa membuat elif berapapun jadi tidak hanya satu. ## Kesimpulannya

 Dalam kodisi ini kita gunakan sesuai kebutuhan saja. Kalo kebanyak kodisipun kita malah akan semakin bingung tentang apa yang kita buat. Jadi dalam membuat sebuah perkodisian harus rapi dan tentunya kita sebagai yang membuat kodenya harus mengerti apa yang kita logikan dengan kode python kita. Segitu dahulu artikelnya. Terima kasih. ## Selanjutnya apa?

 Inputan dalam pemrograman python My refrensi: [W3schools](https://www.w3schools.com)