<?php 
   include_once("../../bdphp/conecta_bd.php");
   include_once("../../funcoes/funcoes.php");


   if($_SERVER["REQUEST_METHOD"] !== "GET"){  

      responder(true,"Falha ao tentar fazer a requisição","notificacaoError");
      
   }else{ 

      $nome = isset($_GET["nomeCadastroAutor"]) ? $_GET["nomeCadastroAutor"] : null;

      $nacionalidade = isset($_GET["nacionalidadeCadastroAutor"]) ? $_GET["nacionalidadeCadastroAutor"] : null;

      $descricao = isset( $_GET["descricaoCadastroAutor"]) ? $_GET["descricaoCadastroAutor"] : null;

   // Validação de nome
      if(empty($nome) || $nome == null){
          responder(true,"Nome é um campo obrigatório!","nome");
      }

   // Validação de descrição
      if(!empty($descricao)){

          if(mb_strlen($descricao) > 1000){
             responder(true,"Descrição passou dos limites de caractreres!","descricao");
          }

          if(!preg_match("/^[a-zA-ZÀ-ÿ0-9\s'.!?,():;\"-]*$/u",$descricao)){ // * permite ter esses caracters e \s permite quebra de linha
             responder(true,"Caracteres inválidos!","descricao");
          }
      }

   // Validação da nacionalidade
      if(!empty($nacionalidade)){
          
          if(mb_strlen($nacionalidade,'UTF-8') < 3 || mb_strlen($nacionalidade,'UTF-8') > 21){
             responder(true, "Nacionalidade não atende os requisitos de tamanho!","nacionalidade");
          }

          if(!preg_match("/^[a-zA-ZÀ-ÿ' -]*$/u",$nacionalidade)){
             responder(true, "Caracteres inválidos!","nacionalidade");
          }
          
      }

      if(!empty($nome)){
          
          if(mb_strlen($nome,'UTF-8') < 2 || mb_strlen($nome,'UTF-8') > 100){ // UTF-8 informa que qua À é uma letra só, já que é interpretado A e ` como dois caracteres diferentes
              responder(true,"Nome possui um tamanho inválido!","nome");
          }  

          if(!preg_match("/^[a-zA-ZÀ-ÿ' -]+$/u",$nome)){
             responder(true,"Caracteres inválidos!","nome");
          }
                
      }

         $nome = validarDadosGeral($nome);
         $nacionalidade = validarDadosGeral($nacionalidade);
         $descricao = validarDadosGeral($descricao);

         $sql = "INSERT INTO autor (nome, nacionalidade, descricao) VALUES (?,?,?)";

         $stmt = mysqli_prepare($conexao,$sql);

         if(!$stmt){
            responder(true,"Error ao tentar preparar a requisição","notificacaoError");
         }

         mysqli_stmt_bind_param($stmt,"sss",$nome,$nacionalidade,$descricao);


         $criacao = mysqli_stmt_execute($stmt);

         $stmt = mysqli_stmt_close($stmt);

         mysqli_close($conexao);
         

         if($criacao){
            responder(true,"Aluno criado com sucesso","notificacaoSucesso");
         }else{
            responder(true,"Falha ao cadastrar aluno","notificacaoError");
         }


      }

      mysqli_close($conexao);
 

?>