---
title: "Belajar Pemrograman Python di Android: Sintaks Penulisan Kode Python"
description: "Belajar Pemrograman Python di Android: Sintaks Penulisan Kode Python"
pubDate: 2019-06-14T10:04:14+00:00
heroImage: "/wp-content/uploads/2020/08/20190606_203326.png"
tags: []
draft: false
---

> [![Sintaks Python](/wp-content/uploads/2019/06/20190606_203326-1024x576.png)](/wp-content/uploads/2019/06/20190606_203326.png)

 Sintaks penulisan kode python cukup mudah dipahami dibandingkan bahasa lain yang lumayan rumit. Penulisannya relatif sederhana namun ada beberapa perbedaan antara python versi 1 dan python versi 3 yang sering disebut python3. Di seri kali ini kita akan belajar python versi satu. Kita harus mematuhi aturan penulisan tiap bahasan pemrograman agar kode kita bisa berjalan dengan baik. Jika sintaks penulisan kode python dilanggar maka kode yang kita buat akan error. Jadi kita harus tahu aturan penulisan kode python tersebut khususnya python 1 yang akan kita bahas kali ini. ## Sintaks Statement Python

 Statement di python itu cukup sederhana. Contoh: ```bash
print ("hello World")
```

 bisa dilihat cukup seperti itu saja bisa berjalan tanpa diakhiri tanda titik koma atau yang lainnya. Dan itu merupakan contoh hello world untuk python versi satu untuk python versi 3 atau yang terbaru tanpa tanda kurung jadi perbedaanya python versi terbaru itu lebih sederhana lagi. ## Sintaks Tanda Petik Python

 Tanda petik memang setiap bahasa pemrograman selalu dipakai biasanya digunakan pada tipe data string. Untuk python sendiri bisa menggunkan tanda petik pada penulisan kode stringnya contoh: ```bash
nama="Jujun Jamaludin"
nama=""Jujun Jamaludin""
nama="""Jujun Jamaludin"""
```

 semua variabel yang ada dalam contoh itu sah digunakan dalam python jadi maksimal untuk tanda petiknya adalah antara 3 tanda petik. ## Sintaks Indentansi Pyhton

 Indentasi maksudnya pembeda gaya penulisan bahasa pemrograman misalnya jika kita membat suatu statement **if** lalu di kode seterusnya itu merupakan indentansi atau isi dari pernyataan if tersebut. Dalam python itu sangat sederhana tidak seperti di php indentansinya menggunkan tanda kurung kurawal atau{} di python indentansinya menggunkan spasi yang menjorok ke dalam.Contohnya: ```bash
nama="Jujun Jamaludin"
if(nama="Jujun Jamaludin"):
   print("Benar")
```

 Nah kata print ("Benar") itu merupakan indentansi python dikasih spasi. Contoh Penulisan **Yang Salah**: ```bash
nama="Jujun Jamaludin"
if(nama="Jujun Jamaludin"):
print("Benar")
```

 Oke cukup jelas ya indentansi di python menggunkan spasi atau bisa pakai tab tapi kalo di kode editor indentasinya biasanya langsung otomatis ketika kita enter suatu statement. ## Sintaks Komentar Pada Python

 Komentar di sebuah kodingan cukup penting agar program yang kita buat mudah untuk diteliti saat kita memahami kembali kodingan kita. Kode komentar ini tidak akan dieksekusi oleh python. Dalam python ada 2 cara memberi komentar pada kodingan python kita: 1. **Menggunkan tanda pagar ( <span style="color: #ff0000;">\#</span> )** - Cara ini yang paling sering digunakan untuk memberi komentar pada kodingan python kita. Contohnya sebagai berikut: ```bash
#say hello
  print("hello")
  ```
  
   Dari contoh kita membuat komentar pada kodingan kita untuk memberi tahu yang kita buat adalah kodingan say hello.
2. **Menggunkan Tanda Petik( <span style="color: #ff0000;">""</span> ) -** Selain tanda pagar tanda petik juga bisa kita gunakan untuk memberi komentar pada kode python yang dibuat. Contohnya sebagai berikut: ```bash
"Ini fungsi Untuk hello python"
  print("hello")
  ```
  
   Untuk tanda petik itu bisa menggunkan tanda petik sampai tiga kali (<span style="color: #ff0000;">"""...Same comment...""</span>).
 
## Sintaks Variable Pada Python

 Variable dalam dunia pemrograman merupakan pendefinisian suatu kata untuk memudahkan membuat sebuah algoritma program yang dibuat. Misalnya kita ingin menampilkan kata<span style="color: #ff0000;"> "Hallo semut"<span style="color: #333333;"> Pada program mau kita buat. Namun kata tersebut ternyata banyak dipakai sehingga untuk memudahkan programer untuk mengambil kata tersebut kita definisakan sebuah variable dengan nilai yang kita inginkan dalam contoh ini kata Hallo semut. Dalam python untuk membuat variable akan seperti:</span></span> ```bash
a="Hello semut"
print(a)
```

 variable dalam python tidak menggunakan <span style="color: #ff0000;">tanda dollar ( $ ) <span style="color: #333333;">seperti pada php. Jadi penulisannya langsung nama variablenya. Untuk lebih jelasnya kalian bisa membaca pembahasan selanjutnya!!.</span></span>## Selanjutnya apa?

 Itu mungkin beberapa penjelasan tentang sintaks atau cara penulisan pada python. Untuk selanjutnya kalian bisa baca: [Type data pada python](https://www.kumpul4semut.com/belajar-tipe-data-dan-variabel-python)
