<?php

$servidor = "localhost:3306";
$usuario = "root";
$senha = "@mySQL_1MA";

$conexao = mysqli_connect($servidor,$usuario,$senha);

if(!$conexao){
   header("Location: https://localhost/pergByte/html/error500.php");
   die();
}

?>