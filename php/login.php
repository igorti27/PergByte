 <?php
   
   session_start();

   include_once("bdphp/conecta_bd.php");
   include_once("funcoes/funcoes.php");

   $email = validarEmail(validarDadosGeral($_POST["email"]));
   $senha = validarSenha(validarDadosGeral($_POST["senha"]));


   if(empty($usuario_email) || empty($usuario_senha)){
      $_SESSION["error"] = "Credenciais Inválidas";
      die();
   }

   $sql = "SELECT email, senhaLogin, tipo, nivel, dataNascimento FROM pessoa INNER JOIN leitor ON ('pessoa.id' = pessoa_id) INNER JOIN bibliotecario ON ('pessoa.id' = pessoa_id)";

   $consulta = mysqli_query($conexao,$sql);

   if($consulta){

      if(mysqli_num_rows($consulta) > 0){ 
        
         while($tupla = mysqli_fetch_assoc($consulta)){

            if($usuario_email !== false && $usuario_email == $tupla["email"] && $usuario_senha == $tupla["senhaLogin"]){
                if($tupla["tipo"] == "bibliotecario"){
                   if($tupla["nivel"] == "adminitrador"){ // Bibliotecário de Nível Administrador

                         $_SESSION["usuario"] = [
                           
                           "id" => $tupla["id"],
                           "nome" => $tupla["nome"],
                           "tipo" => $tupla["tipo"],
                           "nivel" => $tupla["nivel"]
                         ];

                        header("location: http://localhost/pergByte/html/pesquisarlivros.php");
                        mysqli_close($conexao);
                        die();  
                    }else{ // Bibliotecário de Nível Comum

                        header("location: http://localhost/pergByte/html/pesquisarlivros.php");

                         $_SESSION["usuario"] = [
                           
                           "id" => $tupla["id"],
                           "nome" => $tupla["nome"],
                           "tipo" => $tupla["tipo"],
                           "nivel" => $tupla["nivel"],
                         ];

                        mysqli_close($conexao); 
                        die();
                    }

                }else{ // Leitor
                     header("location: http://localhost/pergByte/pages/pesquisarlivros.php");
                      $_SESSION["usuario"] = [
                           "id" => $tupla["id"],
                           "nome" => $tupla["nome"],
                           "tipo" => $tupla["tipo"],
                           "dataNascimento" => $tupla["dataNascimento"]
                         ];
                     
                     mysqli_close($conexao);
                     die();
                }
                  
            }

         }

         $_SESSION["error"] = "
           <div class='bg-danger text-white w-25 mx-auto'>
             <span>Nenhum usuário encontrado</span>
           </div>
        ";
         mysqli_close($conexao);
         die();

      }else{
        $_SESSION["error"] = "
          <div class='bg-danger text-white w-25 mx-auto'>
             <span>Nenhum usuário encontrado</span>
          </div>
        ";
        mysqli_close($conexao);
        die();
      }

   }else{

     $error = (string) mysqli_error($conexao);

     $_SESSION["error"] ="
       
     <div class='bg-danger text-white w-25 mx-auto'>
       <span>$error</span>
     </div>

     "; 
     mysqli_close($conexao);
     die();
   }

 ?>