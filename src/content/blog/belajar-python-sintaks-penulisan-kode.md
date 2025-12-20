---
title: "Belajar Pemrograman Python di Android: Sintaks Penulisan Kode Python"
description: "Panduan lengkap sintaks penulisan kode Python untuk pemula, dilengkapi dengan contoh dan penjelasan"
pubDate: 2019-06-14T10:04:14+00:00
heroImage: "/wp-content/uploads/2020/08/20190606_203326.png"
tags: ['Python', 'Pemrograman', 'Android', 'Sintaks']
draft: false
---

Sintaks penulisan kode python cukup mudah dipahami dibandingkan bahasa lain yang lumayan rumit. Penulisannya relatif sederhana namun ada beberapa perbedaan antara python versi 1 dan python versi 3 yang sering disebut python3. Di seri kali ini kita akan belajar python versi tiga.

Kita harus mematuhi aturan penulisan tiap bahasan pemrograman agar kode kita bisa berjalan dengan baik. Jika sintaks penulisan kode python dilanggar maka kode yang kita buat akan error. Jadi kita harus tahu aturan penulisan kode python tersebut khususnya python 3 yang akan kita bahas kali ini.

## Sintaks Statement Python

Statement di python itu cukup sederhana. Contoh:

```python
print("Hello World")
```

Bisa dilihat cukup seperti itu saja bisa berjalan tanpa diakhiri tanda titik koma atau yang lainnya. Dan itu merupakan contoh hello world untuk python versi 3. Untuk python versi 1 menggunakan tanda kurung, jadi perbedaanya python versi 3 lebih sederhana lagi.

## Sintaks Tanda Petik Python

Tanda petik memang setiap bahasa pemrograman selalu dipakai biasanya digunakan pada tipe data string. Untuk python sendiri bisa menggunakan tanda petik pada penulisan kode stringnya. Contoh:
```python
nama = "Jujun Jamaludin"
nama = 'Jujun Jamaludin'
nama = """Jujun Jamaludin"""
```

Semua variabel yang ada dalam contoh itu sah digunakan dalam python jadi maksimal untuk tanda petiknya adalah antara 3 tanda petik untuk string multi-line.

## Sintaks Indentasi Python

Indentasi maksudnya pembeda gaya penulisan bahasa pemrograman. Misalnya jika kita membat suatu statement `if` lalu di kode seterusnya itu merupakan indentasi atau isi dari pernyataan if tersebut.

Dalam python itu sangat sederhana tidak seperti di PHP indentansinya menggunakan tanda kurung kurawal atau `{}`. Di python indentansinya menggunakan spasi yang menjorok ke dalam.

Contohnya:

```python
nama = "Jujun Jamaludin"
if nama == "Jujun Jamaludin":
    print("Benar")
```

Nah kata `print("Benar")` itu merupakan indentasi python yang diberi spasi.

### Contoh Penulisan Yang Salah:

```python
nama = "Jujun Jamaludin"
if nama == "Jujun Jamaludin":
print("Benar")  # Ini salah karena tidak ada indentasi
```

Oke cukup jelas ya indentasi di python menggunakan spasi atau bisa pakai tab tapi kalau di kode editor indentasinya biasanya langsung otomatis ketika kita enter suatu statement.

## Sintaks Komentar Pada Python

Komentar di sebuah kodingan cukup penting agar program yang kita buat mudah untuk diteliti saat kita memahami kembali kodingan kita. Kode komentar ini tidak akan dieksekusi oleh python.

Dalam python ada 2 cara memberi komentar pada kodingan python kita:

### 1. Menggunakan Tanda Pagar (#)

Cara ini yang paling sering digunakan untuk memberi komentar pada kodingan python kita. Contohnya sebagai berikut:

```python
# say hello
print("hello")
```

Dari contoh kita membuat komentar pada kodingan kita untuk memberi tahu yang kita buat adalah kodingan say hello.

### 2. Menggunakan Tanda Petik (")

Selain tanda pagar, tanda petik juga bisa kita gunakan untuk memberi komentar pada kode python yang dibuat. Contohnya sebagai berikut:

```python
"Ini fungsi Untuk hello python"
print("hello")
```

Komentar menggunakan tanda petik ini biasanya digunakan untuk dokumentasi fungsi atau memberi komentar multi-line.

## Sintaks Variabel Python

Variabel di python tidak perlu dideklarasikan terlebih dahulu seperti di bahasa pemrograman lain. Kita bisa langsung menggunakannya. Contoh:

```python
nama = "Jujun Jamaludin"
umur = 25
tinggi = 170.5
mahasiswa = True
```

Python akan otomatis mendeteksi tipe data dari nilai yang kita berikan.

## Sintaks Operator Python

Python mendukung berbagai operator seperti operator aritmatika, perbandingan, logika, dll.

### Operator Aritmatika:

```python
x = 10
y = 3

print(x + y)  # Penjumlahan: 13
print(x - y)  # Pengurangan: 7
print(x * y)  # Perkalian: 30
print(x / y)  # Pembagian: 3.333...
print(x // y) # Pembagian bulat: 3
print(x % y)  # Modulus: 1
print(x ** y) # Pangkat: 1000
```

### Operator Perbandingan:

```python
x = 10
y = 3

print(x == y) # Sama dengan: False
print(x != y) # Tidak sama dengan: True
print(x > y)  # Lebih besar: True
print(x < y)  # Lebih kecil: False
print(x >= y) # Lebih besar atau sama dengan: True
print(x <= y) # Lebih kecil atau sama dengan: False
```

## Sintaks Input dan Output Python

### Output dengan print():

```python
print("Hello World")
print("Nama:", "Jujun", "Umur:", 25)
print(f"Nama saya Jujun dan umur saya 25 tahun")  # f-string Python 3.6+
```

### Input dengan input():

```python
nama = input("Masukkan nama anda: ")
umur = input("Masukkan umur anda: ")

print(f"Halo {nama}, umur anda {umur} tahun")
```

## Kesimpulan

Sintaks python memang relatif lebih mudah dibandingkan bahasa pemrograman lainnya. Yang paling penting untuk diingat adalah:

1. Indentasi menggunakan spasi, bukan kurung kurawal
2. Tidak perlu titik koma di akhir statement
3. Variabel tidak perlu dideklarasikan terlebih dahulu
4. Komentar menggunakan tanda pagar (#) untuk single line
5. Tipe data otomatis dideteksi oleh python

Dengan memahami dasar-dasar sintaks python ini, kalian sudah bisa mulai membuat program sederhana. Teruslah berlatih dan eksperimen dengan kode python untuk lebih memahaminya.