---
title: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #3 Show Data"
description: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #3 Show Data"
pubDate: 2020-07-03T08:48:56+00:00
heroImage: "/wp-content/uploads/2020/08/ci4plusreact-show.jpg"
tags: []
draft: false
---

Tutorial CRUD codeigniter 4 dengan react js kali ini sampi pada menampilkan data. Setelah sebelumnya kita [Tutorial CRUD codeigniter 4 dengan react js Create Data](https://www.kumpul4semut.com/tutorial-lengkap-crud-codeigniter-4-dan-react-js-2-create-data/) . Untuk kalian yang belum lihat tutorial sebelumnya mending dilihat dulu ya. show data codeigniter 4 react js Baik langsung saja kita masuk ke langkah-langkahnya

## Membuat method rest api show data codeigniter 4

 Langsung buka controller quotes nya yang telah dibuat di tutorial sebelumnya berada pada **app/Controllers/Quotes.php** . lalu masukan kode 
 ```php
<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Quotes extends ResourceController
{
    protected $format       = 'json';
    protected $modelName    = 'App\Models\Quotes_model';

    public function create()
    {
        $quote   = $this->request->getPost('quote');
        $data = [
            'quote' => $quote,
        ];

        $simpan = $this->model->insertQuotes($data);
        if ($simpan) {
            $msg = ['message' => 'Created quote successfully'];
            $response = [
                'status' => 200,
                'error' => false,
                'data' => $msg,
            ];
            return $this->respond($response, 200);
        }
    }

    public function index()
    {
        return $this->respond($this->model->findAll(), 200);
    }

}
```

 Penjelasan! Disini terdapat method baru bernama index dan method tersebut akan menampilkan semua data dari tabel quotes. Tidak usah edit untuk modelsnya karena fungsi findAll merupakan fungsi quoery builder baru pada codeigniter 4. 
 ## Menggunakan api show data codeigniter 4 di react js

 Oke setelah rest api sudah dibuat kita tinggal mainkan rest api tersebut di react jsnya. Langsung buka saja file **react/src/components/Home.js** . Tambah kodenya jadi seperti ini: 
 ```javascript
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listquotes: [],
      quotes: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ quotes: event.target.value });
  }

  handleSubmit(event) {
    fetch("http://localhost:8080/quotes/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `quote=${this.state.quotes}`,
    })
      .then((respon) => respon.json())
      .then((ra) => {
        if ((ra.status = +200)) {
          this.componentDidMount();
        } else {
          alert("Data don't saved");
        }
      });

    event.preventDefault();
  }
  
  componentDidMount() {
    fetch("http://localhost:8080/quotes")
      .then((respon) => respon.json())
      .then((ra) =>
        this.setState({
          listquotes: ra,
        })
      );
  }

  render() {
    return (
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="name"
                    class="form-controll"
                    value={this.state.quotes}
                    onChange={this.onChange}
                  />
                </label>
                <input
                  class="btn btn-primary btn-sm"
                  type="submit"
                  value="Add Quotes"
                />
              </form>
           <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Quotes</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listquotes.map((data) => {
                  return (
                    <tr>
                      <td>{data.quote}</td>
                      <td class="d-flex justify-content-around">
                        <a
                          href="#"
                          class="badge badge-danger"
                        >
                          delete
                        </a>
                        <a
                          href="#"
                          class="badge badge-warning"
                        >
                          edit
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    );
  }
}
```

 Penjelasan!. Saya menambahkan fungsi componentdidmount ini merupakan fungsi yang otomatis dijalankan ketika component selesai di akses. Fungsi ini merupakan fungsi bawaan dari react js. Lalu dalam komponen tersebut saya melakukan fetch terhadap rest api untuk method mengambil data yang telah dibuat diatas. Saya menyimpan data tersebut ke dalam state yang sudah saya buat di constructor bernama listquotes. Lalu melooping state tersebut dalam tabel dalam tabel tersebut saya juga sudah membuat tombol untuk edit dan delete. Tidak lupa fungsi handleSumbit untuk response suksesnya saya panggil fungsi componentdidmount agar saat kita create data maka data akan tampil dalam tabel. Berikut hasilnya: ![CRUD codeigniter 4 dengan react js](/wp-content/uploads/2020/06/createci4reactjs.gif) CRUD codeigniter 4 dengan react js Komentar jika ada yang error dan tunggu tutorail selanjutnya
