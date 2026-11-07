<?php 

  include_once("../../bdphp/conecta_bd.php");
  include_once("../../funcoes/funcoes.php");

  $error = false;

  sleep(5);

  if($_SERVER["REQUEST_METHOD"] === "GET"){

    $nomeAutor = $_GET['pesquisaAutores'];
    $nomeAutor = validarDadosGeral($nomeAutor);

    if(empty($nomeAutor)){

       $error = true; 
       $nomeerror = 'nome invalido';

       $arrayerror = json_encode(array('error' => true,'nomeerror'=> $nomeerror));

       mysqli_close($conexao);

       return $arrayerror;
           
    }else{

      $sql = "SELECT id, nome, nacionalidade, descricao FROM autor WHERE nome = $nomeAutor";

      $resultado = mysqli_query($conexao,$sql); 

      if($resultado){

      }else{

         
      }
       
    }
      
  }else{

     $error = true;
     $nomeerror = "falha ao enviar o pedido de busca";

     $arrayerror = json_encode(array('error' => true,'nomeerror'=> $nomeerror));

     mysqli_close($conexao);
    
  }

?>