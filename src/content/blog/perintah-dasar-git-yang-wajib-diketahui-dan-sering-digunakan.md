---
title: "Perintah Dasar GIt Yang Wajib Diketahui dan Sering Digunakan"
description: "Perintah Dasar GIt Yang Wajib Diketahui dan Sering Digunakan"
pubDate: 2019-07-02T03:45:38+00:00
heroImage: "/wp-content/uploads/2020/08/20190702_091817.png"
tags: []
draft: false
---

**Perintah Dasar Git Yang Sering Digunakan -** Sebagai perangkat lunak pengatur versi, git juga mempunyai banyak perintah yang harus diketahui oleh pengguna git. Pasti kalian pernah melihat versi dari sebuah aplikasi misalnya jquery versi 3.0.1 nah jika develover ingin mengupdate versi hasil kerjanya menjadi versi 3.0.2. maka developer tidak perlu repot untuk mengacak-ngacak hasil kerjanya yang sudah stabil sebelumnya. Depeloper tinggal membuat branch atau cabang baru untuk hasil kerja terbarunya jika terasa cocok maka hasil kerja sebelumnya akan digantikan dengan versi kerja yang terbaru. [![perintah dasar git yang sering digunakan](/wp-content/uploads/2019/07/20190702_091817-1024x576.png)](/wp-content/uploads/2019/07/20190702_091817.png) perintah dasar git yang sering digunakan Walaupun banyak sekali pernitah dasar git namun biasanya tidak semua perintahnya dipakai. Ada beberapa perintah yang wajib diketahu khusunya pemula dalam bermain git untuk mengerjakan projectnya. ## Persiapan Sebelum Memulai Git?

 Oke jika kalian yang baru mengenal git dan belum punya bahanya untuk belajar git kalian harus menyiapkan aplikasi untuk memulai belajar git. Untuk lebih jelasnya baca juga: [Belajar Git dan Github Perisapan](https://www.kumpul4semut.com/belajar-git-dan-github-di-android-persiapan-dan-installasi/)## Perintah Dasar Git Yang Sering Digunakan

 **1.git config** Sebelum melakukan sesuatu biasanya developer mengatur dahulu email,algoritma untuk diff, username dsb untuk memulai pekerjaannya. dan fungsi git config adalah command untuk melakukan hal tersebut. Contohnya untuk mengatur email: ```bash
git config --global user.email semut@email.com
```

 **2.git init** Ini digunakan untuk membuat repository baru. Yaitu folder yang akan dipantau oleh git. Untuk lebih jelasnya cara membuat repository bisa baca [Cara Membuat Repository Git dan Github](https://www.kumpul4semut.com/belajar-git-dan-github-di-android-membuat-repository/) atau kalian bisa coba ```bash
git ini [nama foldernya]
```

 **3.git status** Perintah ini digunakan untuk melihat status dari git kita. ```bash
git status
```

 **4.git add** Dalam git itu ada 3 area dalam proses pengerjaanya mengerjakan. 1. Working area - area yang belum di add
2. Staging area - area yang sudah di add dan siap di commit
3. Repository area - area yang sudah di commit
 
 Misalnya kalian membuat file baru dalam repository kalian nah file baru tersebut akan masuk ke working area dahulu sebelum kalian melakukan git add caranya dengan! ```bash
git add [nama file]
```

 Jika kalian ingin memindahkan semua yang ada di working area ke staging area kalian bisa memasukan perintah ```bash
git add .
```

 Titik di akhir menandakan kaian ingin menambahkan semua file ke staging area **5.git checkout** Ini digunakan untuk membuat branch baru atau untuk berpindah branch. Perintah untuk membuat branch baru kalian masukan! ```bash
git checkout -b [nama branch]
```

 lalu perintah untuk berpindah branch masukan! ```bash
git checkout [nama branch]
```

 **6.git merge** Ini digunakan untuk menggabungkan branch ke branch yang aktif biasa ke branch master perintahnya! ```bash
git merge [nama branch]
```

 **7.git commit** Untuk meyimpang ke repository dengan perintah! ```bash
git commit -m "same message"
```

 **8.git log** Untuk menampilkan daftar commit yang sudah dibuat perintahnya! ```bash
git log
```

## Perintah Git Untuk Github

 **1.git clone** Ini digunakan biasanya untuk mengcopy projeck kita yang ada di githu. Perintahnya sebagai berikut ```bash
git clone [url repository github]
```

 **2.git push** Biasa digunakan untuk mengupdate project yang ada di github dari git. Untuk melakukan push bisa diawali dengan mengclone terlebih dahulu lalu jika project kalian sudah diubah kalian bisa mengubahnya juga di github dengan printah! ```bash
git push
```

 untuk push remote dari local ke server ```bash
git push origin master
```

 **3.git pull** Ini adalah kebalikan dari git push kalo push untuk mengupdate project kita yang ada digithub. Kalo gi pull untuk mengupdate project kita yang ada di local yang sudah di clone dan ternyata project di github diupdate oleh kalian di beda pernagkat misalnya lalu kalian ingin mengaupdate perojeck kalian juga yang ada di local lewat github tanpa perlu clone ulang perintahnya! ```bash
git pull
```

 **4.git remote** Git remote hampir sama dengan clone namun git remote ini lebih leluasa. Fungsinya untuk menghubungkan repository yang ada di local ke github kita. Jadi kita tidak perlu clone dahulu repo yang ada di github. Kelebihan remote itu <span style="color: #ff0000;">Nama Repository yang dibuat git dilocal dan nama repository di github bisa beda. <span style="color: #333333;">Namun sara saya disamakan saja biar tidak bingung.</span></span> Untuk cara remote ada dua macam yaitu menggunakan **HTTPS** dan **SSH**. Berikut caranya jika menggunakan **HTTPS:** Perintah jika sebelumnya belum meremote apapun ```bash
git remote add origin https://github.com/username/nama_repo.git
```

 Printah jika sebelumnnya sudah pernah remote tapi salah dan jika menggunakan remote add akan error. Jadi harus menggunakan perintah ini! ```bash
git remote set-url origin https://github.com/username/nama_repo.git
```

 Lalu jika menggunakan **SSH** kalian harus setting ssh ke githubnya baca juga: [Cara Mengatur SSH di Github](https://www.kumpul4semut.com/github-ssh) Untuk perintah remote github menggunakan ssh jika sebelunya belum menambah remote maka akan menjadi sebagai berikut: ```bash
git remote add origin git@github.com:username/nama_repo.git
```

 dan untuk merubah remote yang sudah ada: ```bash
git remote set-url origin git@github.com:username/nama_repo.git
```

 Perintah diatas untuk meremote repository yang sudah dibuat di github. Kalian juga bisa membuat repositroy di local dahulu lalu meremotenya ke github. Untuk mengecek remote yang sedang aktif di local masukan perintah! ```bash
git remote -v
```

## Kesimpulannya

 Perintah git memang sangat banyak namun kadang semuanya kita tidak pakai apalagi untuk digunakan sendiri. Tapi jika kalian ingin melihat semua perintah yang ada di git kalian bisa membacanya di [situs git](https://git-scm.com/doc)
