<?php 
   include_once("../../bdphp/conecta_bd.php");
   include_once("../../funcoes/funcoes.php");


   $numeroClassificacao = (float) $_POST["numeroCadastroClassificacao"];

   $nome = $_POST["nomeCadastroClassificacao"];
   
   $descricao = $_POST["descricaoCadastroClassificacao"];

   if(empty($numeroClassificacao)){
      

       return json_encode(array(""=> true,"msg"=> ""));
   }

