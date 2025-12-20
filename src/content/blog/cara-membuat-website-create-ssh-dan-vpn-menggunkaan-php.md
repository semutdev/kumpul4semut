---
title: "Cara Membuat Website Create SSH dan VPN Menggunakan PHP"
description: "Cara Membuat Website Create SSH dan VPN Menggunakan PHP"
pubDate: 2019-07-04T08:49:35+00:00
heroImage: "/wp-content/uploads/2020/08/20190704_140956.png"
tags: []
draft: false
---

**SSH -** Merupakan singkatan dari Secure Shell artinya sebuah alat untuk bertukar data dalam jaringan komputer. Atau remote komputer jarak jauh jadi kita bisa melakukan perintah terhadap komputer dari jarak jauh dengan menggunakan ssh. Biasanya ssh sering dipakai untuk meremote vps sebagai control vpsnya. 

Membuat website create ssh dan vpn Selain untuk meremote komputer ssh juga sering digunakan untuk tunneling atau digunakan untuk merubah isp jaringan internet yang kita gunakan. Yang fungsi awalnya untuk meningkatkan keamanan jaringan internet kita. Sehingga ip atau situs yang sudah di blokir oleh pemerintah bisa ditembus dengan menggunakan ssh. Untuk konek ke vps menggunakan ssh ini biasanya menggunakan aplikasi seperti putty, juicessh dsb. Dan setelah kita konek ke server vps, kita dapat melakukan penyettingan terhadap server vps kita termasuk menyimpan user baru agar user bisa menggunkan ssh tunneling dari server vps kita. 

Tujuan dibuatnya artikel ini untuk pembelajar saja bahwa vps juga bisa kita setting menggunakan php. Tidak hanya website create ssh cara ini juga bisa kalian gunakan untuk mengontrol server vps kalian dari website. Oke penasaran? Langsung aja.. 
## Langkah Pertama: Harus Mengerti Bagaimana Menyetting vps Agar Bisa Digunakan Untuk Tunneling

 Vps yang disewa banyak macamnya namun kebanyakan dari distro linux. Untuk tunneling kalian juga bisa menggunkan mikrotik namun pasti lebih mahal. Jadi buat kalian yang mau membuat web create ssh kalian harus mengerti bagaimana vps bisa jadi server tunneling kalian. Untuk ssh sendiri sampai saat ini ada 3 jenis yaitu openssh, dropbear dan ssl/tls. dan masing masing jenisnya itu memilki cara berbeda untuk menyetting vpsnya. 
 
 Disini kita akan mencoba yang paling mudah yaitu openssh yang sudah otomatis terinstall di vps. Jadi kalian tidak perlu menyetting lagi vps kalian. Untuk port default openssh adalah 22. Kalian bisa langsung gunakan username root dan password root kalian untuk konek ke tunneling openssh. Namun untuk website ssh tidak mungkin kita memberikan password root kita karena password root itu memiliki akses penuh terhadap vps. 
 ## Langkah Kedua: Tahu Cara Menambahkan User Baru di Vps

 Karena kita tidak mungkin menggunakan user root kita untuk dibagikan. Maka kita harus tahu bagaimana menambahkan user baru di vps. Perinthanya! 
 ```bash
useradd user_baru
```

 "user\_baru" ini sesuai kehendak kalian ingin namanya apa. Setelah user baru dibuat kalian juga harus menambahkan passwordnya juga perintahnya! 
 ```bash
passwd user_baru
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

 Nah nanti kalian akan diminta memasukan password dua kali seperti diatas. 
 ## Langkah Ketiga: Bisa Bahasa Pemrograman PHP

 Ya karena kali ini tutorialnya memakai php ada baiknya kalian harus sudah bisa dahulu pemrograman php ya minimal php dasar. Tapi jika belum ya tidak apa-apa untuk pengetahuan saja. Tadi itu perintah yang dilakukan di server vpsnya lalu bagaimana jika perintah diatas itu dilakukan menggunakan php? 
 ## Langkah Keempat: Konek Ke Vps Menggunakan php

 Sebelum kalian melakukan perintah ke vps kalian melalui php kalian terlebih dahulu harus konek ke vps kalian. Konek ini menggunakan username dan password root. Maka dari itu untuk memulai membuat website create ssh kalian harus bisa minimal membuat webiste sederhana agar data vps kalian aman. Untuk cara mengkonekannya disini kami menggunkan library **phpseclib**. Sebenarnya library ini bisa digunakan tidak hanya untuk ssh tapi bisa digunaka untuk keperluan server lainnya yang menggunakan php seperti sftp dsb. ### Cara Konek Ke Vps Menggunakan Phpseclib

 1.Download terlebih dahulu libraray phpseclibnya di [phpseclib sourceforge](https://sourceforge.net/projects/phpseclib/files/phpseclib1.0.16.zip/download) lalu taruh di folder project kalian. 

 2.Jika sudah didownload kalian extrack dahulu filenya dan rubah nama foldernya jadi phpseclib atau terserah kalian. 

 3.lalu kalian buat file baru bernama index.php di folder project kalian. Dan jangan lupa aktifkan xampp atau lampp kalian. Untuk isi dari index.php nya isi dengan! 
 ```php
<?php 
set_include_path(get_include_path() . PATH_SEPARATOR . 'phpseclib');
include('Net/SSH2.php');
$host="ip_host_kalian";
$root_password="root_password_kalian";

$ssh = new Net_SSH2($host);
 if (!$ssh->login('root', $root_password)) {
    echo "login gagal";
 }else{
 	echo "login berhasil";
 }

 ?>
```

 Keterangan! Disitu pertama saya melakukan include library dari phpseclibnya lalu saya menjalankan class ssh2nya. Ubah <span style="color: #ff0000;">ip\_host\_kalian <span style="color: #333333;">dengan ip atau host dengan vps yang kalian punya dan ubah <span style="color: #ff0000;">root\_password\_kalian</span> dengan root password vps kalian.</span></span> Berikut gambarnya koneknya jika tidak ada error. [![](/wp-content/uploads/2019/07/tutorial-ssh-login-berhasil-1024x576.png)](/wp-content/uploads/2019/07/tutorial-ssh-login-berhasil.png) Dan berikut gambarnya jika password yang saya masukan salah [![](/wp-content/uploads/2019/07/tutorial-ssh-login-gagal-1024x576.png)](/wp-content/uploads/2019/07/tutorial-ssh-login-gagal.png) Tidak hanya itu kalian juga akan mendapat beberapa error lainnya seperti: - **Error permision denied** - Ini biasanya karena folder phpseclib kalian perizinan permisionnya tidak 777 untuk pengguna linux kalian bisa ubah permission folder phpseclibnya dengan
 ```bash
chmod -R 777 phpseclib
```
  
   dan pastikan directory terminal kalian berada di folder project kalian . Untuk pengguna window kalian bisa cara caranya untuk merubah permission folder kalian.
- **Fatal Error Connection closed by server** - Ini biasanya terjadi error karen vps kalian tidak bisa diakses port 22 nya erorr. atau root password dan host kalian ada yang salah.
- dsb.
 
## Langkah Kelima: Menambahkan User Ke Vps Lewat PHP Dengan Phpseclib

 Karena kita sudah bisa login ke vps kita maka kita juga bisa melakukan apapun perintah untuk dijalankan di vps melalui php. Termasuk perintah tambah user tadi. Jadi kode index.php nya akan menjadi seperti ini! 
 ```php
<?php 
set_include_path(get_include_path() . PATH_SEPARATOR . 'phpseclib');
include('Net/SSH2.php');

// setting vps 
$host="ip_host_kalian";
$root_password="root_password_kalian";

// setting user baru
$username = "user_yang_mau_ditambah";
$password = "passwordnya";

$ssh = new Net_SSH2($host);
 if (!$ssh->login('root', $root_password)) {
    echo "login gagal";
 }else{
    $ssh->exec("useradd $username");
	    
    $ssh->enablePTY();
    
    $ssh->exec("passwd $username");
    
    $ssh->read("Enter new UNIX password: ");
    
    $ssh->write("$password\n");
    
    $ssh->read("Retype new UNIX password: ");
    
    $ssh->write("$password\n");
    
    $ssh->read('password updated successfully');
 }

 ?>
```

 Jika yang tampil di browser kosong atau ada angka 1 berarti perintah nya berhasil dijalankan di vps anda. Lalu untuk mengecek apakah user baru tadi masuk ke vps bisa cek di vpsnya dengan perintah!
 ```bash
cat /etc/passwd
```

 Nanti akan terlihat banyak user yang sudah masuk ke vps kalian. Tutorial ini hanya sebagian kecil dan dasar untuk membuat website create ssh dan vpn. Jadi kalian harus kembangkan fiturnya sampai jadi web create ssh dan vpn yang keren. ## Kesimpulanya

 Website create ssh dan vpn memang sangat menjanjikan untuk mendapatkan pundi-pundi rupiah dari internet. Namun disamping itu ada beberapa sisi positif dan negatif. Berikut sisi positif dari ssh dan vpn: - Menyetabilkan jaringan internet.
- Membuat koneksi jaringan internet anda aman.
- Mempercepat jaringan internet.
 
 Dan unutk sisi negatifnya menurut saya: - Suka dipakai untuk internet ilegal.
- Suka dipakai untuk mengakses situs porno ( Ini Yang Membuat Saya berhenti Membangun Website SSH ) .
- dsb.
 
 Jadi itu terserah kalian. Tapi kalo cuma buat pengetahuan dan meningkatkan skill koding itu tidak apa-apa. Sekian tutorial kali ini terima kasih telah menyimak. 
 ## Selanjutnya Apa?
- Install vps untuk website
