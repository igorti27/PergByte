<?php

function validarDadosGeral($dado){

   $dado = trim($dado);
   $dado = stripslashes($dado);
   $dado = htmlspecialchars($dado);
        
   return $dado;


}

function encrypt($data, $salt='!kQm*fF3pXe1Kbm%9') {
    $key = hash('SHA256', $salt, true);
    srand(); $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_RAND);
    if (strlen($iv_base64 = rtrim(base64_encode($iv), '=')) != 22){
        return false;
    }

    $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data . md5($data), MCRYPT_MODE_CBC, $iv));
    return $iv_base64 . $encrypted;
}

function decrypt($cypher, $salt='!kQm*fF3pXe1Kbm%9') {
    $key = hash('SHA256', $salt, true);
    $iv = base64_decode(substr($cypher, 0, 22) . '==');
    $encrypted = substr($cypher, 22);
    $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($encrypted), MCRYPT_MODE_CBC, $iv), "\0\4");
    $hash = substr($decrypted, -32);
    $decrypted = substr($decrypted, 0, -32);
    if (md5($decrypted) != $hash) return false;
    return $decrypted;
}


function validarCPF($cpf){

    $cpfformatado = str_replace([".","-"],"",$cpf);
    //Limpa as pontuações do CPF, (o que remover, pelo que substituir, onde substituir)

    if(strlen($cpfformatado) != 11 || preg_match('/(\d)\1{10}/',$cpfformatado)){
        // preg_math() -> Expressão usada para encontrar padroes em uma string
       // srtlen() -> Verifica o Tamanho do CPF e Se possui o formato 111.111.111-11;
      // (//) -> indicam o inicio e o fim do Regex, \d -> n de 0 a 9, () -> grupo de captura, salva o primeiro num encontrado
     // \1 -> usa o num capturado pelo grupo para comparação, {10} _-> lê se o para comparação aparece mais dez vezes. 

       return false; 
    }
     
        $d1 = 0; // Dígito 1
        $d2 = 0; // Dígito 2

        $somad1 = 0;
        $somad2 = 0;

        $j = 10;
        $k = 11;
        
        // calulo do digito 1
        for( $i = 0; $i < 9; $i++ ){  

            $d = (int) $cpfformatado[$i];

            $somad1 += $d * $j;

            $j--;
        }

        $resto1 = $somad1 % 11;

        if($resto1 >= 2){
            $d1 = 11 - $resto1;
        }else{
            $d1 = 0;
        }

        // calculo do digito 2
        for($c = 0; $c < 9; $c++){

            $d = (int) $cpfformatado[$c];

            $somad2 += $d * $k;

            $k--;
        }
        $somad2 += $d1 * $k;

        $resto2 = $somad2 % 11;

        if($resto2 >= 2){
            $d2 = 11 - $resto2;
        }else{
            $d2 = 0;
        }
        

        $d10 = (int) $cpfformatado[9];
        $d11 = (int) $cpfformatado[10];

        if($d1 == $d10 && $d2 == $d11){
           return true;
        }else{
           return false;
        }
}

function validarSenha($senha){
   
   $tamanho = (strlen($senha) >= 6 && strlen($senha) <= 10 ) ? true : false;
   $numero = preg_match('/[0-9]/',$senha);
   $letraMai = preg_match('/[A-Z]/',$senha);
   $letraMin = preg_match('/[a-z]/', $senha);
   $caracterEsp = preg_match('/[W_]/',$senha);

   if($tamanho == true && $numero == true && $letraMai == true && $letraMin == true && $caracterEsp == true){
       return $senha; 
   }else{
      return false;
   }

}

function validarEmail($email){

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){ // Função válida a formatação do email
         return false;
    }

    $extensaoEmail = strstr($email,'@'); //strstr(), pega tudo o que está de @ em diante
    $dominio = substr($extensaoEmail,1);  //substr(), pega o que está sendo retornado de strstr e remove o @
    
   // Exemplo: nome@gmail.com(email) -> @gmail.com(extensão de email) -> gmail.com(domínio)

   if(!checkdnsrr($dominio,"MX")){ // Checa se o domínio é válido, MX(Mail Exchange) indica que são emails para validar
         return false;
   }

   return $email;

}

function validarNome($dado){
     
    $nomeLimpo = trim($dado);

    if(empty($nomeLimpo)){
         return false;
    }

    if(mb_strlen($nomeLimpo,'UTF-8') < 2 || mb_strlen($nomeLimpo,'UTF-8') > 100){
          return false;
    }

    return (bool) preg_match("/^[a-zA-ZÀ-ÿ' -]+$/u", $nomeLimpo);

   // "/ /" -> indica o início e o fim do Regex;
   // ^ $ -> Faz a verificação do início ao fim da string
   //  a-z -> permite a exitência letras minúsculas;
   // A-Z -> permite a exitência letras Maiúsculas;
   // À-ÿ -> permite a exitência que permitem acentos;
   // ' -> permite a exitência letras apóstrofo;
   // - -> permite a exitência de hífem;
   // u -> equivale a Unicode e permite interpretação de caracteres UTF-8
   //   -> o espaço no colchete permite a existência de espaços em branco no meio da String,
   // para nomes completos

}

function responder($error, $msg, $campo){
      
      echo json_encode(["error" => $error, "msg" => $msg, "campo" => $campo], JSON_UNESCAPED_UNICODE);
      die();

}


?>