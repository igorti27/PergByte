<?php 
   include_once("global/header.php");
   include_once("global/menu.php");
?>

<div id="layoutSidenav_content"> 
  
 <!--Conteúdo principal-->
 <main class="container-fluid px-4 mt-5 d-flex">

    <div class="container d-flex flex-column py-5">
      <!--Barra de Pesquisa-->
       <div class="row justify-content-around mb-4 mt-5 ms-5">
        <div class="col-md-8">
          <div class="mb-3 d-flex flex-row gap-2">
            <button type="button" class="input-group-text lupa" id="lupaAutor" class="lupa">
              <i class="fas fa-search"> 
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
               </svg>
              </i>
            </button>
            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              id="pesquisaAutores"
              name="pesquisaAutores"
              placeholder="Autor..."
            />
            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarAutor"
              id="adicionarAutor"
              type="button"
            >
              <i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.7em"
                  height="0.7em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 3.5A1.5 1.5 0 0 1 13.5 5v5.5H19a1.5 1.5 0 0 1 0 3h-5.5V19a1.5 1.5 0 0 1-3 0v-5.5H5a1.5 1.5 0 0 1 0-3h5.5V5A1.5 1.5 0 0 1 12 3.5"
                    clip-rule="evenodd"
                  /></svg
              ></i>
            </button>
          </div>
        </div>
       </div>


      <div id="respotas" class="d-flex flex-column gap-3 w-100">
           
          <div class="spinner-border text-secondary mt-5 d-none" role="status" id="spinner" style="margin-left:50%"></div>
            
           
              <div class="row justify-content-center ms-2">
        <div class="col-md-8 mt-3">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="resultadoPesquisa"
              data-bs-toggle="modal"
              data-bs-target="#informacoesEmprestimo"
            >
              <div class="border rounded p-3 mb-3">
                <div
                  class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  <!-- Informações -->
                  <div class="flex-grow-1 d">
                    <h5 class="mb-1">Empréstimo 001</h5>
                    <p class="mb-0 text-muted">
                      Data de realização: 00/00/0000
                    </p>
                    <p class="mb-0 text-muted">
                      Previsão de retorno: 00/00/0000
                    </p>
                    <p class="mb-0 text-muted">Data de entrega: 00/00/0000</p>
                    <p class="mb-0 text-muted">
                      Status: Atrasado/Entregue/Entregue com atraso
                    </p>
                    <p class="mb-0 text-muted">Leitor: XXXXXXXXX</p>
                    <p class="mb-0 text-muted">CPF do Leitor: XXXXXXXXX</p>
                  </div>

                  <!-- Botões -->
                  <div class="d-flex flex-nowrap gap-2">
                    <div
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modificarInformacoesEmprestimo"
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="currentColor"
                            d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                          />
                        </svg>
                      </i>
                    </div>

                    <div
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#avisoexclusao"
                      data-stop-propagation
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                  id="circuloStatus"
                  style = "color: yellow;"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!--Janela de Cadastro-->
      <div class='modal' tabindex='-1' id='cadastrarAutor'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Cadastrando...</h5>
            </div>
            <div class='modal-body'>
              <form
                action='#'
                target='_self'
                method='post'
                id='formularioCadastroAutor'
              >
               <div class='row g-3 d-flex gap-2'>
                  <div class='col-10'>
                    <label for='nomeCadastroAutor' class='form-label'
                      >Nome:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='nomeCadastroAutor'
                      name='nomeCadastroAutor'
                      required
                    />

                    <span id="notificacaoAutornome" class="text-danger notificacoesAutor"></span>

                  </div>


                  <div class='col-8 gap-2'>
                    <label for='nacionalidadeCadastroAutor' class='form-label'
                      >Nacionalidade:</label
                    >
                    <input
                      type='text'
                      class='form-control'
                      id='nacionalidadeCadastroAutor'
                      name='nacionalidadeCadastroAutor'
                    />

                    <span id="notificacaoAutornacionalidade" class="text-danger notificacoesAutor"></span>

                  </div>
                  <div class='col-12 gap-2 d-flex flex-column'>
                    <label for='descricaoCadastroAutor' class='form-label'
                      >Descrição:</label
                  >
                    <textarea
                      id='descricaoCadastroAutor'
                      name='descricaoCadastroAutor'
                      rows='6'
                      cols='6'
                    ></textarea>

                   <span id="notificacaoAutordescricao" class="text-danger notificacoesAutor"></span>

                  </div>
                <div/>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Cancelar
              </button>
              <button type='button' class='btn btn-primary' id="btnCadastroAutor">
                Cadastrar Autor
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
 </main>
</div>

   <?php 
     include_once("global/footer.php");
   ?>