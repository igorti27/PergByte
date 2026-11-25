<?php 

  echo "
   <div id='layoutSidenav'>
      <div id='layoutSidenav_nav'>
        <nav class='sb-sidenav accordion sb-sidenav-dark' id='sidenavAccordion'>
          <div class='sb-sidenav-menu'>
            <div class='nav'>
              <div class='sb-sidenav-menu-heading'></div>

              <a
                class='nav-link collapsed'
                aria-expanded='false'
                href='#'
              > <!--Pesquisa de Livros-->
                <div class='sb-nav-link-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'>
                   <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'/>
                  </svg>
                </div>
                Pesquisa de Livros
              </a>
     
      
             <a
                class='nav-link collapsed'
                href='#'
                data-bs-toggle='collapse'
                data-bs-target='#collapsePages'
                aria-expanded='false'
                aria-controls='collapsePages'
              > <!--Parte de Leitor-->
                <div class='sb-nav-link-icon'>
                  <i class='fas fa-book-open'></i>
                </div>
                Meus Empréstimos
               <div class='sb-sidenav-collapse-arrow'>
                  <i class='fas fa-angle-down'></i>
                </div>
              </a> <!--Parte de Leitor-->

              <div 
                class='collapse'
                id='collapsePages'
                aria-labelledby='headingTwo'
                data-bs-parent='#sidenavAccordion'
              > <!--Opções de um Leitor-->
                <nav class='sb-sidenav-menu-nested nav'>
                  <a class='nav-link' id='solicitarAgendamentos'>
                    Solicitar Agendamento
                  </a>
                  <a class='nav-link' id='emprestimosAtuais'>
                    Empréstimos Atuais
                  </a>
                </nav>
              </div> <!--Opções de um Leitor-->

          <div class='sb-sidenav-footer d-flex flex-row gap-2' onclick='realizarLogout()'>
            <i class='bi bi-box-arrow-left me-1'></i>
            <p>Sair</p>
          </div> <!--Rodapé do menu lateral-->
        </nav>
      </div>
      
      ";
  

?>