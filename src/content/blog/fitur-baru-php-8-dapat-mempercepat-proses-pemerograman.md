---
title: "Fitur Baru PHP 8 Dapat Mempercepat Proses Pemerograman"
description: "Fitur Baru PHP 8 Dapat Mempercepat Proses Pemerograman"
pubDate: 2020-12-13T22:56:52+00:00
heroImage: "/wp-content/uploads/2020/12/php8.jpg"
tags: []
draft: false
---

Akhirnya php mengeluarkan versi terbarunya yaitu versi 8. Yang dirillis akhir november 2020. Dengan rilisnya php 8 ini membuktikan memang bahasa pemerograman php masih dikembangkan dan juga masih work it untuk dipelajari. Lalu apa saja fitru baru yang ditawarkan php versi 8. Berikut ulasannya.

## Perbandingan string ke angka yang lebih waras

 Kita mulai dari yang banyak dibahas sampai dibuat meme yaitu tentang perbandingan string dan angka untuk angka nol. Yang pada php 7 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">0 == 'foobar' // true
```

 Pada php 8 menjadi ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">0 == 'foobar' // false
```

 Tapi kalo dipikir iya juga kenapa di php 7 angka nol sama dengan sebuah string haha. ## Expression baru yaitu match

 Ini juga gak kalah keren php 8 sekarang ada expression baru namanya match. Sebenarnya ini pengganti switch yang dalam penulisannya biasa agak panjang di php versi 8 ini dengan adanya expression match jadi lebih singkat. php 7 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">switch ($age) {
    case 7:
        return "anak anak";
        break;
    case 17:
        return "dewasa:
        break;
    default:
        return "not found"
        break;
}
```

 php 8 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">match ($age) {
  7 =>"anak anak",
  17 => "dewasa",
};
```

## Promosi properti konstruktor

 Ini kita bisa gunakan pada oop classes yang digunakan biasanya untuk mengirim nilai pada class berikut perbedaannya. php 7 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">class hewan{
    public string $jinak;

    public function __construct(string $jinak)
    {
        $this->jinak = $jinak;

    }
}
```

 php 8 ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">class hewan{
    public function __construct(public string $jinak)
    {
        
    }
}
```

 Jadi dangan pendek ya dalam pembuatan properti di class. ## Named Arguments

 Fitur ini biasa digunakan di bahasa pemerograman lain kayk di python. Namun pada php baru di versi 8 diterapkan. Named arguments ini biasa digunakan dalam function. Agar lebih jelas berikut perbandingannya. ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">funtion orang(string $nama, int $umur, string $alamat){}

//untuk mengisi argument function orang pada php 7 harus urutan misal disini kita tidak tahu umurnya maka kita akan skip argumen umur 
//php 7
orang('steven', null, 'ciraos');
//php 8
orang(nama : 'steven', alamat: 'ciraos'); // jadi kita tidak perlu memasukan null
```

## Nullsafe operator

 Oke yang terakhir pada pembahasan kali ini ialah nullsafe operator. Ya sudah kelihatan dari namanya ini untuk mengecek nilai kosong. Langsung aja perbedaanya. php 7 untuk mengecek null ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">$country =  null;

if ($session !== null) {
  $user = $session->user;

  if ($user !== null) {
    $address = $user->getAddress();
 
    if ($address !== null) {
      $country = $address->country;
    }
  }
}
```

 php 8 untuk mengecek null ```
<pre class="EnlighterJSRAW" data-enlighter-language="generic">$country = $session?->user?->getAddress()?->country;
```

 Jadi ini mirip seperti javascript dalam pengecekan null bisa pakai tanda tanya . Dan itulan fitur baru php 8 yang bisa kita gunakan untuk pemerograman jadi lebih effisien dan cepat. Oh ya belum terbahas di php 8 juga sudah menggunakan teknologi JIT yang intinya dapat mempercepat proses pengerjaan kode php jadi bahasa pemerograman php bisa lebih cepat . Sekian terima kasih.
