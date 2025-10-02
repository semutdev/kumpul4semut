---
title: "Mengelola Inputan Python Yang Benar"
description: "Mengelola Inputan Python Yang Benar"
pubDate: 2019-07-20T03:57:08+00:00
heroImage: "/wp-content/uploads/2020/08/20190720_085526.png"
tags: []
draft: false
---

Mengelola inputan python dalam membuat sebuah aplikasi memang wajib kita ketahui. Kurang efektif jika aplikasi yang kita buat tidak bisa berkomunikasi dengan pengguna aplikasi kita. Seperti pengguna aplikasi kita harus mengedit script kita untuk mengisi nilai dari suatu variable. [![mengelola inputan python](/wp-content/uploads/2019/07/20190720_085526-1024x576.png)](/wp-content/uploads/2019/07/20190720_085526.png) Sebelumnya kita juga sudah belajar [variable dan nilai pada python ](https://www.kumpul4semut.com/belajar-tipe-data-dan-variabel-python) dan kita sudah membahas bagaimana melakukan logika dalam variable yang sudah kita buat dalam [operator untuk pemrograman python](https://www.kumpul4semut.com/jenis-operator-dalam-pemrograman-python) tentunya kita tidak ingin aplikasi yang kita buat hanya sekedar proses lalu output. Kita ingin ada dimana ketika user menjalankan script kita ada komunikasi yaitu dengan menyuruh user untuk memasukan data yang dibutuhkan. Selanjutnya aplikasi kita akan memprosesnya lalu mengembalikan atau output sesuai dengan operasi yang sudah kita buat.

## Mengelola Inputan Python dari Keyboard

 Pada python ada 2 fungsi untuk mengambil inputan yaitu **input()** dan **raw\_input()** untuk mengambil inputan dari keyboard. Apa perbedaan **input()** dengan **raw\_input()** ? - **input() -** Digunakan untuk mengambil data integer atau angka.
- **raw\_input() -** Digunakan untuk mengambil data string atau huruf.
 
 Namun di python versi 3 atau python3 fungsi inputan sudah menjadi satu yaitu **input()** . Sekarang kita akan menggunakan python versi satu saja untuk tutorial kali ini. Cara penggunaan inputan: ```bash
#inisial for input
nama_variable = input("Same Inform")
```

 Jika kita jalankan kode tersebut maka akan: [![mengelola inputan python](/wp-content/uploads/2019/07/input1-1024x590.png)](/wp-content/uploads/2019/07/input1.png) Pejelasan! Disini saya menggunakan python versi satu lalu saya memasukan data string dalam inputannya maka python akan menampilkan error karena fungsi **input()** di python 1 itu hanya untuk mengambil data angka. Jika data yang kita ingin ambil itu string maka kita harus menggunakan fungsi **raw\_input()**  Jadi kodenya akan seperti ini: ```bash
#inisial for input
nama_variable = raw_input("Same Inform ")
```

 Jika kita jalankan hasilnya: [![mengelola inputan python](/wp-content/uploads/2019/07/input2-1024x590.png)](/wp-content/uploads/2019/07/input2.png) Penjelasan! Setelah kode dijalankan lalu kita memasukan data string yang saya tandai putih. Ketika dienter akan menampilkan kosong karen kita tidak melakukan proses apapun terhadap variable inputan yang sudah kita buat. ## Melakukan Proses dan Outuput Dari Inputan Python

 Kita sudah mempelajari operator dan percabangan if else dan elif. Maka sekarang kita akan mencoba membuat sebuah aplikasi dengan jalur. [![input proses output](/wp-content/uploads/2019/07/20190720_101751-300x300.png)](/wp-content/uploads/2019/07/20190720_101751.png) Aplikasi yang kita buat akan sederhana yaitu: ```bash
#inisial for input
data = raw_input("Masukan data? ")

#proses
if (data == "semut"):
	#output proses
	print("Benar")
```

 hasilnya: [![](/wp-content/uploads/2019/07/input3-1024x590.png)](/wp-content/uploads/2019/07/input3.png) Penjelasan! Pertama saya membuat variabel bernama data yang nilainya akan diisi oleh inputan yang dimasukan. Selanjutnya saya membuat operator if yang jika variable data bernilai semut keluarkan benar. ## Output Python Penggabungan

 Oke disini kita akan mencoba penggabungan untuk mengeluarkan data dari inputan dan kita ingin menambahkan suatu kata contohnya: ```bash
#inisial for input
data = input("Berapa Umur? ")

#output gabungan
print(str(data)+" year")
```

 Disitu kita ingin mengambil data umur user lalu di outputnya kita ingin menambahkan kata year. Untuk penggabungan menggunkan tanda tambah ( + ). Fungsi str disitu agar data angka yang didapat dari inputan bisa di gabung dengan data string. Dan kita menggunakan python 1 untuk mengambil data angka jadi **fungsinya input() bukan raw\_input()**. Hasilnya: [![](/wp-content/uploads/2019/07/input4-1024x590.png)](/wp-content/uploads/2019/07/input4.png)## Kesimpulannya

 Untuk mengambil inputan dalam python itu cukup mudah. Dan lebih dipermudah lagi jika kita menggunakan python3. yang hanya menggunkan satu fungsi untuk semua jenis inputan yaitu **input()** .Namun kita juga harus tahu bagaimana perkembangan python. ## Selanjutnya apa?

 Perulangan atau looping pemrograman python
