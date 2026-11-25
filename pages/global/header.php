<?php
  session_start();
?>

<!DOCTYPE html>
<html lang='pt-br' data-bs-theme="light">
    <head>
        <title>Menu-Pergbyte</title>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href='/pergByte/css/styles.css' rel='stylesheet'/>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="/pergByte/css/menubibliotecarioadmin.css"/>
        <link rel="stylesheet" href="/pergByte/css/global.css"/>
    </head>
<body class='sb-nav-fixed'>
<nav class='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
      <!-- Navbar Brand-->

    <p class='navbar-brand ps-3 me-3'>
    
        <svg xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 512 512'
         width='48'
         height='48'
         fill='none' id='logoPergbyte'>

    <!-- Coroa esquerda -->
    <path d='M120 350
             C80 310 70 250 90 200
             C110 150 140 120 180 100'
          stroke='#3A5F0B'
          stroke-width='12'
          stroke-linecap='round'/>

    <path d='M115 310 l-20 -10
             M105 270 l-22 -6
             M110 230 l-20 8
             M130 190 l-16 15
             M155 150 l-10 20'
          stroke='#3A5F0B'
          stroke-width='10'
          stroke-linecap='round'/>

    <!-- Coroa direita -->
    <path d='M392 350
          C432 310 442 250 422 200
          C402 150 372 120 332 100'
          stroke='#3A5F0B'
          stroke-width='12'
          stroke-linecap='round'/>

    <path d='M397 310 l20 -10
             M407 270 l22 -6
             M402 230 l20 8
             M382 190 l16 15
             M357 150 l10 20'
     stroke='#3A5F0B'
     stroke-width='10'
     stroke-linecap='round'/>

    <!-- Livro -->
    <path d='M150 180
             Q200 160 256 180
             L256 330
             Q200 310 150 330 Z'
     fill='#0B2545'/>

    <path d='M362 180
             Q312 160 256 180
             L256 330
             Q312 310 362 330 Z'
    fill='#0B2545'/>

    <!-- Páginas -->
    <path d='M165 190
          Q205 175 256 190
          L256 315
          Q205 300 165 315 Z'

    fill='#F8F5F0'/>

    <path d='M347 190
       Q307 175 256 190
       L256 315
       Q307 300 347 315 Z'
       fill='#F8F5F0'/>

    <!-- Marcador -->
         <rect x='246' y='175'
            width='20'
            height='110'
            fill='#C9A227'/>

         <path d='M246 285
             L256 315
             L266 285'
             fill='#C9A227'
          />

      </svg>
 
        PergByte
      </p>
      <!-- Sidebar Toggle-->
      <button
        class='btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0'
        id='sidebarToggle'
      >
       
       <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>

      </button> 
      <!--Botão de três linhas-->
      
      <!-- Navbar -->
      <ul class='navbar-nav ms-auto me-3 me-lg-4'> <!--Imagem Perfil do Usuário-->
        <li class='nav-item dropdown'>
          <o
            class='nav-link dropdown-toggle'
            id='navbarDropdown'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'>

            <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
           </svg>
          
          </o>

          <ul
            class='dropdown-menu dropdown-menu-end'
            aria-labelledby='navbarDropdown'>

           <!--Cabeçalho das opções de tema-->
            <li><h6 class='dropdown-header'>Temas</h6></li>

            <!--Tipos de Tema -->
            <li>
              <button
                class='dropdown-item d-flex align-items-center'
                type='button'
                id='botaoTemaClaro'
                data-theme-value='light'
              >
                <i class='bi bi-sun-fill me-2'></i> Tema Claro
              </button>
            </li>
            <li>
              <button
                class='dropdown-item d-flex align-items-center'
                type='button'
                id='botaoTemaEscuro'
                data-theme-value='dark'
              >
                <i class='bi bi-moon-fill me-2'></i> Tema Escuro
              </button>
            </li>
            <!--Tipos de Tema-->
            <li><hr class='dropdown-divider'/></li>
            <li><a class='dropdown-item' onclick='realizarLogout()'>Sair</a></li>
          </ul>
        </li>
      </ul><!--Imagem Perfil do Usuário-->
  </nav>
    
