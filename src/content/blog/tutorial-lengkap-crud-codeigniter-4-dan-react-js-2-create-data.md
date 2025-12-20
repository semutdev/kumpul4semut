---
title: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #2 Create Data"
description: "Tutorial Lengkap CRUD Codeigniter 4 dan React js #2 Create Data"
pubDate: 2020-06-23T07:49:39+00:00
heroImage: "/wp-content/uploads/2020/08/ci4plusreactcreate.jpg"
tags: []
draft: false
---

Create data Codeigniter 4 dan React js Setelah sebelumnya kita [mempersiapan project penggabungan codeigniter 4 dengan react js](https://www.kumpul4semut.com/fullstack-codeigniter-4-dan-react-js-1-persiapan/) selesai. Sekarang kita akan coba menambah data ke dalam database. Disini kita akan membuat aplikasi quotes yaitu aplikasi berbagi status. 

## Pembuatan rest api codeigniter 4 create data

### Langkah 1 : Membuat database dan setting env

 Baik langsung saja karena kita akan berkenalan dengan database silahkan teman-teman buat dahulu nama databasenya. Lalu ubah nama file env di root folder menjadi .env atau bisa buat file bare agar file env asli tidak terhapus. Lalu setting bagian database .env 
```php
database.default.hostname = localhost
database.default.database = ci4
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
```

 Penjelasan! Disini saya membuat database bernama ci4 dan saya menggunakan xmpp window 10 jadi untuk passwordnya saya kosongkan. Teman-teman sesuaikan saja. 
### Langkah 2 : Membuat tabel quotes dengan php spark codeigniter 4

 Buka terminal line masukan perintah: 
```bash
php spark migrate:create quotes
```

 Baik jika teman-teman mau buat aplikasi lain bisa di sesuaikan tabelnya saja. Selanjutnya akan terbentuk file migrationnya. silahkan buka file **app/Config/Database/Migration** Buka file **.php** yang ujungnya ada **\_quotes.** Misalnya file 2020-06-21-041849\_quotes.php Lalu masukan kode berikut: 
```php
<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Quotes extends Migration
{
	public function up()
	{
		$this->forge->addField([
			'quote_id'          => [
				'type'           => 'INT',
				'constraint'     => 5,
				'unsigned'       => TRUE,
				'auto_increment' => TRUE
			],
			'quotes'       => [
				'type'           => 'VARCHAR',
				'constraint'     => '100',
			],
		]);
		$this->forge->addKey('quote_id', TRUE);
		$this->forge->createTable('quotes');
	}

	//--------------------------------------------------------------------

	public function down()
	{
		$this->forge->dropTable('quotes');
	}
}
```

 Disini saya hanya membuat 2 kolom yaitu quote\_id untuk primary key yang auto increment dan kolom quotes type varchar. Baik jika dirasa cukup tabelnya teman-teman bisa jalan perintah berikut di terminal line untuk menjalankan file migrationnya: 
```bash
php spark migrate
```

 Maka akan terbentuk tabel baru teman-teman bisa pastikan dengan phpmyadmin. Atau jika belum terbiasa membuat tabel dengan migration bisa buat manual saja pakai phpmyadminnya. 
### Langkah 3 : Membuat routes rest api codeigniter 4

 Langsung saja buka filenya di **app/Config/Routes.php** tambah kode berikut 
```php
$routes->resource('quotes');
```

 Penjelasnnya! kode routes satu baris tersebut sudah mencakup seluruh kebutuhan crud untuk rest api dengan codeigniter 4. Itu setara dengan routes 
```php
$routes->get('quotes/new',             'Quotes::new');
$routes->post('quotes',                'Quotes::create');
$routes->get('quotes',                 'Quotes::index');
$routes->get('quotes/(:segment)',      'Quotes::show/$1');
$routes->get('quotes/(:segment)/edit', 'Quotes::edit/$1');
$routes->put('quotes/(:segment)',      'Quotes::update/$1');
$routes->patch('quotes/(:segment)',    'Quotes::update/$1');
$routes->delete('quotes/(:segment)',   'Quotes::delete/$1');
```

 Jadi cukup sebaris yang tadi saja. Ya walaupun kita tidak akan pakai semua langsung kali ini kita hanya butuh 
### langkah 4 : Membuat controller untuk rest api codeigniter 4

 Silahkan langsung buat file baru bernama **Quotes.php** di **app/Controllers/** ingat nama file controllers harus diawali huruf kapital. Isi controllernya sebagai berikut: 
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

}
```

 Penjelasannya!. Di controller quotes tersebut itu extend ke ResourceController yang merupakai package terbaru dari codeigniter 4 untuk memudahkan dalam pembuatan rest api. Lalu disitu terdapat 1 method untuk create. Disitu sudah konek ke models tapi modelsnya belum kita buat mari kita buat juga modelsnya. 
### Langkah 5 : Membuat model rest api codeigniter 4

 Buat file baru di **app/Models**  dengan nama **Quotes\_model.php** Berikut kodenya: 
 ```php
<?php

namespace App\Models;

use CodeIgniter\Model;

class Quotes_model extends Model
{

    protected $table = 'quotes';

    public function insertQuotes($data)
    {
        return $this->db->table($this->table)->insert($data);
    }

}
```

 Baik sampai sini kita sudah berhasil membuat api create data atau tambah data menggunakan codeigniter 4. Selanjutnya kita akan pakai api tersebut dengan react js. 
## Tambah data atau create data react js include codeigniter 4

### Langkah 1 : Persiapan views codeigniter

 Baik disini kita akan pakai boostrap untuk templatenya jadi silahkan masukan kode ke view codigeniternya .Karena saya belum mengubah view deafultnya jadi saya mengubah viewnya di file **app/Views/welcome\_message.php** 
 ```php
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Welcome to CodeIgniter 4 + React.js!</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style>
		.navbar {
			margin-bottom: 20px;
		}
	</style>
</head>

	<!-- from react -->
	
	<!-- end from react -->
	<script src="/dist/main.js" charset="utf-8"></script>

</html>
```

### Langkah 2 : Membuat component react js

 Kalian bisa simpan di folder react nya buat saja folder baru bernama src yang didalamanya ada folder components Component header 
```javascript
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
          <a class="navbar-brand" href="#">
            CI4&react
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          
        
      </nav>
    );
  }
}
```

 component home 
```javascript
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          alert("Data saved");
        } else {
          alert("Data don't saved");
        }
      });

    event.preventDefault();
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
            
          
        
      
    );
  }
}
```

 Lalu load semua components di app.js 
```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Home from "./src/components/Home";

export default class App extends Component {
  render() {
    return (
      
        <Header />
        <Home />
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

 Baik buat teman teman yang bingung tentang susunan foldernya [![struktur folder codeigniter 4 dengan react js](/wp-content/uploads/2020/06/ci4reactstruktur-1024x576.jpg)](/wp-content/uploads/2020/06/ci4reactstruktur.jpg) Penjelasanya! Saya mengubah path react dari tutorial sebelunya menjadi folder react untuk mengubahnya kalian bisa ubah di file **webpack.config.js** dibagian entry. Lalu didalam folder reactnya saya buat file app.js yang sama seperti tutorial sebelumnya dan didalamnya saya membuat folder **src/components**  Jangan lupa jika kalian mengubah file react js nya kalian harus menjalankan kode berikut di terminal line 
```bash
webpack --watch
```

 itu akan membaca setiap perubahan file react js nya. Baik sekian dulu semoga paham terima kasih.
