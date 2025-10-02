---
id: 450
title: 'Tutorial Lengkap CRUD Codeigniter 4 dan React js #3 Show Data'
date: '2020-07-03T08:48:56+00:00'
author: 'Jujun Jamaludin'
layout: post
guid: 'https://www.kumpul4semut.com/?p=450'
permalink: /tutorial-lengkap-crud-codeigniter-4-dan-react-js-3-show-data/
wli_pp_post_views_count:
    - '52'
classic-editor-remember:
    - classic-editor
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
image: /wp-content/uploads/2020/08/ci4plusreact-show.jpg
categories:
    - 'codeigniter 4'
    - PHP
    - 'React js'
tags:
    - 'ci4 feat react js'
    - 'CRUD codeigniter 4'
    - 'rest api codeigniter 4 forntend react js'
---

Tutorial CRUD codeigniter 4 dengan react js kali ini sampi pada menampilkan data. Setelah sebelumnya kita [Tutorial CRUD codeigniter 4 dengan react js Create Data](https://www.kumpul4semut.com/tutorial-lengkap-crud-codeigniter-4-dan-react-js-2-create-data/) . Untuk kalian yang belum lihat tutorial sebelumnya mending dilihat dulu ya. \[caption id="attachment\_454" align="aligncenter" width="640"\][![show data codeigniter 4 react js](https://www.kumpul4semut.com/wp-content/uploads/2020/07/ci4plusreact-show-1024x590.jpg)](https://www.kumpul4semut.com/wp-content/uploads/2020/07/ci4plusreact-show.jpg) show data codeigniter 4 react js\[/caption\] Baik langsung saja kita masuk ke langkah-langkahnya

## Membuat method rest api show data codeigniter 4

 Langsung buka controller quotes nya yang telah dibuat di tutorial sebelumnya berada pada **app/Controllers/Quotes.php** . lalu masukan kode ```
<pre class="lang:default decode:true"><?php

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

 Penjelasan! Disini terdapat method baru bernama index dan method tersebut akan menampilkan semua data dari tabel quotes. Tidak usah edit untuk modelsnya karena fungsi findAll merupakan fungsi quoery builder baru pada codeigniter 4. ### Menggunakan api show data codeigniter 4 di react js

 Oke setelah rest api sudah dibuat kita tinggal mainkan rest api tersebut di react jsnya. Langsung buka saja file **react/src/components/Home.js** . Tambah kodenya jadi seperti ini: ```
<pre class="lang:default decode:true">import React, { Component } from "react";

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
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center">
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
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}
```

 Penjelasan!. Saya menambahkan fungsi componentdidmount ini merupakan fungsi yang otomatis dijalankan ketika component selesai di akses. Fungsi ini merupakan fungsi bawaan dari react js. Lalu dalam komponen tersebut saya melakukan fetch terhadap rest api untuk method mengambil data yang telah dibuat diatas. Saya menyimpan data tersebut ke dalam state yang sudah saya buat di constructor bernama listquotes. Lalu melooping state tersebut dalam tabel dalam tabel tersebut saya juga sudah membuat tombol untuk edit dan delete. Tidak lupa fungsi handleSumbit untuk response suksesnya saya panggil fungsi componentdidmount agar saat kita create data maka data akan tampil dalam tabel. Berikut hasilnya: ![CRUD codeigniter 4 dengan react js](https://www.kumpul4semut.com/wp-content/uploads/2020/06/createci4reactjs.gif) CRUD codeigniter 4 dengan react js Komentar jika ada yang error dan tunggu tutorail selanjutnya