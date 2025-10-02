---
id: 685
title: 'Cara Install Composer di Termux android'
date: '2021-09-06T04:31:12+00:00'
author: 'Jujun Jamaludin'
layout: post
guid: 'https://kumpul4semut.com/?p=685'
permalink: /cara-install-composer-di-termux-android/
zakra_layout:
    - tg-site-layout--customizer
zakra_remove_content_margin:
    - '0'
zakra_transparent_header:
    - customizer
zakra_page_header:
    - '1'
zakra_logo:
    - '0'
image: /wp-content/uploads/2021/09/install-composer-termux.png
categories:
    - Termux
tags:
    - composer
    - php
    - termux
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
```

 ```
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

 Jika benar akan muncul seperti: [![install composer termux](https://kumpul4semut.com/wp-content/uploads/2021/09/composer-sukses-1024x469.png)](https://kumpul4semut.com/wp-content/uploads/2021/09/composer-sukses.png)