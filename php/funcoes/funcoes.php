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

?>