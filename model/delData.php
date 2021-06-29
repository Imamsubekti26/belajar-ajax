<?php 
require_once "../asset/db.php";

$id = $_POST['id'];
$hapus = mysqli_query($conn, "DELETE FROM barang WHERE id=$id");
$hasil = ($hapus)? "Data berhasil dihapus" : "Data gagal dihapus";
echo $hasil;




 ?>