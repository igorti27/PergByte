<?php 
    
    include_once("../../bdphp/conecta_bd.php");
    include_once("../../funcoes/funcoes.php");

    $error = false;
    $reposta = "";

    sleep(5);

    $nomeEditora = $_GET['pesquisaEditoras'];
    $nomeEditora = validarDadosGeral($nomeEditora);

    if (empty($nomeAutor)) {

         $error = true;
         $reposta = 'nome invalido';

         mysqli_close($conexao);
  
         return json_encode(array('error' => true, 'reposta' => 'nomeinvalido'));

    }else{
        
    }
