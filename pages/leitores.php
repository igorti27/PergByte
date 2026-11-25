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
            <button type="button" class="input-group-text lupa" id="lupaLeitor">
              <i class="fas fa-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </i>
            </button>

            <input
              type="text"
              class="form-control barraPesquisaGerenciamento"
              placeholder="Leitores..."
              id="pesquisaLeitores"
              name="pesquisaLeitores"
            />

            <button type="button" class="btn btn-warning fs-4 px-3" id="adicionarLeitor" data-bs-toggle="modal" data-bs-target="#cadastrarLeitor">
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

       <!--Janela de Cadastro-->
       <div class="modal" tabindex="-1" id="cadastrarLeitor">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastrando...</h5>
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
                id="formularioCadastroLeitor"
                class="d-flex flex-column align-items-center gap-3"
              >
                <div class="row g-3">
                  <div class="col-12">
                    <label for="nomeCadastroLeitor" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nomeCadastroLeitor" name="nomeCadastroLeitor" required>
                  </div>
                <div class="col-12">
                    <label for="emailCadastroLeitor" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" id="emailCadastroLeitor" name="emailCadastroLeitor" required>
                </div>
                <div class="col-7">
                   <label for="dataNascimentoCadastroLeitor" class="form-label">Data de Nascimento:</label>
                   <input type="date" class="form-control" id="dataNascimentoCadastroLeitor" name="dataNascimentoCadastroLeitor" required>
                </div>
                <div class="col-8">
                  <label for="cpfCadastroLeitor" class="form-label">CPF:</label>
                  <input type="text"
                     class="form-control"
                     id="cpfCadastroLeitor"
                     name="cpf"
                     placeholder="000.000.000-00"
                     maxlength="14"
                     required>
                </div>
                <div class="col-10">
                   <label for="imagemCadastroLeitor" class="form-label">Imagem de Perfil:</label>
                   <input type="file" class="form-control" id="imagemCadastroLeitor" name="imagemPerfilLeitorCadastro"> 
                </div>
                <div class="col-8">
                  <label for="senhaCadastroLeitor" class="form-label">Senha:</label>
                  <input type="password" class="form-control" id="senhaCadastroLeitor" name="senha" required>
                </div>
                <div class="col-8">
                   <label for="confirmarSenhaCadastroLeitor" class="form-label">Confirmar Senha:</label>
                   <input type="password" class="form-control" id="confirmarSenhaCadastroLeitor" name="confirmarSenha" required>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cadastrar Leitor
              </button>
            </div>
          </form>
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