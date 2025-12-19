---
title: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #1 Persiapan"
description: "Tutorial seri pertama tentang persiapan membuat aplikasi CRUD dengan CodeIgniter 4 dan React.js"
pubDate: 2020-06-19T03:38:06+00:00
heroImage: "/wp-content/uploads/2020/08/ci4plusreact.png"
tags: ["codeigniter", "react", "crud", "php", "javascript", "tutorial"]
draft: false
---

# Pengantar CodeIgniter 4 dan React.js

Framework CodeIgniter baru saja meluncurkan versi terbarunya yaitu CodeIgniter 4. CodeIgniter memang salah satu framework favorit saya, bahkan saya sudah terbiasa dengan CodeIgniter 3. Karena sudah ada versi terbaru, maka tak salah saya harus mencobanya.

![CRUD Codeigniter 4 dan React.js](/wp-content/uploads/2020/06/ci4plusreact-Recovered-1024x590.jpg)

Agar lebih keren, kita akan mencoba frontendnya menggunakan framework yang cukup terkenal juga yaitu React.js. Framework React.js diciptakan oleh perusahaan Facebook, jadi kita sebagai seorang yang suka mencoba tak salah mencobanya karena kita tahu Facebook sangat keren.

Untuk menggabungkan CodeIgniter dengan React, menurut saya ada 2 jenis pendekatan:

1. Kita buat secara terpisah atau beda folder dengan cara kita membuat REST API-nya menggunakan CodeIgniter, lalu React.js yang akan mengkonsumsi REST API-nya.
2. Kita buat dalam satu folder yang akan dibahas kali ini.

# Penggabungan CodeIgniter dengan React.js

Untuk menggabungkan framework JS dengan PHP, biasanya butuh sesuatu untuk meng-generate framework JS-nya menjadi file JavaScript biasa. Maka dari itu kita memerlukan **Webpack** untuk mengubahnya.

Langkahnya sebagai berikut.

## Install CodeIgniter 4 dengan 2 cara

### Cara 1: Download File
Mendownload filenya bisa langsung download [CodeIgniter](https://codeigniter.com/download)

### Cara 2: Menggunakan Composer
Bagi yang belum terinstall Composer di komputernya, bisa cek website [Composer](https://getcomposer.org/download/).

Jika sudah, bisa langsung install CodeIgniter 4-nya dengan perintah:

```bash
composer create-project codeigniter4/appstarter namaproject
```

Atau tanpa dev dependencies:

```bash
composer create-project codeigniter4/appstarter --no-dev namaproject
```

Setelah proses selesai, kita bisa menjalankan CodeIgniter-nya dengan perintah:

```bash
php spark serve
```

## Install Webpack dan React.js

Baik, sekarang kita harus menginstall webpack dan react.js di folder CodeIgniter 4 yang sudah terinstall. Silahkan buka foldernya lalu buka terminal bash-nya!

### Inisialisasi package.json

```bash
npm init -y
```

### Install React.js

```bash
sudo npm install path @babel/core @babel/preset-react react babel-loader react-dom --save
```

Untuk pengguna Windows bisa hapus sudo-nya!

### Install Webpack

```bash
npm install webpack webpack-cli --global
```

### Buat file bernama webpack.config.js

```javascript
var path = require('path');

module.exports = {
  entry: './components/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}
```

## Penggabungan CodeIgniter dengan React

Baik, dalam webpack.config.js kalian bisa sesuaikan dengan keinginan. Lihat pada entry, di sini saya setting di folder components lalu file app.js.

Maka untuk membuat React-nya, saya harus membuat folder components dan di dalamnya membuat file app.js. Untuk isi file app.js-nya:

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Root extends Component {
  render() {
    return (
      <h1>Hello World from React</h1>
    )
  }
}

let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);
```

Lalu generate React tersebut menggunakan webpack-nya dengan perintah:

```bash
webpack --config webpack.config.js
```

Selanjutnya kalian bisa ubah view pada CodeIgniter di folder app/views. Tambahkan kode berikut:

```html
<script src="dist/main.js" charset="utf-8"></script>
```

Itu kode yang pentingnya. Kalian bisa tambahkan header dan footer sesuai keinginan.

Oh ya, untuk melakukan update pada React.js (misalkan kalian telah mengedit project React.js-nya), gunakan perintah:

```bash
sudo webpack --watch
```

Untuk Windows tanpa sudo ya.