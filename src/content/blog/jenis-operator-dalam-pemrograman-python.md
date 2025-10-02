---
title: "Jenis Operator Dalam Pemrograman Python"
description: "Jenis Operator Dalam Pemrograman Python"
pubDate: 2019-07-10T09:08:44+00:00
heroImage: "/wp-content/uploads/2020/08/20190710_134956.png"
tags: []
draft: false
---

Sebelumnya kita telah mengenal [tipe data dan variable dalam python](https://www.kumpul4semut.com/belajar-tipe-data-dan-variabel-python/), Selanjutnya kita akan mencoba berkenalan dengan yang namanya operator. [![Jenis Operator Dalam Pemrograman Python](/wp-content/uploads/2019/07/20190710_134956-1024x576.png)](/wp-content/uploads/2019/07/20190710_134956.png) operator python Operator digunakan untuk melakukan operasi pada variable dan nilai. Jadi variable dan nilai yang kita buat pasti kita operasikan untuk tujuan hal tertentu.

## Apa Itu Operator?

 Operator merupakan simbol-simbol yang digunakan untuk melakukan tujuan tertentu. Semua bahasa pemrograman pasti bisa melakukan operator ini. Jadi jika kalian mempelajari satu bahasa pemrograman maka kalian akan mudah memperlajari pemrograman lainnya. Ada 7 jenis operator dalam python yang wajib diketahui: 1. Operator aritmatika
2. Operator identitas
3. Operator logika
4. Operator pembanding
5. Operator penugasan
6. Operator keanggotaan
7. Operator bitwise
 
 Oke masi kita bahas satu per satu!.. ## 1.Operator Aritmatika

 Dalam dunia pemrograman pasti kita akan menemui hitung-hitungan matematika atau biasa disebut aritmatika. Jadi buat kalian yang benci matematika hilangkan pemikiran itu dari sekarang jika memang kalian suka ngoding. Operator aritmatika biasanya digunakan pada tipe data numeric atau angka. Berikut, simbol untuk operator aritmatika:  |---|
|------|
 |  | + |  | Penjumlahan |  |
 |  | - |  | Pengurangan |  |
 |  | \* |  | Perkalian |  |
 |  | / |  | Pembagian |  |
 |  | % |  | Modulus / Sisa Bagi |  |
 |  | \*\* |  | Pemangkatan |  |
 |  | // |  | Pembagian Bulat |  |

  Oke langsung aja kitsa coba, Seperti biasa buat dulu file pythonya formatnya .py ya kalo lupa. Lalu masukan kode: ```bash
a=5
b=2

print('penjumlahan')
print(a+b)
print('pengurangan')
print(a-b)
print('perkalian')
print(a*b)
print('pembagian')
print(a/b)
print('sisa bagi')
print(a%b)
print('pempangkatan')
print(a**b)
print('pembagian dibulatkan')
print(a//b)
```

 Maka hasilnya akan menjadi: [![](/wp-content/uploads/2019/07/aritmatika-python-edit-1024x590.png)](/wp-content/uploads/2019/07/aritmatika-python-edit.png) Kalian juga bisa menjalankannya di termux!. Baca juga : [Apa itu termux, Apakah apliaksi hacking?](https://www.kumpul4semut.com/apa-itu-termux/)## 2.Operator Identitas

 Biasanya digunakan untuk membandingkan objek. Hanya ada dua untuk simbol operator identitas ini:  |---|
|------|
 |  | is |  | Mengembalikan nilai true jika kedua objek yang dibandingkan sama |  |
 |  | is not |  | Mengembalikan nilai true jika kedua objek yang dibandingkan tidak sama |  |

  Sebenarnya kita bisa menggunakan salah satu saja. Berikut contohnya: [![](/wp-content/uploads/2019/07/identitas-operator-1024x590.png)](/wp-content/uploads/2019/07/identitas-operator.png)## 3.Operator Logika

 Sama seperti dalam matematika di pemrograman juga meimliki logika. Berikut macamnya untuk operartor logika:  |---|
|------|
 |  | and |  | Mengembalikan Benar jika kedua pernyataan benar |  |
 |  | or |  | Mengembalikan Benar jika salah satu pernyataan benar |  |
 |  | not |  | Mengembalikan False jika hasilnya benar |  |

  Memang agak ribet kalo bermain dengan logika. Tapi kembali ke kita ko kita bisa menggunakan sesuai kebutuhan saja. Namun untuk gambar berikut conothnya: ```bash
a=3

# operator and
print(a>1 and a<5)

#operator or
print(a>1 or a>5)

#operator not
b=a>1 and a<5
print(not(b))

```

 Hasilnya jika dijalankan! [![Jenis Operator Dalam Pemrograman Python](/wp-content/uploads/2019/07/logika-1024x590.png)](/wp-content/uploads/2019/07/logika.png)## 4.Operator Pembanding

 Biasanya digunakan untuk membandingkan dua nilai. Dalam dunia pemrograman suka dikenal dengan relasi. Dan suka digunakan untuk membuat sebuah logika. bahkan lebih sering dari operator logika. Berikut operatornya:  |---|
|------|
 |  | == |  | Sama dengan |  |
 |  | != |  | tidak sama dengan |  |
 |  | > |  | Lebih besar dari |  |
 |  | < |  | kurang dari |  |
 |  | >= |  | Lebih besar dari atau sama dengan |  |
 |  | <= |  | Kurang dari atau sama dengan |  |

  Operator ini sering digunakan dengan operator ternari atau percabangan atau kondisi (IF dan Else). Untuk contoh tanpa digabung dengan percabangan sebagai berikut: ```bash
a=3
b=3
c=4

# operator ==
print(a==b)

#operator !=
print(a!=b)

#operator >
print(a>c)

#operator <
print(a<c)

#operator >=
print(a>=b)

#operator <=
print(a<=c)

```

 Jika dijalankan maka akan keluarnya akan ada dua yaitu true dan false ( benar dan salah ): [![Jenis Operator Dalam Pemrograman Python: Pembanding](/wp-content/uploads/2019/07/pembanding-1024x590.png)](/wp-content/uploads/2019/07/pembanding.png)## 5.Operator Penugasan

 Selanjutnya adalah operator penugasan yang fungsinya seperti namanya. Jadi operator penugasan digunakan untuk memberi tugas pada variabel. Contohnya: ```bash
nama = semut
```

 Disitu ktia memberi tugas agar variable nama itu bernilai semut. Dengan simbol operator sama dengan. Berikut lengkapnya tentang operator penugasan:  |---|
|------|
 |  | = |  | Mengisi |  |
 |  | += |  | Menambah |  |
 |  | -= |  | Mengurang |  |
 |  | \*= |  | Mengali |  |
 |  | /= |  | Membagi |  |
 |  | %= |  | Sisa bagi |  |
 |  | \*\*= |  | Memangkat |  |

  Untuk lebih jelasnya simak contohnya: ```bash
#nilai tidak terisi apapun
a=""

# Mengisi
a=2 
print(a)
#maka nilai a jadi 2

# Menambah
a += 2
print(a)
#maka nilai a jadi 4

# Mengurang
a -= 2
print(a)
# maka nilai a jadi 2 lagi

# Mengali
a *= 3
print(a)
#maka nilai a jadi 6

# Membagi 
a /= 2
print(a)
#maka nilai a jadi 3

```

 Penjelasnnya! Awalnya variable a tidak terisi nilai apapun namun ketia melakukan beberapa penugasan sehingga nilai a nya akan berubah. Pertama kita mengisi a dengan nilai 2 lalau kita menugaskan untuk menambah 2 di penugasan selajutnya dan hasilnya pasti 4. begitu seterusnya sampai ke bawah. Jika dijalankan maka hasilnya! [![Jenis Operator Dalam Pemrograman Python: Penugasan](/wp-content/uploads/2019/07/penugasan-1024x590.png)](/wp-content/uploads/2019/07/penugasan.png) Sama bukan dengan apa yang saya sertakan di komentar kode. ## 6.Operator Keanggotaan

 Wah sudah kaya penjabat ya :v ada anggota segala. Jadi ini untuk mengecek nilai apakah ada dalam variable atau tidak. Dan hasilnya ada dua true ( betul ) dan false (salah). Operator kenggotaan cuma ada dua yaitu:  |---|
|------|
 |  | in |  | Mengembalikan nilai true jika urutan dengan nilai yang ditentukan hadir di objek |  |
 |  | not in |  | Mengembalikan True jika urutan dengan nilai yang ditentukan tidak ada dalam objek |  |

  Misalnya: ```bash
#Anggota
a=['semut', 'kucing', 'monyet']

# operator ada dalam anggota
print('kucing' in a)

# operator tidak ada dalam anggota
print('anjing' in a)

```

 Kalian akan tahu hasilnya. Dan jika dijalankan akan menghasilkan! [![](/wp-content/uploads/2019/07/anggota-1024x590.png)](/wp-content/uploads/2019/07/anggota.png)## 7.Operator Bitwise

 Operasi ini saya jarang menggunakannya. Namun operasi ini sama kayak logika namun data yang digunakannya adalah data biner. Tahukan yang cuma punya 0 dan 1. Berikut opratornya:  |---|
|------|
 |  | & |  | AND |  | Atur setiap bit menjadi 1 jika kedua bit tersebut 1 |  |
 |  | | |  | OR |  | Atur setiap bit ke 1 jika salah satu dari dua bit adalah 1 |  |
 |  | ^ |  | XOR |  | Atur setiap bit ke 1 jika hanya satu dari dua bit yang 1 |  |
 |  | ~ |  | NOT |  | Menghindari semua bit |  |

  Jadi operasi ini bisa digunakan jika data yang digunkan 0 dan 1 contohnya: ```bash
#data
a=1
b=1
c=0

# operator Bitwise AND

d=a&b

#karena a dan b itu nilainya satu 
#maka d ini akan mengelurakan nila 1
print(d)

e=a&c
#hasilnya akan 0 karena ada 
#and akan jadi 1 jika keduanya bernilai 1
print(e)

```

 Dan hasilnya! [![](/wp-content/uploads/2019/07/biner-1024x590.png)](/wp-content/uploads/2019/07/biner.png)## Kesimpulannya

 Operator dalam pemrograman itu cukup banyak namun kita gunakan biasnaya sebagian sesuai kebutuhan saja. Ada operator lain sebenarnya yang belum dibahas yaitu operator if dan else atau operator percabangan. Ini akan dibahas di artikel lain. ## Selanjutnya Apa?

 [Percabangan python if, else, dan elif](https://www.kumpul4semut.com/percabangan-python-if-else-dan-elif/) Untuk Refrensi: [python w3scool](https://www.w3schools.com/python/python_operators.asp)
