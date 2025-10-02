---
title: "Cara Install Composer di Termux android"
description: "Cara Install Composer di Termux android"
pubDate: 2021-09-06T04:31:12+00:00
heroImage: "/wp-content/uploads/2021/09/install-composer-termux.png"
tags: []
draft: false
---

Install composer di termux android. Tapi sebelum ke caranya kita bahas dahulu.

# Apa itu composer ?

 Composer merupakan paket manage untuk php. Dimana kalian bisa menginstall berbagai macam library untuk mempercepat dan mempermudah proses pembuatan aplikasi menggunakan php. Jadi dengan composer kalian gampang memanage library yang akan kalian pakai atau tidak diperlukan. # Cara install composer di android?

 Sebelum ke langkap install composernya pasang terlebih dahulu aplikasi termuxnya, yang belum punya bisa download [temux disini](https://play.google.com/store/apps/details?id=com.termux) jika sudah markistal atau mari kita install. ## Update paket termuxnya biar diberi paket terbaru

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false" data-enlighter-theme="dracula">$ pkg up
```

 atau ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false">$ pkg update && pkg upgrade
```

## Install php dan curl

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false">$ pkg install php
```bash
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false">$ pkg install curl
```

## Install composer

 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false">$ curl -sS https://getcomposer.org/installer | php -- --install-dir=/data/data/com.termux/files/usr/bin --filename=composer
```

# Cek composer berhasil terinstall di termux

 Masukan perintah! ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-linenumbers="false">$ composer
```

 Jika benar akan muncul seperti: [![install composer termux](/wp-content/uploads/2021/09/composer-sukses-1024x469.png)](/wp-content/uploads/2021/09/composer-sukses.png)
