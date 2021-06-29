<?php 
require_once "../asset/db.php";

$nama = $_POST['nama'];
$kon = $_POST['kon'];
$id = $_POST['id'];

$perbarui = mysqli_query($conn, "UPDATE barang SET nama='$nama', kondisi='$kon' WHERE id=$id");

$hasil = ($perbarui)? "Data berhasil diperbarui" : "Data gagal diperbarui";

echo $hasil;

 ?>