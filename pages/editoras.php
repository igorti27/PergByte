<?php 
   include_once("global/header.php");
   include_once("global/menu.php");
?>

<div id="layoutSidenav_content">
   <main class="container-fluid px-4 mt-5">

    <div class="container d-flex flex-column py-5">
     <!--Barra de Pesquisa-->
      <div class="row justify-content-center mb-4 mt-5 ms-5">
        <div class="col-md-8">
          <div class="mb-3 d-flex flex-row gap-2">
            <button type="button" class="input-group-text lupa" id="lupaEditora" class="lupa">
              <i class="fas fa-search">
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                 </svg>
              </i>
            </button>
            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              id="pesquisaEditoras"
              name="pesquisaEditoras"
              placeholder="Editora..."
            />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEditora"
              id="adicionarEditoras"
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
      <div class="modal" tabindex="-1" id="cadastrarEditora">
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
                id="formularioCadastroEditora"
              >
                <div class="row g-3">
                  <div class="col-10">
                    <label for="nomeCadastroEditora" class="form-label"
                      >Nome:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeCadastroEditora"
                      name="nomeCadastroEditora"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <label for="cnpjCadastroEditora" class="form-label"
                      >CNPJ:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cnpjCadastroEditora"
                      name="cnpjCadastroEditora"
                      required
                    />
                  </div>
                  <div class="col-8">
                    <label for="telefoneCadastroEditora" class="form-label"
                      >Telefone:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="telefoneCadastroEditora"
                      name="telefoneCadastroEditora"
                      required
                    />
                  </div>
                   <div class="col-10">
                    <label for="emailCadastroEditora" class="form-label"
                      >Email:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="emailCadastroEditora"
                      name="emailCadastroEditora"
                      required
                    />
                  </div>
                  <div class="col-8">
                   <label for="enderecoCadastroEditora" class="form-label">Endereço:</label>
                   <input
                     type="text"
                     class="form-control"
                     id="enderecoCadastroEditora"
                     name="enderecoCadastroEditora"
                     required
                   >
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
                Cadastrar Editora
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