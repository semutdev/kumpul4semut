---
title: "Belajar Pemrograman Python di Android: Tipe Data dan Variabel Python"
description: "Belajar Pemrograman Python di Android: Tipe Data dan Variabel Python"
pubDate: 2019-06-15T02:16:45+00:00
heroImage: "/wp-content/uploads/2019/06/20190615_090159-1.png"
tags: []
draft: false
---

 Type data dan variabel tidak dapat dipisahkan dari bahasa pemrograman. Semua bahasa pemrograman pasti mempunyai cara penulisan variabel dan tipe datanya. **Tipe data** sendiri merupakan jenis data yang tersimpan dalam variabel, Sedangkan **variabel** merupakan tempat menyimpan data. Variabel sifatnya berubah ubah tergantung kita mengisinya. ## Cara Membuat Variabel di Python

 Untuk membuat variabel di python dapat ditulis seperti ini: 
 ```bash
Nama_Variabel = [Nilainya]
```

 Karena kita belajarnya melalui android khususnya menggunkan termux ( Terminal Linux ). Maka ada 2 cara untuk membuat programnya bisa membuat file python dengan ekstensi **.py** atau langsung di termuxnya. Untuk mencoba kode python yang sederhana bisa langsung di termuxnya saja baru jika kode yang kita buat panjang bisa dibuat file python. 
 ## Cara Install Python di Termux

 ```bash
pkg install python
```

 Untuk menjalankan python langsung di termux langsung saja ketik: 
```bash
python
```

 Maka termuxnya akan berubah menjadi: [![python termux](/wp-content/uploads/2019/06/20190615_091119-1024x576.png)](/wp-content/uploads/2019/06/20190615_091119.png)
## Membuat variabel python di termux

 Contohnya: 
```bash
variabel = "ini isinya"
```

 Ketika di enter maka variabel dengan nama variabel tersebut sudah bernilai. Untuk menampilkan isi variabel dapa menggunkan fungsi <span style="color: #ff0000;">print. <span style="color: #333333;">Maka akan jadi seperti ini:</span></span> 
```bash
>>>print(variabel)
ini isinya
>>>
```

 Jika kalian suka dengan mentimpan dulu ke file python maka penulisanya akan seperti ini: 
 ```bash
variabel = "ini isinya"
print(variabel)
```

 Simpan kode tersebut misalkan jadi file <span style="color: #ff0000;">test.py </span>untuk menjalankanya di termux kalian harus arahkan directory termux kalian ke folder tempat di simpannya file python tersebut. Untuk lebih jelasnya Baca: [Tentang Cara Akses Directory di Termux. ](https://www.kumpul4semut.com)</span></span>
 
 ## Menjalankan File Python di Termux

 Jika directory termux kalian sudah berada di file yang sudah diinginkan maka untuk menjalankan file pythonnya jadi: 
```bash
python [nama_file.py]
```

 Jika mengambil dari contoh akan menjadi: 
```bash
python test.py
```

## Aturan Penulisan variabel python

 Dalam penulisan variabel itu tidak sembarang tidak semua karakter bisa dibuat variabel berikut aturan penulisan variabel python: 1. Nama variabel tidak boleh sama dengan kata fungsi dasar python Misalnya: <span style="color: #ff0000;">if, else, while, dsb.</span>
2. <span style="color: #333333;">Tidak semua karakter bisa dibuat untuk menjadi nama variabel yang boleh cuma huruf,angka dan garis bawah <span style="color: #ff0000;">(\_) <span style="color: #333333;">Misalnya variabel yang boleh: <span style="color: #ff0000;">nama, nama1, \_nama, dsb.</span></span></span></span>
3. Karakter pada variabel python bersifat case sensitif artinya antara nama variabel dengan huruf kapital dan huruf kecil itu dibedakan. Misalnya <span style="color: #ff0000;">NAMA</span> dengan <span style="color: #ff0000;">nama <span style="color: #333333;">itu berbeda.</span></span>
 
## Tipe Data Python

 Dalam bahasa pemrograman biasanya ada 3 tipe data. Begitupun dengan python juga mempunyai 3 tipe data yaitu: 
### 1.Tipe Data Teks atau String

 Untuk mengisi nilai variabel dengan teks kalian harus menggunka tanda petik bisa tanda petik tunggal ataupun ganda contohnya: <span style="color: #ff0000;">('....same text....')</span> dan sampai tiga tanda petik contohnya:<span style="color: #ff0000;"> (' ' '.....same text....' ' ')</span> atau <span style="color: #ff0000;">(" " "....same text....." " ")</span>. Contoh Varibelnya: 
```bash
nama = "Jujun Jamaludin"
nama = 'Jujun Jamaludin'
nama = """Jujun Jamaluidn"""
```

### 2.Tipe Data Angka

 Seperti halnya matematika tipe data pemrograman juga ada angkanya seperti ada anga bilangan bulat, Pecahan ,Persen dsb. Untuk mengisi variabel dengan angka tidak perlu menggunkan tanda petik. Misalnya:
```bash
panjang=350 #bilangan bulat
berat=3.6 #bilangan pecahan
#dsb
```

### 3.Tipe Data Boolean

 Sebenarnya tipe data ini bisa menggunkan tipe data angka karena nilai tipe data ini hanya ada 2 yaitu <span style="color: #ff0000;">TRUE</span> bernilai satu dan <span style="color: #ff0000;">FALSE</span> bernilai nol. Contohnya: 
```bash
benar = true

#maka jika variabel benar tersebut di print akan menghasilkan angka 1
```

## Selanjutnya apa?

 Itulah pembahasan mengenai variabel dan tipe data di python versi satu. Untuk selajutnya kalian bisa membaca: - operator python
- inputan python
- percabangan atau if di python
