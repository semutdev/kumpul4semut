---
title: "Cara Install React Native Tanpa Android Studio di window 10"
description: "Cara Install React Native Tanpa Android Studio di window 10"
pubDate: 2022-10-18T00:35:07+00:00

tags: []
draft: false
---

React native merupakan salah satu library untuk membuat aplikasi android berbasis hybrid. Biasanya untuk membuat aplikasi android dengan native itu menggunakan android studio dengan pemerogrmaman java atau kotlin.

Masalah yang sering dialami ketika menggunakan android studio ialah memori. Ya android studio ini banyak memakan memori dan kebetulan komputer saya hardsiknya abis rusak tinggal menyisakan memori ssd yang ta seberapa. malah curhat hehe.

Oke oleh sebab itu karena saya suka dengan react native jadi mencari solusi untuk meminimalisir memori tapi masih bisa development react native. sampai akhirnya berhasil. berikut langkah nya.

### Langkah 1: Menginstall JDK

Walapun react native menggunakan javascript tapi aslinya react native mengcomile scriptnya menjadi java native untuk android, jadi kita membutuhkan JDK agar bisa menggunakan react native.

Jika menggunakan android studio JDK ini sudah include didalamnya. cuma karena kita gak mau install android studionya jadi kita install bagian yang kita butuhkan aja. OKe untuk menginstall JDk bisa download di <https://www.oracle.com/java/technologies/downloads/#java11-windows>  
harus versi yang terbaru ya.

jika sudah diinstall harusnya sekarang ada folder JDK nya di program files seperti berikut.

![](/wp-content/uploads/2022/08/Pasted.png)selanjutnya masuk ke setting environment, caranya ketika aja environment di window nanti ada menu **edit the system environment** lalu pilih **environment variable.** tambah variable baru dengan klik new masukan data sebagai berikut

![](/wp-content/uploads/2022/08/Pasted-1.png)
### Langkah 2: Menginstall SDK Manager

Syarat yang kedua untuk menggunakan react native harus menginstall beberapa SDK dari android studio, nah karena kita tidak mau menginstall android studio maka kita akan install SDK nya manual dan yang diperlukan saja.

baik kali ini saya mau install SDK nya mengunakan command line maka dari itu kita perlu menginstall commandline tools untuk SDK ini.

1. Download SDK Manager compresed file. caranya kunjungi link https://developer.android.com/studio#downloads . lalu scroll ke bawah sampai menemukan **command line tools only.** pilih yang windows tentunya ![](/wp-content/uploads/2022/08/Pasted-3.png)
2. Extract hasil download tersebut. Selajutnya buat folder tempat SDK nanti disini saya akan simpan di **C:\\Android** dan saya simpan hasil extract di folder tersebut sehingga akan terbentuk struktur folder **C:\\Android\\cmdline-tools\\<unzipped files>**
3. Edit file **source.properties** dan sesuaikan versionnya dengan versi sdk yang didownload![](/wp-content/uploads/2022/10/Pasted.png)
4. Oke sekarang tambah 2 **environment** baru untuk ANDROID\_HOME dan cmdline-tools pada **system variables**
5. **![](/wp-content/uploads/2022/10/Pasted-1.png)**

### Langkah 3: Menginstall Android SDK packages

Oke jika sdk manager nya sudah terinstall sekarang kita install beberapa SDK packagesnya melalu command line

#### 1. Install Platform Tools (ADB & Fastboot)

```bash
sdkmanager "platform-tools"
```
#### 2. Install Platform

```bash
sdkmanager "platforms;android-30"
```
#### 3. Add System Image

```bash
sdkmanager "system-images;android-30;google_apis;x86_64"
```

```bash
sdkmanager "system-images;android-30;google_apis_playstore;x86_64"
```
#### 4. Install Build Tools

```bash
sdkmanager "build-tools;30.0.3"
```

Oke jika sdk nya sudah berhasil terinstall semua sekarang temen temen bisa install react nativenya, oh ya disini untuk emulatornya saya pakai real device jadi tidak install emulator biar tambah ringan.

Referensi 1: <https://dev.to/shivams136/how-to-install-android-sdk-without-android-studio-ff2>

Referensi 2 : https://reactnative.dev/docs/environment-setup
