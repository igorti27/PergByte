<?php

session_start();
sleep(5);

$usuario = $_POST['email'];
$senha = $_POST['password'];

if (empty($usuario) || empty($senha)) {
    echo 'credenciais inválidas!';
    die();
} else {
    if ($usuario == 'roger' && $senha == '123') {
        echo 'login realizado com sucesso!';
    } else {
        echo 'credenciais inválidas!';
    }
    die();
}

