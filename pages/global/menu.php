
<div id='layoutSidenav'>
      <div id='layoutSidenav_nav'>
        <nav class='sb-sidenav accordion sb-sidenav-dark' id='sidenavAccordion'>
          <div class='sb-sidenav-menu'>
            <div class='nav'>
              <a
                class='nav-link collapsed'
                aria-expanded='false'
                href="/pergByte/pages/pesquisarlivros.php"
              > <!--Pesquisa de Livros-->
                <div class='sb-nav-link-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'>
                   <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'/>
                  </svg>
                </div>
                Pesquisa de Livros
              </a>
              
            <?php 
            
               $_SESSION["usuario"] = ["perfil" => "bibliotecarioAdministrador"];
    

              if($_SESSION["usuario"]["perfil"] == "bibliotecarioAdministrador" || $_SESSION["usuario"]["perfil"] == "bibliotecarioComum"){
            ?>
            <a
                class="nav-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              > <!--Gerenciamento-->
                <div class="sb-nav-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                  </svg>
                </div>
                Gerenciamento
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a> <!--Gerenciamento-->

              <div
                class="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              > <!--Opções de Gerenciamento-->
                <nav class="sb-sidenav-menu-nested nav">

                  <a href="/pergByte/pages/autores.php" class="nav-link"  id="autores">Autores</a>

                  <?php 
                    if($_SESSION["usuario"]["perfil"] == "bibliotecarioAdministrador"){
                  ?>
                  <a href="/pergByte/pages/bibliotecarios.php" class="nav-link" id="bibliotecarios">Bibliotecários</a>
                  <?php 
                    }
                  ?>
                  <a href="/pergByte/pages/classificacoes.php" class="nav-link"  id="classificacoes">Classificações</a> 

                  <a href="/pergByte/pages/edicoes.php" class="nav-link" id="edicoes">Edições</a>

                  <a href="/pergByte/pages/editoras.php" class="nav-link" id = "editoras">Editoras</a> 

                  <a href="/pergByte/pages/emprestimos.php" class="nav-link"  id="emprestimos">Empréstimos</a> 

                  <a href="/pergByte/pages/estantes.php" class="nav-link" id="estantes">Estantes</a>

                  <a href="/pergByte/pages/exemplares.php" class="nav-link"  id="exemplares">Exemplares</a>

                  <a href="/pergByte/pages/leitores.php" class="nav-link"  id="leitores">Leitores</a>

                  <a href="/pergByte/pages/livros.php" class="nav-link"  id="livros">Livros</a>

                  <a href="/pergByte/pages/secoes.php" class="nav-link"  id = "secoes">Seções</a>
                
                </nav>
              </div> <!--Opções de Gerenciamento-->
            <?php 
              }else{
            ?>

              <a
                class="nav-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              > <!--Parte de Leitor-->
                <div class="sb-nav-link-icon">
                  <i class="fas fa-book-open"></i>
                </div>
                Meus Empréstimos
               <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a> <!--Parte de Leitor-->

              <div 
                class="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              > <!--Opções de um Leitor-->
                <nav class="sb-sidenav-menu-nested nav">
                  <a href="#" class="nav-link" id="solicitarAgendamentos">
                    Solicitar Agendamento
                  </a>
                  <a href="#" class="nav-link" id="emprestimosAtuais">
                    Empréstimos Atuais
                  </a>
                </nav>
              </div> <!--Opções de um Leitor-->
            <?php 
              }
            ?>

             <div class="sb-sidenav-footer d-flex flex-row gap-3" onclick="realizarLogout()">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                 <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                </svg> 
                <p>Sair</p>
             </div> <!--Rodapé do menu lateral-->

            </div>
          </div>
        </nav>
      </div>
</div>
   
  
 
  