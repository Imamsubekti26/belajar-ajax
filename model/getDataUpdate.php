<?php 
require_once "../asset/db.php";

$id = $_POST['id'];

$cari = mysqli_query($conn, "SELECT * FROM barang WHERE id=$id");

while ($data = mysqli_fetch_assoc($cari)) $hasil[] = $data;

echo json_encode($hasil);

 ?>