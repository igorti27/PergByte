<?php 
   include_once("global/header.php");
   include_once("global/menu.php");
?>

 <div id="layoutSidenav_content">
    <main class="container-fluid px-4 mt-5 d-flex">
      <div class="container py-5">
        <!--Barra de Pesquisa-->
         <div class="row justify-content-center mb-4 mt-5 ms-5">
           <div class="col-md-8">
             <div class="mb-3 d-flex flex-row gap-2">
               <button type="button" class="input-group-text lupa" id="lupaEstante">
                 <i class="fas fa-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                 </i>
                </button>
               <input
                type="text"
                class="form-control barraPesquisaGerenciamento"
                id="pesquisaEstantes"
                name="pesquisaEstantes"
                placeholder="Estante..."
               />

            <button
              class="btn btn-warning fs-4 px-3"
              data-bs-toggle="modal"
              data-bs-target="#cadastrarEstante"
              id="adicionarEstante"
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
      <div class="modal" tabindex="-1" id="cadastrarEstante">
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
                  <div class="col-6">
                    <label for="identificacaoCadastroEstante" class="form-label"
                      >Identificação:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="identificacaoCadastroEstante"
                      name="identificacaoCadastroEstante"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="localizacaoCadastroEstante" class="form-label"
                      >Localização:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="localizacaoCadastroEstante"
                      name="localizacaoCadastroEstante"
                      required
                    />
                  </div>
                  <div class="col-10 d-flex flex-column">
                    <label for="secaoCadastroEstante" class="form-label"
                      >Seção:</label
                    >
                    <select
                      id="secaoCadastroEstante"
                      name="secaoCadastroEstante"
                    >
                      <option value="ficacaoCientifica">
                        Ficção Científica
                      </option>
                      <option value="filosofia">Filosofia</option>
                      <option value="historica">Histórica</option>
                      <option value="romance">Romance</option>

                      <option value="fantasia">Fantasia</option>

                      <option value="ficcaoCientifica">
                        Ficção Científica
                      </option>

                      <option value="terror">Terror</option>

                      <option value="suspense">Suspense</option>

                      <option value="poesia">Poesia</option>
                    </select>
                  </div>
                  <div class="col-12 d-flex flex-column">
                    <label
                      for="secaoDescricaoEstanteCadastro"
                      class="form-label"
                      >Descrição:</label
                    >
                    <textarea
                      id="secaoDescricaoEstanteCadastro"
                      name="secaoDescricaoEstanteCadastro"
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
                Cadastrar Estante
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