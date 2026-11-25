<?php 
   include_once("global/header.php");
   include_once("global/menu.php");
?>


<div id="layoutSidenav_content">
  <main class="container-fluid px-4 mt-5">
    <div class="container py-5">

       <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5 ms-5">
        <div class="col-md-8">
          <div class="mb-3 d-flex flex-row gap-2">
          
            <button type="button" class="input-group-text lupa" id="lupaSecao">
              <i class="fas fa-search">

              </i>
            </button>
            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              id="pesquisaSecoes"
              name="pesquisaSecoes"
              placeholder="Secao..."
            />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarSecao"
              id="adicionarSecao"
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
            
    
      </div>


      <!--Janela de cadastro-->
      <div class="modal" tabindex="-1" id="cadastrarSecao">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando..</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="#"
                target="_self"
                method="post"
                id="formularioCadastroEstante"
              >
                <div class="row g-3">
                  <div class="col-6 d-flex flex-column">
                    <label for="nomeCadastroSecao" class="form-label"
                      >Nome:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeCadastroSecao"
                      name="nomeCadastroSecao"
                      required
                    />
                  </div>
                  <div class="col-7 d-flex flex-column">
                    <label for="siglaCadastroSecao" class="form-label"
                      >Sigla:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="siglaCadastroSecao"
                      name="siglaCadastroSecao"
                      required
                    />
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label
                      for="descricaoSecaoCadastro"
                      class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="descricaoSecaoCadastro"
                      name="descricaoSecaoCadastro"
                      rows="7"
                      cols="7"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Seção
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