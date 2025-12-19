---
title: "Cara Install Composer di Termux Android"
description: "Panduan lengkap cara install Composer PHP dependency manager di Termux Android"
pubDate: 2021-09-06T04:31:12+00:00
heroImage: "/wp-content/uploads/2021/09/install-composer-termux.png"
tags: ['Termux', 'PHP', 'Composer', 'Android']
draft: false
---

Install composer di termux android. Tapi sebelum ke caranya kita bahas dahulu.

## Apa Itu Composer?

Composer merupakan package manager untuk PHP. Dimana kalian bisa menginstall berbagai macam library untuk mempercepat dan mempermudah proses pembuatan aplikasi menggunakan PHP. Jadi dengan composer kalian gampang mengelola library yang akan kalian pakai atau yang tidak diperlukan.

## Cara Install Composer di Android?

Sebelum ke langkah install composer, pasang terlebih dahulu aplikasi termuxnya. Yang belum punya bisa download [Termux disini](https://play.google.com/store/apps/details?id=com.termux). Jika sudah, mari kita install.

### Update Paket Termux

Update paket termuxnya agar diberi paket terbaru:

```bash
pkg update && pkg upgrade
```

### Install PHP dan Curl

Install PHP dan curl yang dibutuhkan untuk Composer:

```bash
pkg install php curl
```

### Install Composer

Install Composer menggunakan command berikut:

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/data/data/com.termux/files/usr/bin --filename=composer
```

## Cek Composer Berhasil Terinstall di Termux

Masukkan perintah:

```bash
composer
```

Jika benar, akan muncul tampilan seperti berikut:

[![Install Composer Termux](/wp-content/uploads/2021/09/composer-sukses-1024x469.png)](/wp-content/uploads/2021/09/composer-sukses.png)

## Konfigurasi Composer

### Buat Composer Bisa Diakses Global

Agar composer bisa diakses dari mana saja, tambahkan ke PATH:

```bash
export PATH=$PATH:/data/data/com.termux/files/usr/bin
echo 'export PATH=$PATH:/data/data/com.termux/files/usr/bin' >> ~/.bashrc
```

### Reload Bashrc

Reload bashrc untuk menerapkan perubahan:

```bash
source ~/.bashrc
```

## Cara Menggunakan Composer

### Membuat Project Baru

Untuk membuat project baru dengan Composer:

```bash
composer create-project laravel/laravel my-project
```

### Install Package

Install package tertentu:

```bash
composer require monolog/monolog
```

### Update Dependencies

Update semua dependencies:

```bash
composer update
```

### Install Dependencies

Install semua dependencies dari composer.json:

```bash
composer install
```

## Troubleshooting

### Error Permission Denied

Jika mengalami error permission denied:

```bash
chmod +x /data/data/com.termux/files/usr/bin/composer
```

### Error Command Not Found

Jika command composer tidak ditemukan:

```bash
export PATH=$PATH:/data/data/com.termux/files/usr/bin
```

Atau tambahkan ke .bashrc secara permanen.

## Keunggulan Menggunakan Composer

1. **Dependency Management**: Mengelola library yang dibutuhkan proyek
2. **Autoloading**: Otomatis memuat class PHP
3. **Version Control**: Mengontrol versi package
4. **Package Discovery**: Mudah menemukan package
5. **Integration**: Terintegrasi dengan framework PHP

## Kesimpulan

Composer adalah tools yang sangat penting untuk developer PHP. Dengan Composer di Termux, kalian bisa mengembangkan aplikasi PHP langsung dari Android.

Pastikan internet stabil saat menginstall karena Composer akan mendownload package dari internet.