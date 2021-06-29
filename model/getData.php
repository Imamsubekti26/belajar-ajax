<?php 
require_once "../asset/db.php";

$result = mysqli_query($conn, "SELECT * FROM barang ORDER BY id");
while ($data = mysqli_fetch_assoc($result)) $hasil[] = $data;

echo json_encode($hasil);

 ?>