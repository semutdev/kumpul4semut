---
id: 567
title: 'Tutorial Lengkap CRUD Codeigniter 4 dan React js #5 Delete Data'
date: '2020-08-06T02:15:52+00:00'
author: 'Jujun Jamaludin'
layout: revision
guid: 'https://kumpul4semut.com/466-autosave-v1/'
permalink: '/?p=567'
---

Tutorial CRUD codeigniter 4 dengan react js sudah samapai delete data. Fungsi delete data itu sesuai namanya untuk menghapus data yang sudah kita tambahkan ke database. \[caption id="attachment\_467" align="aligncenter" width="640"\][![CRUD codeigniter 4 react js delete data](https://kumpul4semut.com/wp-content/uploads/2020/07/ci4plusreact-Recovered-delete-1024x590.jpg)](https://kumpul4semut.com/wp-content/uploads/2020/07/ci4plusreact-Recovered-delete.jpg) CRUD codeigniter 4 react js delete data\[/caption\] Untuk delete data sebenarnya cukup mudah dibandingkan [Tutorial Lengkap CRUD Codeigniter 4 dan React js #4 Edit Data](https://kumpul4semut.com/tutorial-lengkap-crud-codeigniter-4-dan-react-js-4-edit-data/) . Baik langsung saja kita bahas step by step.

### Membuat REST API Codeigniter 4 edit dan delete data

Seperti biasa sebelum melakukan development codeigniter 4 dengan react js kita aktifkan dulu ```
<pre class="lang:default decode:true ">php spark serve

webpack --watch
```

Untuk mengaktifkan server local codeigniter 4 dan untuk membaca setiap perubahan react js. Membuat rest api delete data pada codeigniter 4 baik langsung saja buka file controllersnya **app/Controllers/Quotes.php** dan modelsnya **app/Models/Quotes\_model.php** Masukan method baru untuk controller ```
<pre class="lang:default decode:true">pub```
gregrthgtrh
```
```

 Untuk method modelsnya ```
<pre class="lang:default decode:true ">    public function deleteQuotes($id)
    {
        return $this->db->table($this->table)->delete(['quote_id' => $id]);
    }
```

untuk url rest apinya sudah restfull ya di ```
<pre class="lang:default decode:true ">http://localhost:8080/quotes/id
```

id nya ganti dengan id yang mau diganti oh ya jangan lupa metode requestnya harus **delete**## Delete data react js rest api codeigniter 4

Sekarang kita tinggal aktifkan tombol delete yang sudah kita buat di tutorial sebelumnya. Tambahkan event! ```
<pre class="lang:default decode:true "> <a href="#"
  class="badge badge-danger"
  onClick={() => this.delete(data.quote_id)}
   >
   delete
 </a>
```

jadi tombol deletenya ketika di klik akan memanggil fungsi delete sambil mengirim parameter id yang akan dihapus. Untuk fungsi deletenya seperti ini! ```
<pre class="lang:default decode:true ">delete(id) {
    fetch("http://localhost:8080/quotes/" + id, {
      method: "DELETE",
    })
      .then((respon) => respon.json())
      .then((ra) => {
        console.log(ra);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
      });
  }
```

Nah mudah bukan membuat CRUD codeigniter 4 dengan react js. Semoga apa yang saya sampaikan bisa bermanfaat dan menjadi amal jariyah. Untuk source kode lengkapnya bisa lihat di. Github : [crudci4reactjs](https://github.com/kumpul4semut/crudci4reactjs)