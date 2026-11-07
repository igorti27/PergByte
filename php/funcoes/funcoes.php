<?php

function validarDadosGeral($dado){

   $dado = trim($dado);
   $dado = stripslashes($dado);
   $dado = htmlspecialchars($dado);
        
   return $dado;


}

function validarCPF($cpf){

    $cpfvalido = false; 

    $digito1 = 0;
    $digito2 = 0; 

    for($i = 0; $i < 9; $i++){
        
    }

    
}

?>