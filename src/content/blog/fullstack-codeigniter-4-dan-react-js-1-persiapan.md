---
title: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #1 Persiapan"
description: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #1 Persiapan"
pubDate: 2020-06-19T03:38:06+00:00
heroImage: "/wp-content/uploads/2020/08/ci4plusreact.png"
tags: []
draft: false
---

Framework codeigniter baru saja meluncurkan versi terbarunya yaitu codeigniter 4. Codeigniter memang salah satu framework favorit saya bahkan saya sudah terbiasa dengan codeigniter 3. karena sudah ada versi terbaru maka tak salah saya harus mencobanya. [![](/wp-content/uploads/2020/06/ci4plusreact-Recovered-1024x590.jpg "CRUD Codeigniter 4 dan React.js")](/wp-content/uploads/2020/06/ci4plusreact-Recovered.jpg) CRUD Codeigniter 4 dan React.js Agar lebih keren kita akan mencoba frontendnya menggunakan framework yang cukup terkenal juga yaitu react js. Fraemwork react js diciptkan oleh perushaan facebook jadi kita sebagai seorang yang suka mencoba tak salah mencobanya karena kita tahu facebook sangat keren. Untuk menggabungkan codeigniter dengan react itu menurut saya ada 2 jenis.

1. Kita buat secara terpisah atau beda folder dengan cara kita membuat rest api nya menggunakan codeigniter lalu react js nya yang akan mengkonsumsi rest apinya.
2. Kita buat dalam satu folder yang akan dibahas kali ini
 
# Penggabungan codeigniter dengan react js

 Untuk menggabungkan framework js dengan php biasany butuh sesuatu untuk menggenerate framework jsnya menjadi file javascript biasa maka dari itu kita memerlukan **Webpack** untuk mengubahnya. Langkah nya sebagai berikut. ## Install Codeigniter 4 dengan 2 cara

1. Mendownload filenya bisa download [Codeigniter](https://codeigniter.com/download)
2. Menggunakan composer. Bagi yang belum terinstall composer di komputernya bisa cek website [composer](https://getcomposer.org/download/) . Jika sudah bisa langsung install codeigniter 4 nya dengan perintah!. ```bash
composer create-project codeigniter4/appstarter namaproject
  ```
  
   atau ```bash
composer create-project codeigniter4/appstarter --no-dev namaproject
  ```
  
   setelah proses selesai kita bisa menjalankan codeigniternya dengan perintah. ```bash
php spark serve
  ```
 
## Install webpack dan react js

 Baik sekarang kita harus menginstall webpack dan react js di folder codeigniter4 yang sudah terinstall. silahkan buka foldernya lalu buka terminal bashnya!.        #### <span class="ILfuVd"><span class="e24Kjd">**Inisialisasi** </span></span>package.json

  ```bash
npm init -y
```

#### Install react jsnya

 ```bash
sudo npm install path @babel/core @babel/preset-react react babel-loader react-dom --save
```

 untuk penggguna window bisa hapus sudo nya!. #### Install webpack

 ```bash
npm install webpack webpack-cli --global
```

#### Buat file bernama webpack.config.js

 ```bash
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

### Penggabungan codeigniter dengan react

 Baik dalam webpack.config.js kalian bisa sesuaikan kehendak lihat pada entry disini saya setting di folder components lalu file app.js. Maka untuk membuat reactnya saya harus membuat folder components dan didalamnya membuat file app.js. Untuk isi file app.js nya. ```bash
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

 Lalu generate react tersebut menggunaka webpacknya dengan perintah ```bash
webpack --config webpack.config.js
```

 Selanjutnya kalian bisa ubah view pada codeigniter di folder app/views ```bash

<script src="dist/main.js" charset="utf-8"></script>
```

 itu kode yang pentingnya kalian bisa tambahkan header dan footer sesui kehendak. OH ya. untuk melakukan update pada react js misalkan kalian telah mengedit project react jsnya menggunakan perintah ```bash
sudo webpack --watch
```

 untuk window tanpa sudo ya.
