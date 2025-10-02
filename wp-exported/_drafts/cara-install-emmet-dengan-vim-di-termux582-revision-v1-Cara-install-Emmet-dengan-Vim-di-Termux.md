---
id: 597
title: 'Cara install Emmet dengan Vim di Termux'
date: '2020-11-15T05:27:41+00:00'
author: 'Jujun Jamaludin'
layout: revision
guid: 'https://kumpul4semut.com/582-revision-v1/'
permalink: '/?p=597'
---

Termux merupakan terminal emulator dengan dasar linux. Yang bisa diinstall di handphone android atau tablet. Dan bisa juga dipakai untuk development website. Termux juga bisa digunakan untuk hal lain. Termasuk pengelolaan data, penetrasi keamanan. Vim merupakan text editor yang sangat ringan tapi kemampuannya sangat mumpuni untuk digunakan sebagai text editor. Pengguna linux sering menggunakan text editor ini. Emmet merupakan plugin text editor populer yang biasa digunakan dalam pembuatan kode pemerograman. Dan kali ini kita akan mecoba menginstal emmet untuk kode html sehingga pembuatan kode html akan semakin cepat. Plugin emmet vim biasanya digunakan pada komputer kususnya linunx envirovment. Tapi sekarang kita juga bisa gunakan di hp android dengan bantuan aplikasi termux.

### Berikut langkahnya untuk menginstall emmet pada vim termux

 Oke kalian tentunya harus sudah menginstall aplikasi termuxnya. Di play store juga sudah ada tinggal install saja. #### Setelah diinstall masuk ke aplikasi termux lalu masukan perintah

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">apt update && apt upgrade
```

#### Selanjutnya install vim

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">pkg install vim
```

#### Setelah vim terinstall, buat folder baru dengan mengetik

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">mkdir .vim
```

#### Arahkan ke directory tersebut

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">cd .vim
```

#### Dalam forder .vim buat folder bernama 'plugged'

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">mkdir plugged
```

#### Kembali ke folder home

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="shell">cd ~
```

#### Install pluggin emmet vim

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

#### Setelah pluggin terinstall buat file bernama .vimrc

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">vim .vimrc
```

 Vim akan terbuka dengan mode file baru. Lalu tekan huruf i untuk mode insert. Masukan kode ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">call plug#begin('~/.vim/plugged')
Plug 'mattn/emmet-vim'
call plug#end()
```

 Tekan tombol 'Enc' Lalu masukan ketik `:wq```Untuk menginstall emmet pluggin . Kita membutuhkan git. Jadi install git dahulu. ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">pkg install git
```

 Jika git sudah terinstall langkah selanjutnya masuk ke vim editornya,. ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">vim
```

 Lalu masukan perintah pada vim ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">:PlugInstall
```

 Jika semuanya sudah benar maka proses install akan berlangsung tunggu sampai selesai. Cara penggunaanya cukup mudah. Kita mode insertkan dulu vim nya dengan tombol huruf i selanjutnya kita bisa pakai emmet sama seperti di visual studi kode. Contohnya ingin memasukan kode dasar html tinggal masukan `html:5` atau tanda seru \[ ! \] lalu tekan Ctrl+y+,(koma) maka akan terbentuk kode html dasar ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

</body>
</html>
```

 https://www.youtube.com/watch?v=a7rti-WrG6s </body></html>