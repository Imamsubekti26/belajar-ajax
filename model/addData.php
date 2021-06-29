<?php 
require_once "../asset/db.php";

$nama = $_POST['nama'];
$kon = $_POST['kon'];

$tambah = mysqli_query($conn, "INSERT INTO barang VALUES(null, '$nama', '$kon')");

$hasil = ($tambah)? "Data berhasil ditambahkan" : "Data gagal ditambahkan";

echo $hasil;

 ?>